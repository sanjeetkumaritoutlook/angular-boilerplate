import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Subscription } from 'rxjs';
import { LoadingIndicatorService } from './loading-indicator.service';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit, OnDestroy {
  displayFlag = false;
  constructor(private loadingIndicatorService: LoadingIndicatorService) { }
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  private _loadingMessage: string;
  private subLoadStarted: Subscription;
  private subLoadEnded: Subscription;

  /** Loading message to bind to the loading modal window */
  public get loadingMessage(): string {
    return this._loadingMessage;
  }

  ngOnInit(): void {
    // Subscribe to the relevant events in order to show and hide the modal
    this.subLoadStarted = this.loadingIndicatorService.loadStarted.subscribe(loadingMessage => this.onLoadStarted(loadingMessage));
    this.subLoadEnded = this.loadingIndicatorService.loadEnded.subscribe(() => this.onLoadEnded());
  }

  ngOnDestroy(): void {
    if (this.subLoadStarted) { this.subLoadStarted.unsubscribe(); }
    if (this.subLoadEnded) { this.subLoadEnded.unsubscribe(); }
  }

  /** Show the loading indicator and set the provided loading message for template binding */
  private onLoadStarted(loadingMessage: string): void {
    this._loadingMessage = loadingMessage;
    this.displayFlag = true;
  }

  /** Hide the loading indicator and clear the loading message */
  private onLoadEnded(): void {
    this._loadingMessage = null;
    this.displayFlag = false;

  }

}
