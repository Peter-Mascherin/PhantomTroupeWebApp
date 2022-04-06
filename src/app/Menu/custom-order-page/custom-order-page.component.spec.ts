import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomOrderPageComponent } from './custom-order-page.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('GalleryDialogComponentComponent', () => {
  let component: CustomOrderPageComponent
  let fixture: ComponentFixture<CustomOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,BrowserAnimationsModule, MatInputModule, RouterTestingModule, MatSelectModule,MatFormFieldModule, FormsModule, ReactiveFormsModule, ], 
      declarations: [ CustomOrderPageComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test number of elements to be rendered in form
  it('Test form elements rendered', () => {
      const formElem = fixture.debugElement.nativeElement.querySelector('#customerForm');
      //lets find all elements that require input and make sure they are 2
      const countInput = formElem.querySelectorAll('input');
      //checks for text area
      const checkTextArea = formElem.querySelectorAll('textarea')
      //check for select tag
      const checkSelectTag= formElem.querySelectorAll('mat-select')
      //input we require is email and name
      var totalElem = checkTextArea.length + countInput.length + checkSelectTag.length

      expect(totalElem).toEqual(4)
  })

  //test to check if all values are empty have empty initial values
  it('Test for initial values', () => {
      const grabForm = component.formInfo;
      const initalValues = {
          fullName: '',
          email: '',
          style: '',
          orderDetails:''
      }

      expect(grabForm.value).toEqual(initalValues)

  })

    //test if each field is left blank, for name
    it('Test for if all fields valid', () => {
    
        component.formInfo.setValue({
            fullName: 'Moe',
            email: 'mo@gmail.ca',
            style: 'Wallets',
            orderDetails:'Sample order'
        })
    
        expect(component.formInfo.valid).toEqual(true)
      })
  //test if each field is left blank, for name
  it('Test for if field name missing', () => {
    
    component.formInfo.setValue({
        fullName: '',
        email: 'mo@gmail.ca',
        style: 'Wallets',
        orderDetails:'Sample order'
    })

    expect(component.formInfo.valid).toEqual(false)
  })

  //test if email missing
it('Test for if field email missing', () => {
    component.formInfo.setValue({
        fullName: 'Joe',
        email: '',
        style: 'Wallets',
        orderDetails:'Sample order'
    })

    expect(component.formInfo.valid).toEqual(false)
  })

//test if style missing
it('Test for if field style missing', () => {
    component.formInfo.setValue({
        fullName: 'Joe',
        email: 'mo@gmail.ca',
        style: '',
        orderDetails:'Sample order'
    })

    expect(component.formInfo.valid).toEqual(false)
  })

//test if order  missing missing
it('Test for if field order details missing', () => {
    component.formInfo.setValue({
        fullName: 'Joe',
        email: 'mo@gmail.ca',
        style: 'Wallets',
        orderDetails:''
    })

    expect(component.formInfo.valid).toEqual(false)
  })
//test if all  missing
it('Test for if all values missing', () => {
    component.formInfo.setValue({
        fullName: '',
        email: '',
        style: '',
        orderDetails:''
    })

    expect(component.formInfo.valid).toEqual(false)
  })

//test name length
it('Test for if name length not correct', () => {
    component.formInfo.setValue({
        fullName: 'A',
        email: 'mo@gmail.com',
        style: 'Wallets',
        orderDetails:'Sample order'
    });

    expect(component.formInfo.valid).toEqual(false)
  })
//test for correct name length
it('Test for good name length ', () => {
    component.formInfo.setValue({
        fullName: 'Moe',
        email: 'mo@gmail.com',
        style: 'Wallets',
        orderDetails:'Sample order'
    })

    expect(component.formInfo.valid).toEqual(true)
  })

  //test to see if form will submit if wrong email supplied
it('Test for required email value bad format', () => {
    component.formInfo.setValue({
        fullName: 'John Doe',
        email: '@gmail',
        style: 'Wallets',
        orderDetails:'Sample order'
    })

    expect(component.formInfo.valid).toEqual(false)
  })



  //test to see if form will submit if wrong email supplied
  it('Test for required email value invalid', () => {
    component.formInfo.setValue({
        fullName: 'John Doe',
        email: 'invalid',
        style: 'Wallets',
        orderDetails:'Sample order'
    })

    expect(component.formInfo.valid).toEqual(false)
  })
  //test if email is supplied but wrong format
  it('Test for incomplete email value', () => {
    component.formInfo.setValue({
        fullName: 'John Doe',
        email: 'moh@',
        style: 'Wallets',
        orderDetails:'Sample order'
    })

    expect(component.formInfo.valid).toEqual(false)
  })


  //test if order details length is short
  it('Test for order details length', () => {
    component.formInfo.setValue({
        fullName: 'John Doe',
        email: 'moh@gmail.com',
        style: 'Wallets',
        orderDetails:'Ok'
    })

    expect(component.formInfo.valid).toEqual(false)
  })

//test if order details length is short
it('Test for correct order details length', () => {
        component.formInfo.setValue({
            fullName: 'John Doe',
            email: 'moh@gmail.com',
            style: 'Wallets',
            orderDetails:'Leather bag'
        })
    
        expect(component.formInfo.valid).toEqual(true)
      })
    
//test for number of content inside mat-select
/**it('Test for number of elements inside mat-select', () => {
    let select = fixture.debugElement.query(By.css('.catList')).nativeElement;
    //select.value = select.options[2].value;
    //elect.dispatchEvent(new Event('change'))
    select.click();
    fixture.detectChanges();

    fixture.whenStable().then( () => {
        const inputElement: HTMLElement = debugElement.query(By.css('.ask-input')).nativeElement;
        expect(inputElement.innerHTML.length).toBeGreaterThan(0);
     });

    
})  **/

});
