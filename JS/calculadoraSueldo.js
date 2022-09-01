
let sueldoBruto, horasGuardiaPas, horasExtrasCien, horasNocturnas, horasExtras, horasDiarias;
let precioHora, precioHorasExtra, precioHorasCien, precioHorasNoc;
let horasGuardia;
let cantGuardia, cantHorasCien, cantHorasNoc, cantHorasExtras;
let sueldoNeto, sueldoNetoFinal;
let bono, precioBono;



let datosMensuales = {
    sueldoBruto: 0,
    horasDiarias: 0,    
    horasGuardiaPas: 0,
    horasExtrasCien: 0,
    horasNocturnas: 0,
    horasExtras: 0,
    precioBono: 0,
    }


function obtenerDatos(){
    

    
        datosMensuales.sueldoBruto = document.getElementById('sueldoBruto').value;
        datosMensuales.horasDiarias = document.getElementById('horasDiarias').value;
        datosMensuales.horasGuardiaPas = document.getElementById('horasGuardiaPas').value;
        datosMensuales.horasExtrasCien = document.getElementById('horasExtrasCien').value;
        datosMensuales.horasNocturnas = document.getElementById('horasNocturnas').value;
        datosMensuales.horasExtras = document.getElementById('horasExtras').value; 

        if (document.getElementById('bono').checked){
            
            datosMensuales.precioBono = document.getElementById('precioBono').value; 
            
            //alert(`Comenzamos a calcular sueldo`);
            precioHora = datosMensuales.sueldoBruto / (datosMensuales.horasDiarias *20);
            console.log(`precio hora: $ ${precioHora}`);
            precioHorasExtra = precioHora * 1.5;
            console.log(`precio hora Extra: $ ${precioHorasExtra}`);
            precioHorasCien = precioHora * 2;
            console.log(`precio hora Extra al 100: $ ${precioHorasCien}`);
            precioHorasNoc = precioHora * 1.70;
            console.log(`precio hora Extra Nocturnas: $ ${precioHorasNoc}`);
            horasGuardia = datosMensuales.sueldoBruto / (datosMensuales.horasDiarias*20) * 11 / 50;
            console.log(`horas de guardia : ${horasGuardia}`);
            cantGuardia = datosMensuales.horasGuardiaPas * horasGuardia;
            console.log(`valor horas guardia: $ ${cantGuardia}`);
            cantHorasCien = datosMensuales.horasExtrasCien * precioHorasCien;
            console.log(`valor horas al %100: $ ${cantHorasCien}`);
            cantHorasNoc = datosMensuales.horasNocturnas * precioHorasNoc;
            console.log(`valor horas nocturnas: $ ${cantHorasNoc}`);
            cantHorasExtras = datosMensuales.horasExtras * precioHorasExtra;
            console.log(`valor horas al %50: $ ${cantHorasExtras}`);
            console.log(`precio del bono: $ ${datosMensuales.precioBono}`);
            sueldoNeto = datosMensuales.sueldoBruto * 0.83;
            console.log(`sueldo Neto: $ ${sueldoNeto}`);
            sueldoNetoFinal = sueldoNeto + cantHorasCien + cantGuardia + cantHorasExtras + cantHorasNoc;
            console.log(`sueldo Neto con extras: $ ${sueldoNetoFinal}`);
            sueldoNetoFinal = sueldoNetoFinal + (datosMensuales.precioBono*1);
            console.log(`sueldo Neto FINAL: $ ${sueldoNetoFinal}`);
            
            document.getElementById("sueldoNetoFinal").innerHTML = sueldoNetoFinal;
            //alert(`El sueldo a cobrar en mano con extras es: $ ${sueldoNetoFinal} | Tenga en cuenta que en este calculo no se incluyen impuestos a las ganancias o plus vacacional.`);

            
            


        }else{
            precioBono=0;
            //alert(`precio del bono es: $ ${precioBono}`);
            //alert(`Comenzamos a calcular sueldo`);
            precioHora = datosMensuales.sueldoBruto / (datosMensuales.horasDiarias *20);
            console.log(`precio hora: $ ${precioHora}`);
            precioHorasExtra = precioHora * 1.5;
            console.log(`precio hora Extra: $ ${precioHorasExtra}`);
            precioHorasCien = precioHora * 2;
            console.log(`precio hora Extra al 100: $ ${precioHorasCien}`);
            precioHorasNoc = precioHora * 1.70;
            console.log(`precio hora Extra Nocturnas: $ ${precioHorasNoc}`);
            horasGuardia = datosMensuales.sueldoBruto / (datosMensuales.horasDiarias*20) * 11 / 50;
            console.log(`horas de guardia : ${horasGuardia}`);
            cantGuardia = datosMensuales.horasGuardiaPas * horasGuardia;
            console.log(`valor horas guardia: $ ${cantGuardia}`);
            cantHorasCien = datosMensuales.horasExtrasCien * precioHorasCien;
            console.log(`valor horas al %100: $ ${cantHorasCien}`);
            cantHorasNoc = datosMensuales.horasNocturnas * precioHorasNoc;
            console.log(`valor horas nocturnas: $ ${cantHorasNoc}`);
            cantHorasExtras = datosMensuales.horasExtras * precioHorasExtra;
            console.log(`valor horas al %50: $ ${cantHorasExtras}`);
            sueldoNeto = datosMensuales.sueldoBruto * 0.83;
            console.log(`sueldo Neto: $ ${sueldoNeto}`);
            sueldoNetoFinal = sueldoNeto + cantHorasCien + cantGuardia + cantHorasExtras + cantHorasNoc + datosMensuales.precioBono;
            console.log(`sueldo Neto: $ ${sueldoNetoFinal}`);
            
            
            document.getElementById("sueldoNetoFinal").innerHTML = sueldoNetoFinal;
            
            //alert(`El sueldo a cobrar en mano con extras es: $ ${sueldoNetoFinal} | Tenga en cuenta que en este calculo no se incluyen impuestos a las ganancias o plus vacacional.`);
            



        }
   
    }