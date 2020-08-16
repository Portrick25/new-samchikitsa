const meetformCall = document.querySelector('#meet-call');      
    const skypeformCall = document.querySelector('#skypeuser-call');
    const zoomformCall = document.querySelector('#zoomuser-call');
    const whatsappformCall = document.querySelector('#whatsappuser-call');
    
    const skypeformChat = document.querySelector('#skypeuser-chat');
    const zoomformChat = document.querySelector('#zoomuser-chat');
    const whatsappformChat = document.querySelector('#whatsappuser-chat');
    


    
    auth.onAuthStateChanged(function(user){
        if(user){
            var email = user.email;
     
            meetformCall.addEventListener('submit', (e) => {
                e.preventDefault();
                db.collection('meetCall').add({
                method: "call",
                uid:user.uid,
                name: meetformCall.name.value,
                userid: meetformCall.meetid.value,
                date: meetformCall.date.value,
                time: meetformCall.time.value,
                payment:"not completed"
                });
                window.location.replace("../HTML/payment.html");
            })
            
            

        skypeformCall.addEventListener('submit', (e) => {
            e.preventDefault();
            db.collection('skypeCall').add({
            method: "call",
            uid:user.uid,
            name: skypeformCall.name.value,
            userid: skypeformCall.skypeuserid.value,
            date: skypeformCall.date.value,
            time: skypeformCall.time.value,
            payment:"not completed"
            });
            window.location.replace("../HTML/payment.html");
        })
        
        
        zoomformCall.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('zoomCall').add({
            method: "call",
            uid:user.uid,
            name: zoomformCall.name.value,
            userid: zoomformCall.zoomuserid.value,
            date: zoomformCall.date.value,
            time: zoomformCall.time.value,
            payment:"not completed"
        });
        window.location.replace("../HTML/payment.html");
        })
        
        
        whatsappformCall.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('whatsappCall').add({
            method: "call",
            uid:user.uid,
            name: whatsappformCall.name.value,
            userid: whatsappformCall.Wno.value,
            date: whatsappformCall.date.value,
            time: whatsappformCall.time.value,
            payment:"not completed"
        });
        window.location.replace("../HTML/payment.html");
        })
        
        

        
        // database setup for homeopathic teleconsultatio
        //saving data
        
        skypeformChat.addEventListener('submit', (e) => {
            e.preventDefault();
            db.collection('skypeChat').add({
            method: "chat",
            uid:user.uid,
            name: skypeformChat.name.value,
            userid: skypeformChat.skypeuserid.value,
            date: skypeformChat.date.value,
            time: skypeformChat.time.value
            });
            alert("data is uploaded successfully. we will contact you soon")
        })
          
        
        whatsappformChat.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('whatsappChat').add({
            method: "chat",
            uid:user.uid,
            name: whatsappformChat.name.value,
            userid: whatsappformChat.Wno.value,
            date: whatsappformChat.date.value,
            time: whatsappformChat.time.value
        });
        alert("data is uploaded successfully. we will contact you soon")
        })
        
            
    
            //is signed in
        
        }else{
            alert("user not signed in. Login First");
            window.location.replace("../HTML/login.html");
        }
    })  
