import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import {Injectable} from '@angular/core'
import {AuthService} from '../services/auth.service'


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    await this.authService.authRequest

    const isAuth = this.authService.isAuth

    if (!isAuth) {
      this.router.navigate(['/login'])
    }

    return isAuth
  }
}

/* Новый синтаксис
export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  await authService.authRequest

  if (!authService.isAuth) {
    router.navigate(['/login'])
    return false
  }
  return authService.isAuth
}
*/
