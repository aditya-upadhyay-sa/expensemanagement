import { HttpClient } from '@angular/common/http';


export class SignupService {

  public user1 = {
    name: "drumil",
    age: "24"
  }

  constructor(private http: HttpClient) { }


  AddUser() {
    this.http.post('http://localhost:8000/api/users', this.user1).subscribe((r) =>{
      console.log("inside angular")
    }
      
    ),
    (err)=>
    {
      console.log("error ",err);
    }
  }

}

