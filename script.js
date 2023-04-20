const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const step4 = document.getElementById('step-4');
const final = document.getElementById('final');
const mSteps1 = document.getElementById('m-steps-1');
const mSteps2 = document.getElementById('m-steps-2');
const mSteps3 = document.getElementById('m-steps-3')
const mSteps4 = document.getElementById('m-steps-4')
const back2 = document.getElementById('back-2');
const back3 = document.getElementById('back-3');
const back4 = document.getElementById('back-4');
const steps1 = document.getElementById('steps-1');
const steps2 = document.getElementById('steps-2');
const steps3 = document.getElementById('steps-3');
const steps4 = document.getElementById('steps-4');
//step 1 validation //

if (step1.style.display = "block") {

    
    const name1 = document.getElementById('name');
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const next1 = document.getElementById('next-1');
    const mailFormat =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    mSteps1.style.backgroundColor = 'hsl(206, 94%, 87%)';
    mSteps1.style.color = 'hsl(213, 96%, 18%)';
    steps1.style.backgroundColor = 'hsl(206, 94%, 87%)';
    steps1.style.color = 'hsl(213, 96%, 18%)';

    next1.addEventListener('click', function() {
        //name validation
        if (name1.value === "") {
            name1.style.borderColor = "hsl(354, 84%, 57%)";
            document.getElementById('input-name').innerHTML = "This field is required"
        } else {
            name1.style.borderColor = "hsl(229, 24%, 87%)";
            document.getElementById('input-name').innerHTML = "";
        }

        //email validation
        if (email.value === "") {
            email.style.borderColor = "hsl(354, 84%, 57%"
            document.getElementById('input-email').innerHTML = "this field is required"
        } else if (!email.value.match(mailFormat)) {
            email.style.borderColor = "hsl(354, 84%, 57%";
            document.getElementById('input-email').innerHTML = "Valid email is required"
        } else {
            email.style.borderColor = "hsl(229, 24%, 87%)"
            document.getElementById('input-email').innerHTML = ""
        }

        //phone number validation
        if (number.value === "") {
            number.style.borderColor = "hsl(354, 84%, 57%";
            document.getElementById('input-number').innerHTML = "this field is required"
        } else {
            number.style.borderColor = "hsl(229, 24%, 87%)";
            document.getElementById('input-number').innerHTML = ""
        }

        if (name1.value != "" && email.value != "" && number.value != "" && email.value.match(mailFormat)) {
            step1.style.display = "none";
            step2.style.display = "block";
            step3.style.display = "none";
            step4.style.display = "none";
            final.style.display = "none";
            mSteps1.style.backgroundColor = '';
            mSteps1.style.color = 'hsl(0, 0%, 100%)';
            mSteps2.style.backgroundColor = 'hsl(206, 94%, 87%)';
            mSteps2.style.color = 'hsl(213, 96%, 18%)';
            steps1.style.backgroundColor = '';
            steps1.style.color = 'hsl(0, 0%, 100%)';
            steps2.style.backgroundColor = 'hsl(206, 94%, 87%)';
            steps2.style.color = 'hsl(213, 96%, 18%)';
        }

    })
}


//step 2
back2.addEventListener('click', function() {
    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "none";
    step4.style.display = "none";
    final.style.display = "none";
    mSteps2.style.backgroundColor = '';
    mSteps2.style.color = 'hsl(0, 0%, 100%)';
    mSteps1.style.backgroundColor = 'hsl(206, 94%, 87%)';
    mSteps1.style.color = 'hsl(213, 96%, 18%)';
    steps2.style.backgroundColor = '';
    steps2.style.color = 'hsl(0, 0%, 100%)';
    steps1.style.backgroundColor = 'hsl(206, 94%, 87%)';
    steps1.style.color = 'hsl(213, 96%, 18%)';
})

const arcade = document.getElementById('arcade');
arcade.addEventListener('click', function() {

    if (arcade.style.borderColor != "darkblue") {
        arcade.style.borderColor = "darkblue";
        arcade.style.backgroundColor = "hsl(217, 100%, 97%)";

    } else if (arcade.style.borderColor === "darkblue") {
        arcade.style.borderColor = "hsl(231, 11%, 93%)";
        arcade.style.backgroundColor = "hsl(0, 0%, 100%)";
    }

    pro.style.borderColor = "hsl(231, 11%, 93%)";
    advanced.style.borderColor = "hsl(231, 11%, 93%)";
    advanced.style.backgroundColor = "hsl(0, 0%, 100%)";
    pro.style.backgroundColor = "hsl(0, 0%, 100%)";
})

const advanced = document.getElementById('advance');
advanced.addEventListener('click', function() {

    if (advanced.style.borderColor != "darkblue") {
        advanced.style.borderColor = "darkblue";
        advanced.style.backgroundColor = "hsl(217, 100%, 97%)";

    } else if (advanced.style.borderColor === "darkblue") {
        advanced.style.borderColor = "hsl(231, 11%, 93%)";
        advanced.style.backgroundColor = "hsl(0, 0%, 100%)";
    }

    arcade.style.borderColor = "hsl(231, 11%, 93%)";
    pro.style.borderColor = "hsl(231, 11%, 93%)";
    arcade.style.backgroundColor = "hsl(0, 0%, 100%)";
    pro.style.backgroundColor = "hsl(0, 0%, 100%)";
})

const pro = document.getElementById('pro');
pro.addEventListener('click', function() {

    if (pro.style.borderColor != "darkblue") {
        pro.style.borderColor = "darkblue";
        pro.style.backgroundColor = "hsl(217, 100%, 97%)";

    } else if (pro.style.borderColor === "darkblue") {
        pro.style.borderColor = "hsl(231, 11%, 93%)";
        pro.style.backgroundColor = "hsl(0, 0%, 100%)";
    }

    advanced.style.borderColor = "hsl(231, 11%, 93%)";
    arcade.style.borderColor = "hsl(231, 11%, 93%)";
    advanced.style.backgroundColor = "hsl(0, 0%, 100%)";
    arcade.style.backgroundColor = "hsl(0, 0%, 100%)";
})

const switchs = document.getElementById('switch');
const free1 = document.querySelector('#free1');
const free2 = document.querySelector('#free2');
const free3 = document.querySelector('#free3');
const sub1 = document.getElementById('sub-1');
const sub2 = document.getElementById('sub-2');
const sub3 = document.getElementById('sub-3');
const monthly = document.getElementById('monthly');
const yearly = document.getElementById('yearly');
const alert = document.getElementById('alert');
switchs.addEventListener('click', function() {
    if (monthly.style.color != "lightgrey") {
        monthly.style.color = "lightgrey"
        yearly.style.color = "darkblue"
        free1.style.display = "block";
        free2.style.display = "block";
        free3.style.display = "block";
        sub1.innerHTML = "$90/yr";
        sub2.innerHTML = "$120/yr";
        sub3.innerHTML = "$150/yr";
    } else {
        monthly.style.color = "darkblue";
        yearly.style.color = "lightgrey";
        free1.style.display = "none";
        free2.style.display = "none";
        free3.style.display = "none";
        sub1.innerHTML = "$9/mo";
        sub2.innerHTML = "$12/mo";
        sub3.innerHTML = "$15/mo";

    }
    
})

const next2 = document.getElementById('next-2');
next2.addEventListener('click', function() {
   if (arcade.style.borderColor === "darkblue" || advanced.style.borderColor === "darkblue" || pro.style.borderColor === "darkblue") {
    step2.style.display = "none";
    step3.style.display = "block";
    step1.style.display = "none";
    step4.style.display = "none";
    final.style.display = "none";
    mSteps2.style.backgroundColor = '';
    mSteps2.style.color = 'hsl(0, 0%, 100%)';
    mSteps3.style.backgroundColor = 'hsl(206, 94%, 87%)';
    mSteps3.style.color = 'hsl(213, 96%, 18%)';
    steps2.style.backgroundColor = '';
    steps2.style.color = 'hsl(0, 0%, 100%)';
    steps3.style.backgroundColor = 'hsl(206, 94%, 87%)';
    steps3.style.color = 'hsl(213, 96%, 18%)';
    alert.style.display = "none";
   } else {
    alert.style.display = "block";
   }

   if (monthly.style.color === "lightgrey") {
    addOns1.innerHTML = "+$10/yr";
    addOns2.innerHTML = "+$20/yr";
    addOns3.innerHTML = "+$20/yr";
    } else {
    addOns1.innerHTML = "+$1/mo";
    addOns2.innerHTML = "+$2/mo";
    addOns3.innerHTML = "+$2/mo";
    }
})

// step 3
const addOns1 = document.getElementById('sub1')
const addOns2 = document.getElementById('sub2')
const addOns3 = document.getElementById('sub3')
const view = document.getElementById('view');
const duration = document.getElementById('duration');

back3.addEventListener('click', function() {
    step2.style.display = "block";
    step3.style.display = "none";
    mSteps3.style.backgroundColor = '';
    mSteps3.style.color = 'hsl(0, 0%, 100%)';
    mSteps2.style.backgroundColor = 'hsl(206, 94%, 87%)';
    mSteps2.style.color = 'hsl(213, 96%, 18%)';
    steps3.style.backgroundColor = '';
    steps3.style.color = 'hsl(0, 0%, 100%)';
    steps2.style.backgroundColor = 'hsl(206, 94%, 87%)';
    steps2.style.color = 'hsl(213, 96%, 18%)';
})

const check1 = document.querySelector('#checkbox-1');
const optionBox1 = document.getElementById('option-box1');
check1.addEventListener('click', function(e) {
    if (e.target.checked) {
        optionBox1.style.borderColor = "darkblue";
        optionBox1.style.backgroundColor = "hsl(217, 100%, 97%)";
    } else {
        optionBox1.style.borderColor = "hsl(231, 11%, 73%)";
        optionBox1.style.backgroundColor = "hsl(0, 0%, 100%)";
    }
})

const check2 = document.querySelector('#checkbox-2');
const optionBox2 = document.getElementById('option-box2');
check2.addEventListener('click', function(e) {
    if (e.target.checked) {
        optionBox2.style.borderColor = "darkblue";
        optionBox2.style.backgroundColor = "hsl(217, 100%, 97%)";
    } else {
        optionBox2.style.borderColor = "hsl(231, 11%, 73%)";
        optionBox2.style.backgroundColor = "hsl(0, 0%, 100%)";
    }
})

const check3 = document.querySelector('#checkbox-3');
const optionBox3 = document.getElementById('option-box3');
check3.addEventListener('click', function(e) {
    if (e.target.checked) {
        optionBox3.style.borderColor = "darkblue";
        optionBox3.style.backgroundColor = "hsl(217, 100%, 97%)";
    } else {
        optionBox3.style.borderColor = "hsl(231, 11%, 73%)";
        optionBox3.style.backgroundColor = "hsl(0, 0%, 100%)";
    }
})
const alert1 = document.getElementById('alert1');
const next3 = document.getElementById('next-3');
const priceHeader = document.getElementById('mo-price');
const onlinePrice = document.getElementById('online-price');
const largerPrice = document.getElementById('larger-price');
const profilePrice = document.getElementById('profile-price');
const online = document.getElementById('online');
const storage = document.getElementById('storage');
const profile = document.getElementById('profile');
const onlineTime = document.getElementById('online-time');
const largerTime = document.getElementById('larger-time');
const profileTime = document.getElementById('profile-time');
const totalTime = document.getElementById('total-time');
const totalPay = document.getElementById('total-pay');
const timeHeader = document.getElementById('mo-time');
const totalPeriod = document.getElementById('total-month');

next3.addEventListener('click', function() {
    if (optionBox1.style.borderColor === "darkblue" || optionBox2.style.borderColor === "darkblue" || optionBox3.style.borderColor === "darkblue") {
        step2.style.display = "none";
        step3.style.display = "none";
        step1.style.display = "none";
        step4.style.display = "block";
        final.style.display = "none";
        mSteps3.style.backgroundColor = '';
        mSteps3.style.color = 'hsl(0, 0%, 100%)';
        mSteps4.style.backgroundColor = 'hsl(206, 94%, 87%)';
        mSteps4.style.color = 'hsl(213, 96%, 18%)';
        steps3.style.backgroundColor = '';
        steps3.style.color = 'hsl(0, 0%, 100%)';
        steps4.style.backgroundColor = 'hsl(206, 94%, 87%)';
        steps4.style.color = 'hsl(213, 96%, 18%)';
        alert1.style.display = "none";
    } else {
        alert1.style.display = "block";
    }
        //step 4 table
        // I had to write its code here so it will activate whenever the next button on step 3 is clicked
    if (arcade.style.borderColor === "darkblue") {
        view.innerHTML = "Arcade";
    } else if (advanced.style.borderColor === "darkblue") {
        view.innerHTML = "Advanced";
    } else {
        view.innerHTML = "Pro ";
    }

    if (yearly.style.color != "darkblue") {
        duration.innerHTML = "(Monthly)";
        totalPeriod.innerHTML = "Total(per month)"
    } else {
        duration.innerHTML = "(Yearly)";
        totalPeriod.innerHTML = "Total(per year)"
    }

    if (arcade.style.borderColor === "darkblue" && yearly.style.color != "darkblue") {
        priceHeader.innerHTML = 9;
        timeHeader.innerHTML = "/mo"
    } else if (arcade.style.borderColor === "darkblue" && yearly.style.color === "darkblue") {
        priceHeader.innerHTML = 90;
        timeHeader.innerHTML = "/yr"
    }

    if (advanced.style.borderColor === "darkblue" && yearly.style.color != "darkblue") {
        priceHeader.innerHTML = 12;
        timeHeader.innerHTML = "/mo"
    } else if (advanced.style.borderColor === "darkblue" && yearly.style.color === "darkblue") {
        priceHeader.innerHTML = 120;
        timeHeader.innerHTML = "/yr"
    }

    if (pro.style.borderColor === "darkblue" && yearly.style.color != "darkblue") {
        priceHeader.innerHTML = 15;
        timeHeader.innerHTML = "/mo"
    } else if (pro.style.borderColor === "darkblue" && yearly.style.color === "darkblue") {
        priceHeader.innerHTML = 150;
        timeHeader.innerHTML = "/yr"
    }

    if(optionBox1.style.borderColor === "darkblue" && yearly.style.color != "darkblue") {
        onlinePrice.innerHTML = 1;
        onlineTime.innerHTML = "/mo";
    } else if (optionBox1.style.borderColor === "darkblue" && yearly.style.color === "darkblue") {
        onlinePrice.innerHTML = 10;
        onlineTime.innerHTML = "/yr";
    } else {
        onlinePrice.innerHTML = "";
        onlineTime.innerHTML = "";
    }

    if(optionBox2.style.borderColor === "darkblue" && yearly.style.color != "darkblue") {
        largerPrice.innerHTML = 2;
        largerTime.innerHTML = "/mo";
    } else if (optionBox2.style.borderColor === "darkblue" && yearly.style.color === "darkblue") {
        largerPrice.innerHTML = 20;
        largerTime.innerHTML = "/yr";
    } else {
        largerPrice.innerHTML = "";
        largerTime.innerHTML = "";
    }

    if(optionBox3.style.borderColor === "darkblue" && yearly.style.color != "darkblue") {
        profilePrice.innerHTML = 2;
        profileTime.innerHTML = "/mo";
    } else if (optionBox3.style.borderColor === "darkblue" && yearly.style.color === "darkblue") {
        profilePrice.innerHTML = 20;
        profileTime.innerHTML = "/yr";
    } else {
        profilePrice.innerHTML = "";
        profileTime.innerHTML = "";
    }

    if (onlineTime.innerHTML === "") {
        online.style.display = "none";
    } else {
        online.style.display = "flex";
    }

    if (largerTime.innerHTML === "") {
        storage.style.display = "none";
    } else {
        storage.style.display = "flex";
    }

    if (profileTime.innerHTML === "") {
        profile.style.display = "none";
    } else {
        profile.style.display = "flex";
    }

    if (yearly.style.color != "darkblue") {
        totalTime.innerHTML = "/mo";
    } else {
        totalTime.innerHTML = "/yr";
    }

    totalPay.innerHTML = +priceHeader.innerHTML + +onlinePrice.innerHTML + +largerPrice.innerHTML + +profilePrice.innerHTML;
})

// step 4
//back button
back4.addEventListener('click', function() {
    step2.style.display = "none";
    step3.style.display = "block";
    step1.style.display = "none";
    step4.style.display = "none";
    final.style.display = "none";
    mSteps4.style.backgroundColor = '';
    mSteps4.style.color = 'hsl(0, 0%, 100%)';
    mSteps3.style.backgroundColor = 'hsl(206, 94%, 87%)';
    mSteps3.style.color = 'hsl(213, 96%, 18%)';
    steps4.style.backgroundColor = '';
    steps4.style.color = 'hsl(0, 0%, 100%)';
    steps3.style.backgroundColor = 'hsl(206, 94%, 87%)';
    steps3.style.color = 'hsl(213, 96%, 18%)';
})

//chang button
const change = document.getElementById('change');
change.addEventListener('click', function() {
    step2.style.display = "block";
    step3.style.display = "none";
    step1.style.display = "none";
    step4.style.display = "none";
    final.style.display = "none";
    mSteps4.style.backgroundColor = '';
    mSteps4.style.color = 'hsl(0, 0%, 100%)';
    mSteps2.style.backgroundColor = 'hsl(206, 94%, 87%)';
    mSteps2.style.color = 'hsl(213, 96%, 18%)';
    steps4.style.backgroundColor = '';
    steps4.style.color = 'hsl(0, 0%, 100%)';
    steps2.style.backgroundColor = 'hsl(206, 94%, 87%)';
    steps2.style.color = 'hsl(213, 96%, 18%)';
})

const link = document.getElementById('link-link');
const next4 = document.getElementById('next-4');
next4.addEventListener('click', function() {
    step2.style.display = "none";
    step3.style.display = "none";
    step1.style.display = "none";
    step4.style.display = "none";
    final.style.display = "flex";
    link.style.display = "block";
})