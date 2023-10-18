
function edit(){
    
    var data={
    }
    
    
    const Name=document.getElementsByClassName('name-content')
    data['name']=Name[0].innerText
    const rank=document.getElementsByClassName('rank-content')
    data['rank']=rank[0].innerText
    const hourly=document.getElementsByClassName('hourly-content')
    data['hourly']=hourly[0].innerText
    const gender=document.getElementsByClassName('gender-content')
    data['gender']=gender[0].innerText
    const email=document.getElementsByClassName('email-content')
    data['email']=email[0].innerText
    const phone=document.getElementsByClassName('phone-content')
    data['phone']=phone[0].innerText
    const language=document.getElementsByClassName('language-content')
    data['language']=language[0].innerText
    const secondSanguage=document.getElementsByClassName('second-language-content')
    data['secondLanguage']=secondSanguage[0].innerText
    const certificates=document.getElementsByClassName('certificates-content')
    data['certificates']=certificates[0].innerText
    const seftIntro=document.getElementsByClassName('self-introduce-content')
    data['self-introduce']=seftIntro[0].innerText
    
    console.log(data);
    window.location.href=`http://127.0.0.1:5500/edit.html?data=${JSON.stringify(data)}`
}