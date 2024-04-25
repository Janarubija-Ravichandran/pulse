// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { Item } from './item';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   newItem: Item = {
//     profile_image: '',
//     First_Name: '',
//     Middle_Name: '',
//     Last_Name: '',
//     Age: 0,
//     DOB: '',
//     Gender: '',
//     Marital_Status: '',
//     Blood_Group: '',
//     Nationality: '',
//     Current_Location: '',
//     Permanent_Location: '',
//     Phone: '',
//     Email: '',
//     Language_Known: '',
//     Aadhar: '',
//     PanCard: '',
//     Passport: '',
//     E_Relationship: '',
//     E_Name: '',
//     E_Phone: '',
//     C_address1: '',
//     C_address2: '',
//     C_city: '',
//     C_state: '',
//     C_pincode: '',
//     P_address1: '',
//     P_address2: '',
//     P_city: '',
//     P_state: '',
//     P_pincode: '',
//   };

//   selectedFile: File | null = null;
//   imageUrl: string = 'path/to/default-image.jpg';

//   constructor(private router: Router, private http: HttpClient) {}

//   ngOnInit(): void {}

//   onSubmit(): void {
//     if (!this.selectedFile) {
//       console.error('No file selected');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('profile_image', this.selectedFile);
//     formData.append('Emp_Name', `${this.newItem.First_Name} ${this.newItem.Middle_Name} ${this.newItem.Last_Name}`.trim());
//     formData.append('Age', this.newItem.Age.toString());
//     formData.append('DOB', this.newItem.DOB);
//     formData.append('Gender', this.newItem.Gender);
//     formData.append('Marital_Status', this.newItem.Marital_Status);
//     formData.append('Blood_Group', this.newItem.Blood_Group);
//     formData.append('Nationality', this.newItem.Nationality);
//     formData.append('Current_Location', `${this.newItem.C_address1}, ${this.newItem.C_address2}, ${this.newItem.C_city}, ${this.newItem.C_state}, ${this.newItem.C_pincode}`.trim());
//     formData.append('Permanent_Location', `${this.newItem.P_address1}, ${this.newItem.P_address2}, ${this.newItem.P_city}, ${this.newItem.P_state}, ${this.newItem.P_pincode}`.trim());
//     formData.append('Phone', this.newItem.Phone);
//     formData.append('Email', this.newItem.Email);
//     formData.append('Language_Known', this.newItem.Language_Known);
//     formData.append('Aadhar', this.newItem.Aadhar);
//     formData.append('PanCard', this.newItem.PanCard);
//     formData.append('Passport', this.newItem.Passport);
//     formData.append('E_Relationship', this.newItem.E_Relationship);
//     formData.append('E_Name', this.newItem.E_Name);
//     formData.append('E_Phone', this.newItem.E_Phone);

//     this.http.post<any>('http://localhost:8089/api/emp_info/add', formData).subscribe({
//       next: (response) => {
//         console.log('Item added:', response);
//         this.router.navigate(['/academic']);
//       },
//       error: (error) => {
//         console.log('Error adding item:', error);
//       }
//     });
//   }

//   onFileSelected(event: any): void {
//     this.selectedFile = event.target.files[0];

//     if (this.selectedFile && !this.selectedFile.type.startsWith('image/')) {
//       console.error('Selected file is not an image.');
//       alert('Please select a valid image file.');
//       this.selectedFile = null;
//       return;
//     }

//     this.previewImage(this.selectedFile);
//   }

//   previewImage(file: File): void {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       this.imageUrl = reader.result as string;
//     };
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AadharService } from '../aadhar.service';

// import { Item } from './item';
// import { Item } from './../user/user.component';

interface Item{
   profile_image: '',
    First_Name: '',
    Middle_Name: '',
    Last_Name: '',
    Age: 0,
    DOB: '',
    Gender: '',
    Marital_Status: '',
    Blood_Group: '',
    Nationality: '',
    Current_Location: '',
    Permanent_Location: '',
    Phone: '',
    Email: '',
    Language_Known: '',
    Aadhar: '',
    PanCard: '',
    Passport: '',
    E_Relationship: '',
    E_Name: '',
    E_Phone: '',
    C_address1: '',
    C_address2: '',
    C_city: '',
    C_state: '',
    C_pincode: '',
    P_address1: '',
    P_address2: '',
    P_city: '',
    P_state: '',
    P_pincode: ''
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  newItem: Item = {
    profile_image: '',
    First_Name: '',
    Middle_Name: '',
    Last_Name: '',
    Age: 0,
    DOB: '',
    Gender: '',
    Marital_Status: '',
    Blood_Group: '',
    Nationality: '',
    Current_Location: '',
    Permanent_Location: '',
    Phone: '',
    Email: '',
    Language_Known: '',
    Aadhar: '',
    PanCard: '',
    Passport: '',
    E_Relationship: '',
    E_Name: '',
    E_Phone: '',
    C_address1: '',
    C_address2: '',
    C_city: '',
    C_state: '',
    C_pincode: '',
    P_address1: '',
    P_address2: '',
    P_city: '',
    P_state: '',
    P_pincode: ''
  };

  selectedFile: File | null = null;
  imageUrl: string = 'path/to/default-image.jpg';

  constructor(private router: Router, private http: HttpClient, private aadharService: AadharService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    // Creating a FormData object to submit data
    const formData = new FormData();
    formData.append('profile_image', this.selectedFile);

    // Appending other form fields to FormData
    formData.append('Emp_Name', `${this.newItem.First_Name} ${this.newItem.Middle_Name} ${this.newItem.Last_Name}`.trim());
    formData.append('Age', this.newItem.Age.toString());
    formData.append('DOB', this.newItem.DOB);
    formData.append('Gender', this.newItem.Gender);
    formData.append('Marital_Status', this.newItem.Marital_Status);
    formData.append('Blood_Group', this.newItem.Blood_Group);
    formData.append('Nationality', this.newItem.Nationality);
    formData.append('Current_Location', `${this.newItem.C_address1}, ${this.newItem.C_address2}, ${this.newItem.C_city}, ${this.newItem.C_state}, ${this.newItem.C_pincode}`.trim());
    formData.append('Permanent_Location', `${this.newItem.P_address1}, ${this.newItem.P_address2}, ${this.newItem.P_city}, ${this.newItem.P_state}, ${this.newItem.P_pincode}`.trim());
    formData.append('Phone', this.newItem.Phone);
    formData.append('Email', this.newItem.Email);
    formData.append('Language_Known', this.newItem.Language_Known);
    formData.append('Aadhar', this.newItem.Aadhar);
    formData.append('PanCard', this.newItem.PanCard);
    formData.append('Passport', this.newItem.Passport);
    formData.append('E_Relationship', this.newItem.E_Relationship);
    formData.append('E_Name', this.newItem.E_Name);
    formData.append('E_Phone', this.newItem.E_Phone);

    // Sending form data to server
    this.http.post<any>('http://localhost:8090/api/emp_info/add', formData).subscribe({
      next: (response) => {
        console.log('Item added:', response);
        this.aadharService.changeAadhar(this.newItem.Aadhar);

        // Navigate to a different page upon successful submission
        this.router.navigate(['/education']);
      },
      error: (error) => {
        console.error('Error adding item:', error);
      }
    });
  }

  // Handle file selection
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile === null) {
      console.error('No file selected');
      return;
    }

    if (!this.selectedFile.type.startsWith('image/')) {
      console.error('Selected file is not an image.');
      alert('Please select a valid image file.');
      this.selectedFile = null;
      return;
    }

    this.previewImage(this.selectedFile);
  }

  // Preview the image file
  previewImage(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
  }
    adminexp() {
    // Navigate to the dashboard component
    this.router.navigate(['/education']);
  }
}
