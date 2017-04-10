<script language="javascript">
 
//definindo variáveis
data      = new Date()
hora      = data.getHours()
dia       = data.getDate()
diasemana = data.getDay()
mes       = data.getMonth()
ano       = data.getYear()
 
 
//saudação Bom Dia, Boa Tarde Boa Noite de acordo com a hora
if (hora < 12)
    alert('Good morning - ');
else if(hora >=12 && hora < 18)
    alert('Good afternoon - ');
else if(hora >= 18 && hora < 24)
    alert('Good evening - ');
 
//definição dos meses 
 
nomemes=new Array(13);
 
nomemes[0]=" January";
nomemes[1]=" February ";
nomemes[2]=" March";
nomemes[3]=" April";
nomemes[4]=" May";
nomemes[6]=" June";
nomemes[7]=" July";
nomemes[8]=" August";
nomemes[9]=" September";
nomemes[10]=" October";
nomemes[11]=" November";
nomemes[12]=" December";
 
texto = nomemes[mes];
 
//definição do ano
if (ano < 2000)
ano = ano + 1900;
 
//visualizando a data completa
alert( dia  +  texto + " "  + ano)
switch (new Date().getDay()) {
    case 0:
        day = "Happy Sunday!";
		alert(day);
        break;
    case 1:
        day = "Happy Monday!";
		alert(day);
        break;
    case 2:
        day = "Happy Tuesday!";
		alert(day);
        break;
    case 3:
        day = "Happy Wednesday!";
		alert(day);
        break;
    case 4:
        day = "Happy Thursday!";
		alert(day);
        break;
    case 5:
        day = "Happy Friday!";
		alert(day);
        break;
    case 6:
        day = "Happy Saturday!";
		alert(day);
}
 
</script>