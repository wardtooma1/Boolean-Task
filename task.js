window.addEventListener("load", function(){
    setTimeout(function(){
    
    
    // --------------  Gather information for criteria
    let residencePermit = prompt(`Do you have a residency permit?`).toUpperCase();
    let germanLevel = prompt(`What's your german level? (eg.: A1, B1, C2)`).toUpperCase();
    let currentlyMarried = prompt(`Are you currently married?`).toUpperCase();
    let marriageLenght = prompt(`How long have you been married? (years)`);
    let yearsInGermany = prompt(`How long have you been living in Germany? (years)`);
    let workingYears = prompt(`How long have you been working in Germany? (years)`);
    let currentlyWorking = prompt(`Are you currently working?`).toUpperCase();
    let wagePercentage = prompt(`Are you currently earning 70% of living costs from a job?`).toUpperCase();
    
    console.log(`-- INFO COLLECTED`);
    console.log(`residencePermit` ,residencePermit);
    console.log(`germanLevel`, germanLevel);
    console.log(`currentlyMarried`, currentlyMarried);
    console.log(`marriageLenght`, marriageLenght);
    console.log(`yearsInGermany`, yearsInGermany);
    console.log(`workingYears`, workingYears);
    console.log(`currentlyWorking`, currentlyWorking);
    console.log(`wagePercentage`, wagePercentage);
    
    // --------------- German level translation into INT
    if(germanLevel==`A1`){germanLevel = 1;};
    if(germanLevel==`A2`){germanLevel = 2;};
    
    if(germanLevel==`B1`){germanLevel = 3;};
    if(germanLevel==`B2`){germanLevel = 4;};
    
    if(germanLevel==`C1`){germanLevel = 5;};
    if(germanLevel==`C2`){germanLevel = 6;};
    
    console.log(`-- germanLevel parse`);
    console.log(`germanLevel parsed`, germanLevel);
    
    // --------------  Permanent Resident permit criteria
    let workingPermit = residencePermit == 'YES' && yearsInGermany >=5 && workingYears>=3 && currentlyWorking == `YES` && germanLevel >=3;
    let blueCard = (residencePermit == `YES` && yearsInGermany >=2 && germanLevel >=3 && currentlyWorking == `YES`) || (residencePermit == 'YES' && yearsInGermany >=3 && germanLevel >=2 && currentlyWorking == `YES`);
    let marriage = currentlyMarried == `YES` && marriageLenght >= 3 && germanLevel >=3;
    let asylum = (germanLevel >= 3 && wagePercentage == `YES` && yearsInGermany >= `YES`) || (germanLevel >= 4 && wagePercentage ==`YES` && yearsInGermany >= 3);
    
    // -------------- Which permit applies?
    console.log(`-- Permit true or false`);
    console.log(`workingPermit`, workingPermit);
    console.log(`bluecard`, blueCard);
    console.log(`marriage`, marriage);
    console.log(`asylum`, asylum);
    
    // ---------------  Visa decision with specific case
    if (workingPermit) {
        alert(`Congratulations! You are eligible for permantent residency with a working permit!`);
        } else if (blueCard){
        alert(`Congratulations! You are eligible for permantent residency with a Blue Card!`);
    
        } else if (marriage){
        alert(`Congratulations! You are eligible for permantent residency based on marriage!`);
    
        } else if (asylum){
        alert(`Congratulations! You are eligible for permantent residency based on asylum!`);
    
        } else {
        alert(`Sorry, you are not eligible. Fuck Borders!`);
    };
    
    // ---------------  Visa decision without specifying the case
    /* if (workingPermit || blueCard || marriage || asylum) {
        alert(`Congratulations! You are eligible for permantent residency!`);
        } else {
        alert(`Sorry, you are not eligible. Fuck Borders!`);
    }; */
    
    //JS Delay value
    },1500);
    });