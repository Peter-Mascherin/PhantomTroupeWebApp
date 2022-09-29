import { Injectable } from "@angular/core";
import {Resolve} from "@angular/router"
import {of} from 'rxjs'
import { FormServiceService } from "../service/form-service.service"

/**
 * class will be used to run methods before navigating/loading component
 */
@Injectable()
export class RouteResolver implements Resolve<any> {

  constructor(private FormService: FormServiceService){

  }
  resolve() {
    console.log('route reoslved') //remove during prod
    return this.FormService.isUserAuthenticated();
  }


}