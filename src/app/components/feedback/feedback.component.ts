import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  val: any = null;
  key: any = 'name';
  rad: any = 0;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      feedback1: ['', Validators.required],
      feedbacktype: ['', Validators.required],
      feedbackradio: ['', Validators.required],
    });
    this.load_data();
  }
  load_data() {
    this.val = sessionStorage.getItem(this.key);
    console.log(this.val);
  }
  onSubmit() {
    console.log('wOAH');

    console.log(this.rad);

    console.log(this.feedbackForm.value);
    let user: any;
    const formulario = new FormData();
    const formData = this.feedbackForm.value;
    Object.keys(formData).forEach((key) => {
      sessionStorage.setItem(key, formData[key]);
    });
    //user = JSON.parse(JSON.stringify(this.formdata.getAll));
    console.log(formData);
  }
}
