export class Validation {
    constructor(){
        this.re_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        this.re_name_lastname = /^(([a-zA-Z0-9-_./])+\s*){1,8}$/;
        this.re_number_phone = /^([0-9]){10}$/;
        this.re_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    }

    validateAge( age ){
        return age >= 18 && age <= 70;
    }

    validateGender( gender ){
        return gender === 'Man' || gender === 'Woman';
    }

    isFalse( bool_value ){
        return bool_value === false
    }

    validateAnyObject( object_values ){
        let list_values = []; 
        for(let i in object_values){
            list_values.push( object_values[i] );
        }
        return list_values.every( this.isFalse );
    }

    verifyEmailPassword( values ){
        const {
            email_user,
            password_user
        } = values;
    
        return this.re_email.test( email_user ) && password_user !== ''
    }

    processErrors( values ){
        const {
            email_user,
            age_user,
            sexual_gender_user,
            name_user,
            lastname_user,
            password_user,
            phone_number_user
        } = values;
    
        const modifiedObject = {
            name_user: !this.re_name_lastname.test( name_user ),
            lastname_user: !this.re_name_lastname.test( lastname_user ),
            email_user: !this.re_email.test( email_user ),
            password_user: !this.re_password.test( password_user ),
            phone_number_user: !this.re_number_phone.test( phone_number_user ),
            age_user: !this.validateAge( age_user ),
            sexual_gender_user: !this.validateGender( sexual_gender_user ),
        }
    
        const allValid = this.validateAnyObject( modifiedObject );
        
        return [ modifiedObject, allValid ]
    }
}

// Password
// 6 to 10 characters
// 1 lowercase letter
// 1 uppercase letter
// 1 numeric digit
// 1 special character

// Email
// The character @
// The mail domain
// Lowercase characters only