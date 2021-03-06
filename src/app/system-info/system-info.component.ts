import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import * as packageJson from '../../../package.json';

interface Contributor {
  name: string;
  url: string;
  email: string;
}

@Component({
  selector: 'app-system-info',
  templateUrl: './system-info.component.html',
  styleUrls: ['./system-info.component.css']
})
export class SystemInfoComponent {

  repoName: string;
  description: string;
  version: string;
  repositoryUrl: string;
  contributors: Array<Contributor>;

  constructor(public dialogRef: MatDialogRef<SystemInfoComponent>) {
    this.repoName = packageJson.name;
    this.description = packageJson.description;
    this.version = packageJson.version;
    this.repositoryUrl = packageJson.repository.url;
    this.contributors = packageJson.contributors;
  }

  close(): void {
    this.dialogRef.close();
  }

}
