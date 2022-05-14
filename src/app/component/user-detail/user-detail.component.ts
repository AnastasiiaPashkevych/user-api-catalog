import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../interface/user.interface";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User
  mode: 'edit' | 'locked' = 'locked'
  buttonText: 'Save changes' | 'Edit' = 'Edit'

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = (<User>(this.activatedRoute.snapshot.data['resolvedResponse'].results[0]))
    // this.activatedRoute.paramMap
    //   .subscribe((params: ParamMap) => {
    //     this.userService.getUser(params.get('uuid')!)
    //       .subscribe((response: any) => {
    //         console.log(response)
    //         this.response = response
    //       })
    //   })
  }

  changeMode(mode?: 'edit' | 'locked'): void {
    this.mode = this.mode == 'locked' ? 'edit' : 'locked'
    this.buttonText = this.buttonText === 'Edit' ? 'Save changes' : 'Edit'
    if (mode === 'edit') {

    }
  }
}
