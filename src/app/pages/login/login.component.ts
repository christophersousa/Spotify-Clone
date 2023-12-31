import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private spotifyService: SpotifyService,
    private router: Router){

  }

  ngOnInit(){
    this.verificarTokenUrlCallback()
  }

  verificarTokenUrlCallback(){
    const token = this.spotifyService.obertTokenUrlCallback();
    if(!!token){
      this.spotifyService.definirAccessToken(token);
      this.router.navigate(['/player'])
    }
  }

  abrirPaginaLogin(){
    window.location.href = this.spotifyService.obeterUrlLogin()
  }
}
