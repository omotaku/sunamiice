
//キャラ
const kya = document.getElementById("kya");
const kya1 = document.getElementById("kya1");
const kya2 = document.getElementById("kya2");
const kya3 = document.getElementById("kya3");
const kya4 = document.getElementById("kya4");
const kya5 = document.getElementById("kya5");
const kya6 = document.getElementById("kya6");


const sunaimg = document.getElementById("img2");
const kaoimg = document.getElementById("img3");
const kareimg = document.getElementById("img4");

const imgbac1 = document.getElementById("imgbac1");
const imgbac2 = document.getElementById("imgbac2");

const imgth = document.getElementById("imgth");
//セリフ集
const seri1 = ["「みんなアイス何派？」",//0すなみ
    "「...何派？」",//1かおり
    "かおりはアイスを眺めながら問い返した",//2ナレ
    "「ほら、ガリガリ君とかハーゲンダッツとか」",//3すなみ
    "「私はピノ。食べやすいし」",//4かれん
    "ピノを持ちながらかれんが答えた",//5ナレ
    "「あー　かれんちゃんらしい！」",//6すなみ
    "「うーん。私はパピコを買うことが多いかな」",//7かおり
    "少し考えてかおりがパピコを持って答えた",//8ナレ
    "「......！かおりちゃん、パピコって2つついてるよね？」",//9すなみ
    "すなみがニヤニヤしながらいった",//10ナレ
    "「仲がいいな」",//11かれん
    "かれんもクスッと笑う",//12ナレ
    "「あ、味が好きなのっ。す、すなみはどうなの？」",//13かおり
    "かおりは顔をそむけて慌てたようにすなみに話を振った",//14ナレ
    "「私はもちろん、ガリガリ君！」",//15すなみ
    "ガリガリ君を掲げてすなみは答えた",//16ナレ
    "「へぇ、意外だな。すなみならもっと癖のあるものを好むのかと思っていた」",//17かれん
    "「ハーゲンダッツもピノもいいんだけど、やっぱりあたり付きのワクワク感！これが最高！！」",//18すなみ
    "「そこなんだ……」",//19かおり
    "調子を戻したかおりがツッコむ",//20ナレ
    "「ありがとざいましたー！」",//21店員
    "ウィーン",//22ナレ
    "会計を済ませて自動ドアを開けると",//23ナレ
    "ヒュ〜",//24ナレ
    "と凍えるような風が一瞬で肌を刺した",//25ナレ
    "「うぉ」",//26すなみ
    "すなみが思わず声を上げた",//27
    "「「「さっっむ！」」」",//28三人
    "駐車場に積もった雪を横目に３人は体を震わせた",//29ナレ
    "「もうちょっとあったかくなってから買えばよかった」",//30かれん
    "かれんが肩をすくめる",//31ナレ
    "「ほんと。なんで買っちゃたんだろう......？」",//32かおり
    "かおりは頷きながら答えた",//33ナレ
    "「おりゃ！」",//34すなみ
    "ビリッ",//35ナレ
    "すなみが早速アイスの袋を開ける",//36ナレ
    "「じゃあ...私も」",//37かれん
    "かれんも箱を開けてピノを食べ始める",//38ナレ
    "「う〜歯にしみる！でも美味い！」",//39すなみ
    "「うん、やっぱりこれだな！」",//40かれん
    "すなみとかれんは満足げにアイスを頬張る",//41ナレ
    "「あれ？かおりちゃんは食べないの？」",//42すなみ
    "「いや、ちょっとね」",//43かおり
    "かおりはパピコを見ながら言葉を濁す",//44ナレ
    "2本がくっついているつなぎ目が目に入る",//45ナレ
    "（......会う前に溶けちゃうかな？）",//46かおり
    "ふと、小さな不安がよぎる。",//47ナレ
    "「あ〜、今は一人だから食べにくいよね」",//48すなみ
    "すなみがニヤニヤしながらかおりをからかう",//49ナレ
    "「だから、そんなんじゃないって！」",//50かおり
    "かおりは慌てて否定したが頬が熱くなるのを感じていた"//51ナレ
];
//最初のセリフ
    const sen1_1 = document.getElementById("sen1_1");
    sen1_1.innerText = seri1[0];
    
//キャラ変関数
const nare = () => {

    const kyaa = kya1.textContent;
    kya.innerText = kyaa;
};

const sunami = () => {
    sunaimg.classList.remove("hidden");
    kaoimg.classList.add("hidden");
    kareimg.classList.add("hidden");
    const kyaa = kya2.textContent;
    kya.innerText = kyaa;
};


const kaori = () => {
    kaoimg.classList.remove("hidden");
    sunaimg.classList.add("hidden");
    kareimg.classList.add("hidden");
        const kyaa = kya3.textContent;
        kya.innerText = kyaa;
    };

const karen = () => {
    kareimg.classList.remove("hidden");
    kaoimg.classList.add("hidden");
    sunaimg.classList.add("hidden");
        const kyaa = kya4.textContent;
        kya.innerText = kyaa;
    };

const yuna = () => {
    
        const kyaa = kya5.textContent;
        kya.innerText = kyaa;
    };
const tein = () => {
    sunaimg.classList.add("hidden");
    kaoimg.classList.add("hidden");
    kareimg.classList.add("hidden");
        const kyaa = kya6.textContent;
        kya.innerText = kyaa;
    };

//セリフ関数 ノーマル
const a = (a1) => {
    sen1_1.innerHTML = a1;
};


const nextBtn1 = document.getElementById("nextBtn1");
const nextBtn2 = document.getElementById("nextBtn2");

const sen1 = sen1_1.innerText;


nextBtn1.addEventListener("click",() => {
    const sen1 = sen1_1.innerText;
    switch (sen1) {
        case seri1[0]:
            a(seri1[1]);
            kaori();
            break;  
        case seri1[1]:
            a(seri1[2]);
            nare();
            break;
        case seri1[2]:
            a(seri1[3]);
            sunami();
            break;
        case seri1[3]:
            a(seri1[4]);
            karen();
            break;
        case seri1[4]:
            a(seri1[5]);
            nare();
            break;
        case seri1[5]:
            a(seri1[6]);
            sunami();
            break;
        case seri1[6]:
            a(seri1[7]);
            kaori();
            break;
        case seri1[7]:
            a(seri1[8]);
            nare();
            break;
        case seri1[8]:
            a(seri1[9]);
            sunami();
            break;
        case seri1[9]:
            a(seri1[10]);
            nare();
            break;
        case seri1[10]:
            a(seri1[11]);
            karen();
            break;
        case seri1[11]:
            a(seri1[12]);
            nare();
            break;
        case seri1[12]:
            a(seri1[13]);
            kaori();
            break;
        case seri1[13]:
            a(seri1[14]);
            nare();
            break;
        case seri1[14]:
            a(seri1[15]);
            sunami();
            break;
        case seri1[15]:
            a(seri1[16]);
            nare();
            break;
        case seri1[16]:
            a(seri1[17]);
            karen();
            break;
        case seri1[17]:
            a(seri1[18]);
            sunami();
            break;
        case seri1[18]:
            a(seri1[19]);
            kaori();
            break;
        case seri1[19]:
            a(seri1[20]);
            nare();
            break;
        case seri1[20]:
            a(seri1[21]);
            tein();
            break;
        case seri1[21]:
            a(seri1[22]);
            nare();
            break;
        case seri1[22]:
            a(seri1[23]);
            nare();
            break;
        case seri1[23]:
            a(seri1[24]);
            nare();
            imgbac1.classList.add("hidden");
            imgbac2.classList.remove("hidden");
            break;
        case seri1[24]:
            a(seri1[25]);
            nare();
            break;
        case seri1[25]:
            a(seri1[26]);
            sunami();
            break;
        case seri1[26]:
            a(seri1[27]);
            nare();
            break;
        case seri1[27]:
            a(seri1[28]);
            kya.innerText = "三人";
            sunaimg.classList.add("hidden");
            kaoimg.classList.add("hidden");
            kareimg.classList.add("hidden");
            imgth.classList.remove("hidden");
            break;
        case seri1[28]:
            a(seri1[29]);
            nare();
            imgth.classList.add("hidden");
            break;
        case seri1[29]:
            a(seri1[30]);
            karen();
            break;
        case seri1[30]:
            a(seri1[31]);
            nare();
            break;
        case seri1[31]:
            a(seri1[32]);
            kaori();
            break;
        case seri1[32]:
            a(seri1[33]);
            nare();
            break;
        case seri1[33]:
            a(seri1[34]);
            sunami();
            break;
        case seri1[34]:
            a(seri1[35]);
            nare();
            break;
        case seri1[35]:
            a(seri1[36]);
            nare();
            break;
        case seri1[36]:
            a(seri1[37]);
            karen();
            break;
        case seri1[37]:
            a(seri1[38]);
            nare();
            break;
        case seri1[38]:
            a(seri1[39]);
            sunami();
            break;
        case seri1[39]:
            a(seri1[40]);
            karen();
            break;
        case seri1[40]:
            a(seri1[41]);
            nare();
            break;
        case seri1[41]:
            a(seri1[42]);
            sunami();
            break;
        case seri1[42]:
            a(seri1[43]);
            kaori();
            break;
        case seri1[43]:
            a(seri1[44]);
            nare();
            break;
        case seri1[44]:
            a(seri1[45]);
            nare();
            break;
        case seri1[45]:
            a(seri1[46]);
            kaori();
            break;
        case seri1[46]:
            a(seri1[47]);
            nare();
            break;
        case seri1[47]:
            a(seri1[48]);
            sunami();
            break;
        case seri1[48]:
            a(seri1[49]);
            nare();
            break;
        case seri1[49]:
            a(seri1[50]);
            kaori();
            break;
        case seri1[50]:
            a(seri1[51]);
            nare();
            break;


    };

});


