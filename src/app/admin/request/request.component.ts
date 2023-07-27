import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  constructor(private _requestService: RequestService) {}

  i: number = 0;

  requests = {
    file: '',
    assignee: ["ram","shyam"],
    maker_details: [ 
      {
        cas_id: '',
        action: 'post',
        username: '',
        comments: '',
        maker: 'true'
      }
    ],
    file_description: ''
  };

  checkers = new FormControl('');
  checkerList: string[] = ['SatyaRaj', 'PouuuBoyyy', 'Rupesh', 'Suman', 'Gyalbu', 'Rujan'];
  fileInput: any;

  actions = [
    { value: 'post', viewValue: 'POST' },
    { value: 'update', viewValue: 'UPDATE' },
    { value: 'delete', viewValue: 'DELETE' },
  ];

  makers = [
    { value: 'true', viewValue: 'TRUE' },
    { value: 'false', viewValue: 'FALSE' },
  ];

  ngOnInit() {}

  // upload() {
  //   // Get the file from the input element.
  //   const file = this.fileInput.nativeElement.files[0];

  //   // Upload the file to the server.
  //   const url = '/api/upload';
  //   const method = 'POST';

  //   const request = new XMLHttpRequest();
  //   request.open(method, url, true);
  //   request.setRequestHeader('Content-Type', file.type);
  //   request.send(file);
  // }

  // addMaker() {
  //   this.requests.maker_detail.push({
  //     cas_id: '',
  //     action: '',
  //     username: '',
  //     comments: '',
  //     maker: ''
  //   });
  // }

  // removeMaker(index: number) {
  //   this.requests.maker_detail.splice(index, 1);
  // }

  onSubmit() {
    // alert('File uploaded');
    // this._requestService.addRequest(this.requests).subscribe({
    //   next: (response: any) => {
    //     console.log(response);
    //     alert(response);
    //   },
    //   error: () => alert('Could not upload file. Try again'),
    // });
    console.log(this.requests);
  }
}
