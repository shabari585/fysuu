import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-reward-points',
  templateUrl: './reward-points.component.html',
  styleUrls: ['./reward-points.component.css', '../settings/settings.component.css']
})
export class RewardPointsComponent implements OnInit {

  rewardPoints: number;

  userEmail: string;
  userName: string;
  companyName: string;
  userMobile: string;
  userId: string;

  constructor(private router: Router, private authService: AuthService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Settings: Reward Points');
    const user = this.authService.getUserFromLocal();
    const user_parsed = JSON.parse(user);
    this.userEmail = user_parsed.email;
    this.userName = user_parsed.name;
    this.companyName = user_parsed.company_name;
    this.userMobile = user_parsed.mobile;
    this.userId = user_parsed.id;

    this.authService.getUserRewards(this.userId).subscribe(res => {
      console.log(res.msg);
      if (res.success) {
        this.rewardPoints = res.msg;
      }else {
        this.rewardPoints = 0;
      }
    });
  }

}
