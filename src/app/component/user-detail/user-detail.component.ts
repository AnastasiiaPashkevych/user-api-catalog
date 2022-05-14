import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Response} from "../../interface/response.interface";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  response: Response

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((params: ParamMap) => {
        this.userService.getUser(params.get('uuid')!)
          .subscribe((response: any) => {
            console.log(response)
            this.response = response
          })
      })
  }

}
