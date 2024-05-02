import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanMatchFn, ResolveFn, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";

export const canActivateGuard:CanActivateFn =(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
    
    return true;
}

export const canActivateChildGuard :CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
    alert("erişemezsin")
    return false
}

export const canDeactivateGuard: CanDeactivateFn<any>=(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot)=>{

    var value=confirm("Çıkacak mısınız ?")
    if (value) {
        return true
    }
    else{
        return false;
    }
}

export const resolveGuard:ResolveFn<any>= (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
    
    const httpClient = inject(HttpClient)
    return httpClient.get("https://jsonplaceholder.typicode.com/posts")
}


export const loggedSuccesfull:CanMatchFn=(route: Route, segments: UrlSegment[])=>{
    return false;
}
export const notLoggedIn:CanMatchFn=(route: Route, segments: UrlSegment[])=>{
    return true;
}