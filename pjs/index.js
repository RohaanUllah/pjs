// // let x=5;
// // if (true)
// //     {
// //         let x=10;
// //         console.log(x) 
// //     }
// //     console.log(x)

// // var i=6
// // var a=0
// // function add()
// // {
// //     var b=6
// //     console.log(a)
// // }
// //  add()
// // console.log()

// // var a=56;
// // function sub ()
// // {
// //     var i=90
// // }
// // console.log(i)

// // if(true)
// //  {
// //      let j=100
// //  console.log(j)
// //  }








// // const a=12;
// // const b=10
// // function sub()
// // {
// //     console.log(a-b)
// // }
// // sub()


// // let x=5;
// // let x1=2
// // function add()
// //  {
// //      console.log(x-x1)
// //  }
// // add()

// // let y=10;
// //  let y1=5
// //  function sub()
// //  {
// //      console.log(y+y1)
// //  }
// // sub()

// // let z=258;
// // forloop()
// // {
// //     z++>
// //     console.log(z)
// // }

// for(let i=1; i<=10;i++){
//     console.log(2*i);
// }

// var i = 20;
// while (i<=50) {
//     console.log(2*i);
//     i++
// }

// let j = 0;
// do {
//     console.log(2 * j);
//     j++
// } while (j<=20);

// let array = ["thai", "italian", "mexican"];
// console.log(array.push("chinese"));
// // 
// array.splice("japanese");

// console.log(array.splice("blue"));


// let str ="this is my bag";
// console.log(str);
// regexp= /^THIS/;
// if ( regexp.test(str))

// {
//     console.log("found");
// }
//  else
//   {
//     console.log("Not found");
//  }


//  regexp= /^this/;
// if ( regexp.test(str))

// {
//     console.log("found");
// }
//  else
//   {
//     console.log("Not found");
//  }

//  regexp= /bag$/;
// if ( regexp.test(str))

// {
//     console.log("found");
// }
//  else
//   {
//     console.log("Not found");
//  }

//  regexp= /l./g;
// if ( regexp.test(str))

// {
//     console.log("found");
// }
//  else
//   {
//     console.log("Not found");
//  }

//  regexp= /(is)/;
// if ( regexp.test(str))

// {
//     console.log("found");
// }
//  else
//   {
//     console.log("Not found");
//  }

//  regexp= /^this|my/;
// if ( regexp.test(str))

// {
//     console.log("found");
// }
//  else
//   {
//     console.log("Not found");
//  }

//  regexp= /my|is/;
// if ( regexp.test(str))

// {
//     console.log("found");
// }
//  else
//   {
//     console.log("Not found");
//  }

// let str ="thiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiis thiis iis my bag";
// console.log(str);

//  regexp= /t*j/;
// if ( regexp.test(str))

// {
//     console.log("found");
// }
//  else
//   {
//     console.log("Not found");
//  }


// let name= "alpha";
// regexp= /a*a/;
// console.log(regexp.test("aaa"))
// console.log(regexp.test("apl"))
// console.log(regexp.test("pla"))
// console.log(regexp.test("abc"))
// console.log(regexp.test("bbc"))
// console.log(regexp.test("haaaaaaaaaaaaaan"))








// let str= "good";
// regexp= /g.*d/;
// console.log(regexp.test("go"))
// console.log(regexp.test("od"))
// console.log(regexp.test("do"))
// console.log(regexp.test("god"))
// console.log(regexp.test("good"))
// console.log(regexp.test("gooood"))
// console.log(regexp.test("go"))
// console.log(regexp.test("og"))








document.getElementsById('Signup').addEventListener('click',function(){

    let email= document.getElementsById('email').value;
    let password= document.getElementsById('password').value;
    let cpassword= document.getElementsById('cpassword').value;
    let regexp= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-]).{8,}$/


    if(!email.includes("@")){
        alert('email is not valid');
        return ;
    }


        if(!regexp.test(password)){
            alert('Password must contain at least 8 characters');
            return ;
        }

        if(password!== cpassword){
            alert('Passwords do not match!');
            return ;
        }


        alert('Form submitted successfully!');
        document.getElementsByClassName(signup-form);
        return ;
    });