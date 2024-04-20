let time = document.getElementById("time");
let button = document.getElementById("go");
let res = document.querySelector(".res");


button.addEventListener("click",(e)=>{
    maxEarnings(time.value);
})


function maxEarnings(x){

    function maxCommercial(x){
        let totalEarnings = 0;
        let theatreCount = 0;
        let pubCount = 0;
        let commercialParkCount = 0;
        
        function maxProfit(x){
            if(x<=4){
                return 0;   
            }
            else if(x==5){
                let remain = x-4;
                pubCount++;
                let earnings = remain*1000;
                totalEarnings += earnings + maxProfit(remain);
                return earnings;
            }
            else if(x>5 && x<14){
                let remain = x-5;
                theatreCount++;
                let earnings = remain*1500;
                totalEarnings += earnings + maxProfit(remain);
                return earnings;
            }
            else{
                let remain = x-10;
                commercialParkCount++;
                let earnings = remain*3000;
                totalEarnings += earnings + maxProfit(remain);
                return earnings;
            }
        }
        maxProfit(x);
        console.log(`Maximum commercial park earnings = ${totalEarnings} and theatre-${theatreCount},pub-${pubCount},commercial-${commercialParkCount}`);
        return{
            totalEarnings,
            pubCount,
            theatreCount,
            commercialParkCount
        };
    }
    let commercialObj = maxCommercial(x);

    function maxTheatre(x){
        let totalEarnings = 0;
        let theatreCount = 0;
        let pubCount = 0;
        let commercialParkCount = 0;

        function maxProfit(x){
            if(x<=4){
                return 0;
            }
            else if(x==5){
                let remain = x-4;
                pubCount++;
                let earnings = remain*1000;
                totalEarnings += earnings + maxProfit(remain);
                return earnings;
            }
            else{
                let remain = x-5;
                theatreCount++;
                let earnings = remain*1500;
                totalEarnings += earnings + maxProfit(remain);
                return earnings;
            }
        }
        maxProfit(x);
        console.log(`Maximum theatre earnings = ${totalEarnings} and theatre-${theatreCount},pub-${pubCount},commercial-${commercialParkCount}`);
        return{
            totalEarnings,
            pubCount,
            theatreCount,
            commercialParkCount
        };
    }
    let theatreObj = maxTheatre(x);

    function maxPub(x){
        let totalEarnings = 0;
        let theatreCount = 0;
        let pubCount = 0;
        let commercialParkCount = 0;

        function maxProfit(x){
            if(x<=4){
                return 0;
            }
            else{
                let remain = x-4;
                pubCount++;
                let earnings = remain*1000;
                totalEarnings += earnings + maxProfit(remain);
                return earnings;
            }
        }
        maxProfit(x);
        console.log(`Maximum pub earnings = ${totalEarnings} and theatre-${theatreCount},pub-${pubCount},commercial-${commercialParkCount}`);    
        return{
            totalEarnings,
            pubCount,
            theatreCount,
            commercialParkCount
        };
    }
    let pubObj = maxPub(x);

    function bestCombination(commercialObj,theatreObj,pubObj){
        if(commercialObj.totalEarnings>theatreObj.totalEarnings && commercialObj.totalEarnings>pubObj.totalEarnings){
            res.innerHTML = `The right mix of properties is T:${commercialObj.theatreCount} P:${commercialObj.pubCount} C:${commercialObj.commercialParkCount} with maximum earnings : $${commercialObj.totalEarnings}`;
        }
        else if(theatreObj.totalEarnings>commercialObj.totalEarnings && theatreObj.totalEarnings>pubObj.totalEarnings){
            res.innerHTML = `The right mix of properties is T:${theatreObj.theatreCount} P:${theatreObj.pubCount} C:${theatreObj.commercialParkCount} with maximum earnings : $${theatreObj.totalEarnings}`;
        }
        else if(pubObj.totalEarnings>commercialObj.totalEarnings && pubObj.totalEarnings>theatreObj.totalEarnings){
            res.innerHTML = `The right mix of properties is T:${pubObj.theatreCount} P:${pubObj.pubCount} C:${pubObj.commercialParkCount} with maximum earnings : $${pubObj.totalEarnings}`;
        }
        else if(theatreObj.totalEarnings == commercialObj.totalEarnings && theatreObj.totalEarnings != pubObj.totalEarnings){
            if(theatreObj.theatreCount == commercialObj.theatreCount){
                res.innerHTML = `The right mix of properties is T:${theatreObj.theatreCount} P:${theatreObj.pubCount} C:${theatreObj.commercialParkCount} with maximum earnings : $${theatreObj.totalEarnings}`;
            }
            else{
                res.innerHTML = `The right mix of properties are T:${commercialObj.theatreCount} P:${commercialObj.pubCount} C:${commercialObj.commercialParkCount},T:${theatreObj.theatreCount} P:${theatreObj.pubCount} C:${theatreObj.commercialParkCount} with maximum earnings : $${commercialObj.totalEarnings}`;
            }
        }
        else if(theatreObj.totalEarnings == pubObj.totalEarnings && theatreObj.totalEarnings != commercialObj.totalEarnings){
            if(theatreObj.theatreCount == pubObj.theatreCount){
                res.innerHTML = `The right mix of properties is T:${theatreObj.theatreCount} P:${theatreObj.pubCount} C:${theatreObj.commercialParkCount} with maximum earnings : $${theatreObj.totalEarnings}`;
            }
            else{
                res.innerHTML = `The right mix of properties are  T:${pubObj.theatreCount} P:${pubObj.pubCount} C:${pubObj.commercialParkCount},T:${theatreObj.theatreCount} P:${theatreObj.pubCount} C:${theatreObj.commercialParkCount} with maximum earnings : $${theatreObj.totalEarnings}`;
            }
        }
        else if(theatreObj.totalEarnings == pubObj.totalEarnings && theatreObj.totalEarnings == commercialObj.totalEarnings){
            if(theatreObj.theatreCount != pubObj.theatreCount){
                res.innerHTML = `The right mix of properties are  T:${pubObj.theatreCount} P:${pubObj.pubCount} C:${pubObj.commercialParkCount},T:${theatreObj.theatreCount} P:${theatreObj.pubCount} C:${theatreObj.commercialParkCount} with maximum earnings : $${theatreObj.totalEarnings}`;
            }
            else if(theatreObj.theatreCount != commercialObj.theatreCount){
                res.innerHTML = `The right mix of properties are T:${commercialObj.theatreCount} P:${commercialObj.pubCount} C:${commercialObj.commercialParkCount},T:${theatreObj.theatreCount} P:${theatreObj.pubCount} C:${theatreObj.commercialParkCount} with maximum earnings : $${commercialObj.totalEarnings}`;
            }
            else{
                res.innerHTML = `The right mix of properties are T:${commercialObj.theatreCount} P:${commercialObj.pubCount} C:${commercialObj.commercialParkCount},T:${theatreObj.theatreCount} P:${theatreObj.pubCount} C:${theatreObj.commercialParkCount} with maximum earnings : $${commercialObj.totalEarnings}`;
            }
        }
    }
    bestCombination(commercialObj,theatreObj,pubObj);
}
