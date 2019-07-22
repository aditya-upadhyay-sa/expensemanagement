import { HttpClient } from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })
export class UserService {




  constructor(private http:HttpClient) {



   }

   getUsers(){
     this.http.get('http://localhost:8000/api/users').subscribe((resdata)=>
     
              console.log(resdata)
     
     )
   }


}
