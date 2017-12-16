import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	elementToShow = { 
  title: "",
  subtitle1: "",
  content1: "",
  subtitle2: "",
  content2: "",
  subtitle3: "",
  content3: "",
  subtitle4: "",
  content4: "",
  subtitle5: "",
  content5: "",
  subtitle6: "",
  content6: "",
  subtitle7: "",
  content7: ""
  };

  illnesses = [
  {
  title: "Gonoreja (kapavac)",

  subtitle1: "OPIS",
  content1: "Gonoreja (uzročnik Treponema pallidum) je zarazna bakterijska spolno prenosiva bolest od koje obolijevaju I muškarce I žene. Najčešće uzrokuje infekciju spolnih organa, rektuma i ždrijela.",

  subtitle2: "KAKO SE PRENOSI",
  content2: "Gonoreja se prenosi seksualnim odnosom (vaginalnim, analnim I oralnim putem) sa inficiranom osobom. Inficirana trudnica može prenijeti infekciju na dijete tokom poroda.",

  subtitle3: "SIMPTOMI",
  content3: "Simptomi nisu prisutni kod svih inficiranih. Kod  žena infekcija često prolazi neopaženo. Najčešći simptomi kod muškaraca su: pečenje tokom mokrenja, bijeli ili žućkasto-zeleni iscjedak iz penisa,bol ili oticanje testisa. Kod žena se javlja: vaginalni iscjedak, nelagodnost I svrbež spolovila, vaginalno krvarenje između menstruacija",

  subtitle4: "RAŠIRENOST",
  content4: "Bolest je raširena svuda u svijetu. To je česta infekcija u populaciji, posebno kod mladih u dobnoj granici od 15-24 godine života.",

  subtitle5: "UTICAJ NA ZDRAVLJE",
  content5: "Pravovremenim liječenjem, gonoreja ne ostavlja nikakve posljedice.Kada se ne liječi, bolest može izazvati sterilitet i vanmaterične trudnoće",

  subtitle6: "PREVENCIJA",
  content6: "korištenje kondoma, monogamija, apstinencija",

  subtitle7: "DIJAGNOZA",
  content7: "testiranje urina, bris grla, vagine I rektuma, obratiti se porodičnom ljekaru, liječiti oba partnera"
  },
  { 
  title: "TRIHOMONIJAZA",
  subtitle1: "OPIS",
  content1: "Trihomonijaza je učestala  spolno prenosiva bolest. Uzrokuje je parazit Trichomonas vaginalis. Infekcija uglavnom prolazi bez simptoma.",
  subtitle2: "KAKO SE PRENOSI",
  content2: "Prenosi se spolnim odnosom sa inficiranom osobom.  Uzročnik se može prenijeti na druge dijelove tijela kao što su ruke, usta ili analni otvor. ",
  subtitle3: "SIMPTOMI",
  content3: "Simptomi kod muškaraca: iritacija, peckanje, iscjedak iz mokraćne cijevi. Simptomi kod žena: iritacija,  peckanje pri mokrenju I pjenušavi vaginalni iscjedak koji može biti providan ili žuto-zelen I ima karakterističan miris",
  subtitle4: "RAŠIRENOST",
  content4: "Infekcija je česta.",
  subtitle5: "UTICAJ NA ZDRAVLJE",
  content5: "Trihomonas može povećati rizik za infekciju HIV-om. Veća je učestalost prijevremeno rođene djece kod inficiranih majki.",
  subtitle6: "PREVENCIJA",
  content6: "Apstinencija, monogamija, korištenje kondoma (ne štiti u potpunosti)",
  subtitle7: "DIJAGNOZA",
  content7: "Bris penisa/ vagine zbog izolacije uzročnika. Liječiti oba partnera."
  },
  { 
  title: "KLAMIDIJAZA",
  subtitle1: "OPIS",
  content1: "Klamidijaza je učestala spolno prenosiva infekcija koju izaziva Chlamidia trachomatis. Izaziva trajna oštećenja ženskih spolnih organa što može uzrokovati neplodnost i vanmateričnu trudnoću.",
  subtitle2: "KAKO SE PRENOSI",
  content2: "Prenosi  spolnim odnosom sa inficiranom osobom. Ako je inficirani partner muškarac, klamidija se može prenijeti iako on ne ejakulira.",
  subtitle3: "SIMPTOMI",
  content3: "Infekcija uglavnom prolazi bez simptoma. Simptomi se javljaju nekoliko sedmica od infekcije. Simptomi kod žena: vaginalni iscjedak, peckanje pri mokrenju, a kod muškaraca: peckanje pri mokrenju, iscjedak iz mokraćne cijevi I bol u testisima.",
  subtitle4: "RAŠIRENOST",
  content4: "Veoma česta spolno prenosiva infekcija.",
  subtitle5: "UTICAJ NA ZDRAVLJE",
  content5: "Ukoliko se ne liječi na vrijeme, bolest se širi na maternicu I jajovode uzrokujući ožiljke. Dolazi do pojave nepolodnosti ili vanmaterične trudnoće. Kod muškaraca prisutna je blaga bol u testisima.",
  subtitle6: "",
  content6: "",
  subtitle7: "DIJAGNOZA",
  content7: "Za testiranje se koristi uzorak urina, te vaginalni bris. Liječe se oba partnera."
  },
  { 
  title: "SIFILIS",
  subtitle1: "OPIS",
  content1: "Sifilis je spolno prenosiva infekcija koju uzrokuje bakterija Treponema pallidum. Sifilis prolazi kroz tri stadija (primarni, sekundarni, latentni I tercijarni).",
  subtitle2: "KAKO SE PRENOSI",
  content2: "Uzročnik se većinom prenosi spolnim odnosom sa zaraženom osobom, a može se prenijeti ljubljenjem, ugrizom i drugim dodirima. Prijenos preko predmeta je rijedak. Moguć je prijenos sa majke na plod.",
  subtitle3: "SIMPTOMI",
  content3: "Primarni sifilis: na mjestu prodora uzročnika (stidnica, penis) javlja se bezbolna ranica tvrdih i oštrih rubova – tvrdi šankr. Sekundarni sifilis: osip, temperatura i otečeni limfni čvorovi oko prepona. Latentni sifilis: bez simptoma. Tercijarni sifilis: Dovodi do ozbiljnih promjena na srcu, mozgu i plućima. Neurosifilis: zahvata mozak i uzrokuje glavobolju, utrnulost u udovima, slabu koordinaciju mišića udova. Novorođenački sifilis: rađaju se djeca sa oštećenim sluhom, vidom i deformitetima zuba.",
  subtitle4: "",
  content4: "",
  subtitle5: "UTICAJ NA ZDRAVLJE",
  content5: "Pravovremeno liječenje dovodi do potpunog izlječenja bolesti. U slučaju da se ne liječi, dovodi do trajnih promjena na većini organa.",
  subtitle6: "",
  content6: "",
  subtitle7: "DIJAGNOZA",
  content7: "Uzeti uzorak krvi i bris sa kožnih promjena za potvrdu uzročnika."
  },
  { 
  title: "GENITALNI HERPES",
  subtitle1: "OPIS",
  content1: "Veoma česta spolno prenosiva infekcija kod seksualno aktivnih osoba koju izazivaju dva tipa virusa, HSV-1 i HSV-2.",
  subtitle2: "KAKO SE PRENOSI",
  content2: "Infekcija se prenosi razmjenom tjelesnih tekućina putem vaginalnog, oralnog i analnog odnosa. Također, herpes se može prenijeti sa majke na dijete tokom trudnoće kao i putem predmeta zajedničke upotrebe.",
  subtitle3: "SIMPTOMI",
  content3: "Simptomi se javljaju 2-21 dan nakon infekcije. Najčešći su: bolne ranice, upala i crvenilo, povišena temperatura, bol u mišićima te natečeni limfni čvorevi. U mnogim slučajevima simptomi se uopće ne javljaju ili su blagi pa se često pomiješaju s nekom drugom kožnom infekcijom.",
  subtitle4: "RAŠIRENOST",
  content4: "Genitalni herpes je jako rasprostranjena spolno prenosiva infekcija od koje obolijeva svaka četvrta žena i svaki peti muškarac na svijetu.",
  subtitle5: "UTICAJ NA ZDRAVLJE",
  content5: "Genitalni herpes je neizlječiva bolest, međutim postoje lijekovi koji olakšavaju tok bolesti. Ukoliko se ne liječi, mogu nastati genitalne rane te ozbiljno narušavanje imunog sistema.",
  subtitle6: "PREVENCIJA",
  content6: "Apstinencija, monogamija, korištenje kondoma.",
  subtitle7: "DIJAGNOZA",
  content7: "Kada osoba primijeti neke od ovih simptoma, potrebno je obratiti se ljekaru koji će putem pregleda, testiranja ranice ili uzorka krvi ustanoviti da li je neko zaražen ili ne."
  },
  { 
  title: "HPV infekcija",
  subtitle1: "OPIS",
  content1: "Najčešća prenosiva spolna infekcija kod žena. Postoji mnogo tipova virusa koji izazivaju ovu infekciju, a visokorizični tipovi mogu izazvati karcinom.",
  subtitle2: "KAKO SE PRENOSI",
  content2: "Prenosi se razmjenom tjelesnih tekućina sa zaraženim osobama putem spolnog odnosa. Simptomi se mogu razviti godinama nakon prenosa infekcija.",
  subtitle3: "SIMPTOMI",
  content3: "HPV infekcija uglavnom prolazi bez simptoma. Unutar prvih osam mjeseci mogu se razviti bradavice na intimnim područjima.  Najčešće su male, mekane te podsjećaju na cvijet karfiola. Tokom trudnoće se mogu povećati, te nakon poroda ponovo smanjiti i povući. Može se javiti i svrbež, neugodnost te krvarenje tokom spolnog odnosa.",
  subtitle4: "RAŠIRENOST",
  content4: "Ova infekcija je  česta i smatra se da većina seksualno aktivne populacije bar jednom u životu dobije ovu infekciju.",
  subtitle5: "UTICAJ NA ZDRAVLJE",
  content5: "Infekcija uglavnom prolazi asimptomatski. Ukoliko se ne liječi, visokorizični tipovi uzrokuju karcinom grlića maternice i vagine a niskorizični tipovi uzrokuju genitalne bradavice.",
  subtitle6: "PREVENCIJA",
  content6: "Vakcinacija. Testiranje radi prevencije karcinom cerviksa (PAPA test). Korištenje kondoma. Monogamija.",
  subtitle7: "DIJAGNOZA",
  content7: "Većina osoba sazna da ima ovu infekciju tek kada se razviju ozbiljni simptomi. Žene najčešće saznaju da imaju HPV infekciju putem abnormalnog rezultata redovnog Papa testa."
  },
  { 
  title: "Hepatitis B",
  subtitle1: "OPIS",
  content1: "Neizlječiva spolno prenosiva infekcija koja u dugoročnom smislu uzrokuje ozbiljno oštećenje funkcije jetre",
  subtitle2: "KAKO SE PRENOSI",
  content2: "Prenosi se putem krvi i tjelesnih tekućina uključujući vaginalni sekret, spermu, majčino mlijeko te pljuvačku zaraženih osoba i suze. Može se prenijeti iglama i drugim zaraženim medicinskim instrumentima.",
  subtitle3: "SIMPTOMI",
  content3: "Simptomi su: umor, mučnina i povraćanje, smanjen apetit, osip, bol u zglobovima te žutica. Simptomi obično traju do šest sedmica ali mogu trajati i do šest mjeseci.",
  subtitle4: "RAŠIRENOST",
  content4: "Procjenjuje se da broj zaraženih u svijetu raste i do 240 miliona.",
  subtitle5: "UTICAJ NA ZDRAVLJE",
  content5: "Kada se Hepatitis B ne liječi na vrijeme može uzrokovati tešku cirozu jetre. Funkciju jetre je potrebno pratiti i tretirati lijekovima koji ublažavaju tok bolesti.",
  subtitle6: "PREVENCIJA",
  content6: "vakcinacija, mjere zaštitite na radnom mjestu, korištenje kondoma, apstinencija",
  subtitle7: "DIJAGNOZA",
  content7: "Testiranje uzorka krvi."
  },
  { 
  title: "HIV (AIDS)",
  subtitle1: "OPIS",
  content1: "Virus koji napada imuni sistem te posljedično onemogućava organizmu da se bori protiv i najlakših infekcija.",
  subtitle2: "KAKO SE PRENOSI",
  content2: "Prenosi se krvlju, korištenjem zajedničke igle, spolnim putem te sa majke na dijete.",
  subtitle3: "SIMPTOMI",
  content3: "Simptomi koji se javljaju podsjećaju na simptome prehlade koja dugo traje i uključuju povišenu temperaturu, uvećanje limfnih čvorova te proljev. Bolest je često asimptomatska. ",
  subtitle4: "RAŠIRENOST",
  content4: "Virus je najrašireniji na područjima siromašnih zemalja, ali broj zaraženih konstantno raste u cijelom svijetu.",
  subtitle5: "UTICAJ NA ZDRAVLJE",
  content5: "Ukoliko se rano otkrije, zaražena osoba uz praćenje i terapiju može živjeti normalnim životom, ali ukoliko se bolest razvije i uveliko ošteti imuni sistem do smrti može doći i zbog najmanje infekcije.",
  subtitle6: "PREVENCIJA",
  content6: "Korištenje kondoma. Monogamija. Korištenje sterilnih igala.",
  subtitle7: "DIJAGNOZA",
  content7: "Testiranje uzorka krvi, javiti se svome ljekaru ili najbliži DPST (dobrovoljno i povjerljivo savjetovanje i testiranje) centrima."
  }];

  constructor() { }

  ngOnInit() {
    this.elementToShow = this.illnesses[0];
  }

  myEvent(event, data){
  for(let element of this.illnesses){
      if(element.title == data){
        this.elementToShow = element;
      }
    }
  }
}
