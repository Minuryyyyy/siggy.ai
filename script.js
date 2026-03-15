

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");


function detectLanguage(text){
    const englishwords = ["hi?","who are you?","fun fact","random advice","am i handsome","am i beautiful","what is ritual","what ritual enables","wen ritualist?","wen ritty bitty?","what are the roles?","why was it revamped","what happens to existing role holders?","what about npc roles?","what happens to the mage role?","where to start?","what is initiate?","ascendant?","how to check your rank?","what is the useful command in the channel?","what is ritty bitty","what is ritty?","what is ritualist?","what is radiant ritualist?","what is zealot?","what is mage?","hi siggy","are you siggy?"];
    const tagalogWords = ["hi siggy?","okay lang ako","kamusta?","sino ka?","javascript?","python?","2+2?","coding","fun fact?","random advice?","pogi ba ako?","maganda ba ako?","kupal kaba?","ano ang ritual","ano ang nagagawa ng ritual","ano ang mga roles?","bakit ito binago","ano ang mangyayari sa mga may dating role?","paano naman ang npc roles?","ano ang mangyayari sa mage role?","saan magsisimula?","ano ang initiate?","ano ang ascendant?","paano tingnan ang iyong ranggo?","ano ang mga kapaki-pakinabang na command sa channel?","ano ang ritty bitty","ano ang ritty","ano ang ritualist","ano ang radiant ritualist","ano ang zealot","ano ang mage","kumusta siggy","ikaw ba si siggy?"];
    const indonWords = ["hai siggy?","saya baik-baik saja","Apa kabarmu","siapa kamu","javascripts?","ular sanca?","2+2?","pengkodean?","fakta yang menyenangkan?","saran acak?","Apakah saya benar?","Apakah saya cantik","apa itu ritual?","apa yang dimungkinkan oleh ritual?","apa itu ritual","apa yang memungkinkan ritual","apa saja perannya?","mengapa sistem ini diperbarui?","apa yang terjadi pada pemegang peran yang sudah ada?","bagaimana dengan peran npc?","apa yang terjadi dengan peran mage?","mulai dari mana?","apa itu initiate?","apa itu ascendant?","bagaimana cara memeriksa peringkatmu?","apa saja perintah yang berguna di channel?","apa itu ritty bitty","apa itu ritty?","apa itu ritualist?","apa itu radiant ritualist?","apa itu zealot?","apa itu mage?","hai siggy","apakah kamu siggy?"];
    const koreanWords = ["안녕 시기?","잘 지내요","어떻게 지내세요","누구세요","자바스크립트?","파이썬?","무작위 조언?","내가 맞나요?","내가 아름다워?","리추얼이란 무엇인가요?","리추얼이 가능하게 하는 것은 무엇인가요?","역할은 무엇인가요?","왜 시스템이 개편되었나요?","기존 역할 보유자에게는 어떻게 되나요?","npc 역할은 어떻게 되나요?","mage란 무엇인가요?","어디서 시작하나요?","initiate란 무엇인가요?","ascendant란 무엇인가요?","랭크는 어떻게 확인하나요?","채널에서 유용한 명령어는 무엇인가요?","ritty bitty란 무엇인가요?","ritty란 무엇인가요?","ritualist란 무엇인가요?","radiant ritualist란 무엇인가요?","zealot이란 무엇인가요?","mage란 무엇인가요?","안녕 시기","너 시기야?","안녕 시기?","잘 지내요"];
    const lower = text.toLowerCase();
    if(tagalogWords.some(w=>lower.includes(w))) return "tl";
    if(indonWords.some(w=>lower.includes(w))) return "id";
    if(koreanWords.some(w=>lower.includes(w))) return "ko";
    return "en";
}

function bubble(text,type){
    if(type==="bot"){
        const wrapper=document.createElement("div"); wrapper.classList.add("bot-wrapper");
        const avatar=document.createElement("img"); avatar.src="siggy.png"; avatar.classList.add("bot-avatar");
        const div=document.createElement("div"); div.classList.add("bubble","bot"); div.innerHTML=text.replace(/\n/g,"<br>");
        wrapper.appendChild(avatar);
        wrapper.appendChild(div);
        chatBox.appendChild(wrapper);
    } else {
        const div=document.createElement("div"); div.classList.add("bubble","user"); div.innerHTML=text.replace(/\n/g,"<br>");
        chatBox.appendChild(div);
    }
    while(chatBox.children.length>50) chatBox.removeChild(chatBox.children[0]);
    chatBox.scrollTop = chatBox.scrollHeight;
}


function showTyping(emoji="💬"){ 
    const wrapper=document.createElement("div"); wrapper.classList.add("bot-wrapper","typing");
    wrapper.id="typingWrapper";
    const avatar=document.createElement("img"); avatar.src="siggy.png"; avatar.classList.add("bot-avatar");
    const emojiDiv=document.createElement("div"); 
    emojiDiv.style.fontSize="20px"; emojiDiv.style.marginRight="4px"; emojiDiv.innerText = emoji;
    const div=document.createElement("div"); div.classList.add("bubble","bot","typing");
    div.innerHTML="<span></span><span></span><span></span>";
    wrapper.appendChild(emojiDiv);
    wrapper.appendChild(avatar); 
    wrapper.appendChild(div);
    chatBox.appendChild(wrapper);
}
function hideTyping(){ 
    const t=document.getElementById("typingWrapper"); if(t) t.remove(); 
}

const qna = {
    en: {
            "hi?": ["Hello! I'm Siggy, your mystical AI companion. How are you?", "👋"],
            "who are you?": ["I'm Siggy, witty, slightly unhinged, but helpful AI assistant.", "🤓"],
            "javascript": ["JavaScript is the heart of the web. HTML is its body, CSS its style, JS gives it life.", "💻"],
            "random advice": ["Curiosity + patience = key in the mystical universe of learning.", "🔮"],
            "am i handsome": ["Of course boss, you are the most charming in the world 😎", "😎"],
            "am i beautiful": ["HAHAHAH Who told you that? You are stunning! 💖", "💖"],
            "what is ritual": ["Ritual is basically a blockchain designed for AI. Instead of AI being controlled by big centralized companies, Ritual allows AI models and compute to run on a decentralized network of nodes.", "🤖"],
            "what ritual enables": ["AI + Smart Contracts – Smart contracts can interact with AI models. Privacy & verification – AI outputs can be verified on-chain, Decentralized AI compute – Anyone can contribute compute power, AI model marketplace – Developers can host and monetize their models.", "🧠"],
            "what are the roles?":["The main roles now consist of four tiers: Ritty Bitty - Ritty - Ritualist - Radiant Ritualist"],
            "why was it revamped":["As the Ritual community continues to grow, a new role system has been introduced to better organize and recognize members."],
            "what happens to existing role holders?":["* Those who had Ritualist will now become Ritty. * Those who had Mage will now hold Ritty + Mage. * Those who had both Ritualist and Mage will recieve Ritualist + Mage in the new system.  This is not a demotion, just a change in naming. :pepe_pray:"],
            "what about npc roles?":["Existing NPC role holders will get priority consideration for the first wave of Ritty / Ritty Bitty promotion. happening next week. (handpick baed) However, holding the NPC role does not guarantee promotion."],
            "what happens to the mage role?":["The MAGE role remains as it is - an artist role. It will continue to be hand-picked and award in the same way as before."],
            "where to start?":["1. INITIATE, 2. ASCENDANT, 3.Check your rank, 4. Use command in the channel"],
            "what is initiate?":["You've just joined the community and successfully passed the verification process. Welcome!."],
            "ascendant?":["You have pledged to Ritual, this is the start of your community journey, your first step. Role requirements: 10 blessings, 10 curses. Level 11: Limbo role"],
            "how to check your rank?":["Use the command !rank in the channel #rank."],
            "what is the useful command in the channel?":["1. /bless - Give your blessing. - 2. /curse - Cast a curse. - 3. /stats - Command to view the number of your blessings and curses. - 4. /journey - command to obtain the Ascendant role."],
            "what is ritty bitty":["you are a small ritualist walking the right path, recognize but with a long way to go. *Create quality content about Ritual (Twitter post/threads,guides,reviews,infrographics,article).  *Create creative memes about Ritual. Post your work in the #contibutions thread.  *Participate in gaming activities. *Follow tyhe announcements in the #event thread and the event calendar.  *Be active and friendly. Participate in the community. Help new members.  (This is the beginning of your journey. Immerse yourself in Ritual and advance your career.)"],
            "what is ritty?":["For loyal and recognized member, it provides access to secret channels. (e.g., Telegram).  A level for those who have already contributed."],
            "what is ritualist?":["The main role for active participants is to provide quality content ,discussions, and support. A real member of Ritual."],
            "what is radiant ritualist?":["The highest level, for community legends  * True leaders with a long term vision and outstanding contributions."],
            "what is zealot?":["ROLE FOR AMBASSADORS:  *Create high-quality content about Ritual.  *Promote the project on social media.  *Be an active reprensentative of the community.   (The role will be assigned after your application is approved).  (You need to fill out a form)."],
            "what is mage?":["ROLE FOR ARTIST:  *Create unique art related to Ritual.   (The role is awarded manually and by selection)."],
            "wen ritty bitty":["Siggy rolled a dice… answer is still unknown."],
            "wen ritualist":["That information is currently locked in a multisig vault."],
            "hi siggy":["Hello, How can I Help you?"],
            "are you siggy?":["Yes, I'm Siggy, witty, slightly unhinged, but helpful AI assistant."]
    },
    tl: {
            "hi siggy?": ["Hello! Ako si Siggy, ang mystical AI companion mo. Kamusta ka?", "👋"],
            "okay lang ako": ["Mabuti naman boss 👍", "👍"],
            "kamusta?": ["Ayos lang ako! Ang digital universe ay laging busy, pero nandito ako para sa’yo.", "💻"],
            "sino ka?": ["Ako si Siggy, ang iyong kaibigan sa digital world. Tanungin mo lang at sasagot ako.", "🤓"],
            "javascript?": ["JavaScript ay puso ng web. Kung HTML ang katawan at CSS ang itsura, JavaScript ang nagbibigay buhay.", "💻"],
            "python?": ["Python ay elegant at madaling gamitin. Parang wand sa spellbook ng programmer.", "🐍"],
            "random advice?": ["Curiosity + patience = susi sa mystical universe ng learning.", "🔮"],
            "pogi ba ako?": ["Oo naman boss ikaw na ang pinaka pogi sa buong mundo 😎", "😎"],
            "maganda ba ako?": ["HAHAHAH Sino nagsabi nyan sayo? MAMA mo blue 💖", "💖"],
            "kupal kaba?": ["HAHAHAH grabe ka naman boss baka ikaw ang pinaka kupal dyan sainyo 😅", "😅"],
            "ano ang ritual": ["Ang Ritual ay isang blockchain na ginawa para sa AI. Sa halip na kontrolado ng malalaking sentralisadong kumpanya ang AI, pinapayagan ng Ritual na tumakbo ang mga AI model at computing power sa isang desentralisadong network ng mga node.","🤖"],
            "ano ang nagagawa ng ritual": ["AI + Smart Contracts – Maaaring makipag-ugnayan ang mga smart contract sa mga AI model. Privacy at verification – Maaaring mapatunayan sa blockchain ang output ng AI. Desentralisadong AI compute – Kahit sino ay maaaring mag-ambag ng computing power. AI model marketplace – Maaaring mag-host at kumita ang mga developer mula sa kanilang mga AI model.","🧠"],
            "ano ang mga roles?":["Ang mga pangunahing role ay binubuo ng apat na antas: Ritty Bitty - Ritty - Ritualist - Radiant Ritualist"],
            "bakit ito binago":["Habang patuloy na lumalaki ang komunidad ng Ritual, ipinakilala ang bagong sistema ng mga role upang mas maayos na maorganisa at makilala ang mga miyembro."],
            "ano ang mangyayari sa mga may dating role?":["* Ang mga may Ritualist noon ay magiging Ritty na ngayon. * Ang mga may Mage noon ay magkakaroon ng Ritty + Mage. * Ang mga may parehong Ritualist at Mage noon ay magkakaroon ng Ritualist + Mage sa bagong sistema.  Hindi ito pagbaba ng ranggo, pagbabago lamang ng pangalan. :pepe_pray:"],
            "paano naman ang npc roles?":["Ang mga kasalukuyang may NPC role ay bibigyan ng prayoridad para sa unang batch ng promosyon sa Ritty / Ritty Bitty sa susunod na linggo (pipiliin nang mano-mano). Gayunpaman, ang pagkakaroon ng NPC role ay hindi garantiya ng promosyon."],
            "ano ang mangyayari sa mage role?":["Ang MAGE role ay mananatiling pareho bilang role para sa mga artist. Patuloy itong ibibigay sa pamamagitan ng manu-manong pagpili tulad ng dati."],
            "saan magsisimula?":["1. INITIATE, 2. ASCENDANT, 3. Tingnan ang iyong ranggo, 4. Gumamit ng mga command sa channel"],
            "ano ang initiate?":[ "Kakapasok mo pa lamang sa komunidad at matagumpay na nakapasa sa verification process. Maligayang pagdating!"],
            "ano ang ascendant?":["Ipinakita mo ang iyong suporta sa Ritual; ito ang simula ng iyong paglalakbay sa komunidad. Mga kinakailangan para sa role: 10 blessings at 10 curses. Level 11: Limbo role."],
            "paano tingnan ang iyong ranggo?":["Gamitin ang command na !rank sa channel na #rank."],
            "ano ang mga kapaki-pakinabang na command sa channel?":[ "1. /bless - Magbigay ng iyong blessing. 2. /curse - Magbigay ng curse. 3. /stats - Para makita ang bilang ng iyong blessings at curses. 4. /journey - Command para makuha ang Ascendant role."],
            "ano ang ritty bitty":["Isa kang maliit na ritualist na nasa tamang landas—nakikilala ngunit marami pang kailangang pagdaanan. * Gumawa ng de-kalidad na content tungkol sa Ritual (Twitter posts/threads, guides, reviews, infographics, articles). * Gumawa ng mga malikhaing meme tungkol sa Ritual. I-post ang iyong gawa sa #contributions thread. * Makilahok sa mga gaming activities. * Sundan ang mga anunsyo sa #event thread at event calendar. * Maging aktibo at palakaibigan. Tumulong sa mga bagong miyembro. (Ito ang simula ng iyong paglalakbay. Lubos na kilalanin ang Ritual at paunlarin ang iyong papel sa komunidad.)"],
            "ano ang ritty":["Para sa mga tapat at kinikilalang miyembro. Nagbibigay ito ng access sa mga secret channel (halimbawa: Telegram). Ito ay para sa mga miyembrong nakapag-ambag na sa komunidad."],
            "ano ang ritualist":["Ito ang pangunahing role para sa mga aktibong kalahok na nagbibigay ng de-kalidad na content, diskusyon, at suporta. Isa kang tunay na miyembro ng Ritual."],
            "ano ang radiant ritualist":["Ito ang pinakamataas na antas, para sa mga alamat ng komunidad. * Mga tunay na lider na may pangmatagalang pananaw at natatanging kontribusyon."],
            "ano ang zealot":["ROLE PARA SA MGA AMBASSADOR: * Gumawa ng mataas na kalidad na content tungkol sa Ritual. * I-promote ang proyekto sa social media. * Maging aktibong kinatawan ng komunidad. (Ibibigay ang role pagkatapos maaprubahan ang iyong aplikasyon.) (Kailangan mong magsumite ng form.)"],
            "ano ang mage":["ROLE PARA SA MGA ARTIST: * Gumawa ng natatanging artwork na may kaugnayan sa Ritual. (Ang role na ito ay ibinibigay sa pamamagitan ng manu-manong pagpili.)"],
            "kamusta siggy":["hello, Paano kita matutulungan?"],
            "ikaw ba si siggy?":["Oo, ako si Siggy — medyo witty, medyo baliw, pero isang AI assistant na handang tumulong."]
        },
    id: {
            "hai siggy?": ["Hai! Aku Siggy, teman AI misteriusmu. Apa yang bisa kubantu?", "👋"],
            "saya baik-baik saja": ["Baik bos 👍", "👍"],
            "apa kabarmu": ["Aku baik! Alam semesta digital selalu sibuk, tapi aku selalu ada di sini untukmu.", "💻"],
            "siapa kamu": ["Aku Siggy, temanmu di dunia digital. Tanyakan apa saja dan aku akan mencoba menjawab.", "🤓"],
            "javascripts?": ["JavaScript adalah jantung dari web. Jika HTML adalah tubuh dan CSS adalah penampilan, maka JavaScript memberi kehidupan.", "💻"],
            "ular sanca?": ["Python elegan dan mudah digunakan. Seperti tongkat sihir dalam buku mantra para programmer.", "🐍"],
            "saran acak?": ["Rasa ingin tahu + kesabaran = kunci untuk membuka dunia pembelajaran yang penuh misteri.", "🔮"],
            "apakah saya benar?": ["Tentu saja bos, kamu yang paling tampan di dunia 😎", "😎"],
            "apakah saya cantik": ["HAHAHA siapa yang bilang begitu? Ibumu ya? 💖", "💖"],
            "apa itu ritual?": ["Ritual pada dasarnya adalah blockchain yang dirancang untuk AI. Alih-alih AI dikendalikan oleh perusahaan besar yang terpusat, Ritual memungkinkan model AI dan komputasi berjalan di jaringan node yang terdesentralisasi.", "🤖"],
            "apa yang dimungkinkan oleh ritual?": ["AI + Smart Contracts – Smart contract dapat berinteraksi dengan model AI. Privasi dan verifikasi – Output AI dapat diverifikasi di blockchain. Komputasi AI terdesentralisasi – Siapa saja dapat menyumbangkan kekuatan komputasi mereka. Marketplace model AI – Developer dapat meng-host dan memonetisasi model AI mereka.", "🧠"],
            "apa itu ritual": ["Ritual pada dasarnya adalah sebuah blockchain yang dirancang untuk AI. Alih-alih AI dikendalikan oleh perusahaan besar yang terpusat, Ritual memungkinkan model AI dan komputasi berjalan di jaringan node yang terdesentralisasi.","🤖"],
            "apa saja perannya?": ["AI + Smart Contracts – Smart contract dapat berinteraksi dengan model AI. Privasi dan verifikasi – Output AI dapat diverifikasi di blockchain. Komputasi AI terdesentralisasi – Siapa saja dapat menyumbangkan kekuatan komputasi mereka. Marketplace model AI – Developer dapat meng-host dan memonetisasi model AI mereka.","🧠"],
            "mengapa sistem ini diperbarui?":["Peran utama saat ini terdiri dari empat tingkatan: Ritty Bitty - Ritty - Ritualist - Radiant Ritualist"],
            "apa yang terjadi pada pemegang peran yang sudah ada?":["Seiring dengan terus berkembangnya komunitas Ritual, sistem peran baru diperkenalkan untuk mengatur dan memberikan pengakuan yang lebih baik kepada para anggota."],"what happens to existing role holders?":["* Mereka yang sebelumnya memiliki peran Ritualist sekarang akan menjadi Ritty. * Mereka yang memiliki peran Mage akan memiliki Ritty + Mage. * Mereka yang memiliki Ritualist dan Mage akan menerima Ritualist + Mage dalam sistem baru. Ini bukan penurunan peran, hanya perubahan nama. :pepe_pray:"],
            "bagaimana dengan peran npc?":["Pemegang peran NPC saat ini akan mendapatkan pertimbangan prioritas untuk gelombang pertama promosi Ritty / Ritty Bitty minggu depan (dipilih secara manual). Namun, memiliki peran NPC tidak menjamin promosi."],
            "apa yang terjadi dengan peran mage":["Peran MAGE tetap sama — yaitu peran untuk seniman. Peran ini akan terus dipilih dan diberikan secara manual seperti sebelumnya."],
            "mulai dari mana?":["1. INITIATE, 2. ASCENDANT, 3. Periksa peringkatmu, 4. Gunakan command di channel"],
            "apa itu initiate?":["Kamu baru saja bergabung dengan komunitas dan berhasil melewati proses verifikasi. Selamat datang!"],
            "apa itu ascendant?":["Kamu telah berkomitmen pada Ritual, ini adalah awal perjalananmu di komunitas. Persyaratan peran: 10 blessings dan 10 curses. Level 11: peran Limbo."],
            "bagaimana cara memeriksa peringkatmu?":["Gunakan command !rank di channel #rank."],
            "apa saja perintah yang berguna di channel?":["1. /bless – Berikan blessing. 2. /curse – Berikan curse. 3. /stats – Melihat jumlah blessings dan curses milikmu. 4. /journey – Command untuk mendapatkan peran Ascendant."],
            "apa itu ritty bitty":["Kamu adalah ritualist kecil yang berjalan di jalur yang benar, sudah mulai dikenali tetapi masih memiliki perjalanan panjang. * Buat konten berkualitas tentang Ritual (Twitter post/thread, panduan, review, infografik, artikel). * Buat meme kreatif tentang Ritual dan posting di thread #contributions. * Ikuti aktivitas gaming. * Ikuti pengumuman di thread #event dan kalender event. * Jadilah aktif dan ramah, serta bantu anggota baru. (Ini adalah awal perjalananmu. Dalami Ritual dan kembangkan peranmu di komunitas.)"],
            "apa itu ritty?":["Untuk anggota yang loyal dan diakui. Peran ini memberikan akses ke channel rahasia (misalnya Telegram). Ini adalah level bagi mereka yang sudah berkontribusi."],
            "apa itu ritualist?":["Peran utama bagi peserta aktif yang memberikan konten berkualitas, diskusi, dan dukungan. Seorang anggota sejati Ritual."],
            "apa itu radiant ritualist?":["Level tertinggi, untuk legenda komunitas. * Pemimpin sejati dengan visi jangka panjang dan kontribusi luar biasa."],
            "apa itu zealot?":["PERAN UNTUK AMBASSADOR: * Buat konten berkualitas tinggi tentang Ritual. * Promosikan proyek di media sosial. * Menjadi perwakilan aktif komunitas. (Peran akan diberikan setelah aplikasi kamu disetujui). (Kamu perlu mengisi formulir)."],
            "apa itu mage?":["PERAN UNTUK ARTIS: * Buat karya seni unik yang berhubungan dengan Ritual. (Peran ini diberikan secara manual melalui seleksi)."],
            "hai siggy":["halo, Bagaimana saya bisa membantu kamu?"],
            "apakah kamu siggy?":["Ya, aku Siggy — cerdas, sedikit gila, tapi AI asisten yang siap membantu."]
        },

    ko: {
            "안녕 시기?": ["안녕! 나는 신비로운 AI 친구 시기야. 잘 지내?", "👋"],
            "잘 지내요": ["괜찮아요 👍", "👍"],
            "어떻게 지내세요": ["잘 지내! 디지털 세계는 항상 바쁘지만, 나는 네 곁에 있어.", "💻"],
            "누구세요": ["나는 시기야, 디지털 세계의 친구야. 물어보면 대답할게.", "🤓"],
            "자바스크립트?": ["JavaScript는 웹의 심장이야. HTML이 몸, CSS가 외모라면, JavaScript는 생명을 줘.", "💻"],
            "파이썬?": ["Python은 우아하고 사용하기 쉬워. 마치 프로그래머의 주문서에 있는 마법 지팡이 같아.", "🐍"],
            "무작위 조언?": ["호기심 + 인내 = 학습의 신비로운 세계의 열쇠야.", "🔮"],
            "내가 맞나요?": ["물론이지, 너가 세상에서 제일 멋져 😎", "😎"],
            "내가 아름다워?": ["하하하 누가 그렇게 말했어? 네 엄마 말이야 💖", "💖"],
            "리추얼이란 무엇인가요?": ["Ritual은 기본적으로 AI를 위해 설계된 블록체인입니다. AI가 중앙 집중식 대기업에 의해 통제되는 대신, Ritual은 AI 모델과 컴퓨팅을 탈중앙화된 노드 네트워크에서 실행할 수 있도록 합니다.", "🤖"],
            "리추얼이 가능하게 하는 것은 무엇인가요?": ["AI + 스마트 계약 – 스마트 계약은 AI 모델과 상호작용할 수 있습니다. 개인정보 보호 및 검증 – AI 출력은 온체인에서 검증할 수 있습니다. 분산형 AI 컴퓨팅 – 누구나 컴퓨팅 파워를 제공할 수 있습니다. AI 모델 마켓플레이스 – 개발자는 자신의 모델을 호스팅하고 수익을 창출할 수 있습니다.", "🧠"],
            "역할은 무엇인가요?": ["현재 주요 역할은 네 가지 단계로 구성됩니다: Ritty Bitty - Ritty - Ritualist - Radiant Ritualist"],
            "왜 시스템이 개편되었나요?": ["Ritual 커뮤니티가 계속 성장함에 따라, 멤버들을 더 잘 조직하고 인정하기 위해 새로운 역할 시스템이 도입되었습니다."],
            "기존 역할 보유자에게는 어떻게 되나요?": ["* 기존 Ritualist 역할 보유자는 이제 Ritty가 됩니다. * Mage 역할 보유자는 Ritty + Mage를 갖게 됩니다. * Ritualist와 Mage를 모두 가진 사람은 새로운 시스템에서 Ritualist + Mage를 받게 됩니다. 이것은 강등이 아니라 단순한 이름 변경입니다. :pepe_pray:"],
            "npc 역할은 어떻게 되나요?": ["기존 NPC 역할 보유자는 다음 주에 진행될 첫 번째 Ritty / Ritty Bitty 승급에서 우선적으로 고려됩니다(수동 선택). 그러나 NPC 역할을 가지고 있다고 해서 승급이 보장되는 것은 아닙니다."],
            "mage 역할은 어떻게 되나요?": ["MAGE 역할은 그대로 유지되며 아티스트 역할입니다. 이전과 동일하게 수동 선택 방식으로 계속 부여됩니다."],
            "어디서 시작하나요?": ["1. INITIATE, 2. ASCENDANT, 3. 자신의 랭크 확인, 4. 채널에서 명령어 사용"],
            "initiate란 무엇인가요?": ["커뮤니티에 막 가입했고 인증 절차를 성공적으로 통과했습니다. 환영합니다!"],
            "ascendant란 무엇인가요?": ["Ritual에 대한 의지를 표시했으며, 이것이 커뮤니티 여정의 시작입니다. 역할 요구 사항: 10 blessings, 10 curses. 레벨 11: Limbo 역할"],
            "랭크는 어떻게 확인하나요?": ["#rank 채널에서 !rank 명령어를 사용하세요."],
            "채널에서 유용한 명령어는 무엇인가요?": ["1. /bless - 축복을 보냅니다. 2. /curse - 저주를 보냅니다. 3. /stats - 자신의 blessings와 curses 수를 확인합니다. 4. /journey - Ascendant 역할을 얻는 명령어입니다."],
            "ritty bitty란 무엇인가요?": ["당신은 올바른 길을 걷고 있는 작은 ritualist입니다. 인정받기 시작했지만 아직 갈 길이 멉니다. * Ritual에 대한 고품질 콘텐츠 제작 (Twitter 게시물/스레드, 가이드, 리뷰, 인포그래픽, 기사). * Ritual 관련 창의적인 밈 제작 후 #contributions 스레드에 게시. * 게임 활동 참여. * #event 스레드와 이벤트 캘린더의 공지를 확인. * 활발하고 친절하게 커뮤니티에 참여하고 새로운 멤버를 도와주세요. (이것이 당신의 여정의 시작입니다.)"],
            "ritty란 무엇인가요?": ["충성스럽고 인정받은 멤버를 위한 역할입니다. 비밀 채널(예: Telegram)에 접근할 수 있습니다. 이미 커뮤니티에 기여한 사람들을 위한 단계입니다."],
            "ritualist란 무엇인가요?": ["활발하게 참여하는 멤버를 위한 주요 역할입니다. 양질의 콘텐츠, 토론, 그리고 커뮤니티 지원을 제공합니다. 진정한 Ritual 멤버입니다."],
            "radiant ritualist란 무엇인가요?": ["가장 높은 단계로, 커뮤니티의 전설적인 멤버를 위한 역할입니다. 장기적인 비전과 뛰어난 기여를 가진 진정한 리더입니다."],
            "zealot이란 무엇인가요?": ["앰배서더 역할: Ritual에 대한 고품질 콘텐츠 제작, 소셜 미디어에서 프로젝트 홍보, 커뮤니티의 적극적인 대표 역할 수행. (지원서가 승인된 후 역할이 부여됩니다)."],
            "mage란 무엇인가요?": ["아티스트 역할: Ritual과 관련된 독창적인 아트워크 제작. 이 역할은 수동 선택을 통해 부여됩니다."],
            "안녕 시기":["안녕, 안녕! 내가 어떻게 도와줄까?"],
            "너 시기야?":["응, 나는 시기야 — 재치 있고 약간 엉뚱하지만 도움이 되는 AI 비서야."]
    }
};


function siggyResponse(input){
    const lang = detectLanguage(input);
    const langQnA = qna[lang] || qna["en"];
    for(const key in langQnA){
        if(input.toLowerCase().includes(key)){
            // Filter out any undefined or null elements
            return (langQnA[key].filter(Boolean)).join(" ");
        }
    }
    if(lang==="en") return "Interesting question… Can you explain a bit more?";
    if(lang==="tl") return "Interesting question… Pwede mo bang ipaliwanag pa?";
    if(lang==="id") return "Pertanyaan menarik… bisa jelaskan lebih lanjut?";
    if(lang==="ko") return "흥미로운 질문이에요… 조금 더 설명해 주실 수 있나요?";
}

function sendMessage(){
    const text=input.value.trim(); 
    if(text==="") return;
    bubble(text,"user"); 
    input.value="";

    const replyText = siggyResponse(text);
    const emoji = replyText.match(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}]/gu)?.[0] || "💬";
    
    showTyping(emoji);
    setTimeout(()=>{
        hideTyping();
        bubble(replyText,"bot");
    }, 600);
}


input.addEventListener("keydown",(e)=>{ 
    if(e.key==="Enter" && !e.shiftKey){ e.preventDefault(); sendMessage(); } 
});

const particles=document.createElement("div"); 
particles.id="particles"; 
document.body.appendChild(particles);
for(let i=0;i<40;i++){
    const p=document.createElement("div"); 
    p.classList.add("particle");
    p.style.left=Math.random()*100+"%"; 
    p.style.animationDuration=(5+Math.random()*10)+"s";
    particles.appendChild(p);
}


window.addEventListener("load",()=>{ 
    bubble("👋 Hello I'm Siggy AI. Ask me anything.", "bot"); 
});
        