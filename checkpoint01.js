let comida =["1 - Pipoca - 10 segundos (padrão)","2 - Macarrão - 8 segundos (padrão)","3 - Carne - 15 segundos (padrão)","4 - Feijão - 12 segundos (padrão)","5 - Brigadeiro - 8 segundos (padrão)"];

console.log(comida);

function microwave(tipo,tempo){

    if( ( tipo =='Pipoca' && tempo>2*10 ) || ( tipo =='Macarrão' && tempo>2*8 ) || ( tipo =='Carne' && tempo>2*15 ) || ( tipo =='Feijão' && tempo>2*12 ) || ( tipo =='Brigadeiro' && tempo>2*8 ) ){

        console.log(tipo + " " + "queimou");


    }

    else if( ( tipo =='Pipoca' && tempo<10) || ( tipo =='Macarrão' && tempo<8) || ( tipo =='Carne' && tempo<15) || ( tipo =='Feijão' && tempo<12) || ( tipo =='Brigadeiro' && tempo<8) ){

        console.log("Tempo insuficiente");
    }

    else if( ( tipo =='Pipoca' && (tempo>=10 && tempo<=20 ) ) || ( tipo =='Macarrão' && (tempo>=8 && tempo<=16 ) ) || ( tipo =='Carne' && (tempo>=15 && tempo<=30 ) ) || ( tipo =='Feijão' && (tempo>=12 && tempo<=24 ) ) || ( tipo =='Brigadeiro' && (tempo>=8 && tempo<=16 ) ) ){

        console.log("Prato pronto, bom apetite");
    }

    else if(tipo!='Pipoca' || tipo!='Macarrão' || tipo!='Carne' || tipo!='Feijão' || tipo!='Brigadeiro'){

        console.log("Prato inexistente");
    }
}

microwave('Feijão',15);















