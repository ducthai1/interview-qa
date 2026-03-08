import type { QuestionTranslationMap } from '../types'

export const securityVi: QuestionTranslationMap = {
  'sec-001': {
    question:
      'Cross-Site Scripting (XSS) la gi va loai nao pho bien nhat trong cac ung dung React?',
    explanation:
      'XSS la viec tiem ma JavaScript doc hai vao cac trang web ma nguoi dung khac xem. Ba loai: 1) Reflected — script doc hai trong tham so URL duoc phan hoi lai. 2) Stored — script duoc luu trong co so du lieu, phuc vu cho tat ca nguoi dung. 3) DOM-based — JavaScript phia client xu ly du lieu khong dang tin cay va chen vao DOM. Trong cac ung dung React SPA, DOM-based XSS la phu hop nhat vi ung dung React thao tac DOM phia client. React tu dong escape noi dung JSX theo mac dinh, nhung lo hong phat sinh tu: dangerouslySetInnerHTML, href="javascript:...", eval(), va innerHTML trong refs.',
    options: [
      'Mot cuoc tan cong tiem CSS; Stored XSS la pho bien nhat',
      'Tiem cac script doc hai vao trang web; DOM-based XSS la phu hop nhat cho SPA',
      'Mot loi tran bo dem phia server; Reflected XSS la pho bien nhat',
      'Mot cuoc tan cong tiem co so du lieu; SQL-based XSS',
    ],
  },
  'sec-002': {
    question:
      'React tu dong ngan chan tat ca cac cuoc tan cong XSS vi no escape noi dung JSX.',
    explanation:
      'React escape cac gia tri chuoi trong JSX theo mac dinh, giup ngan chan hau het XSS. Tuy nhien, no KHONG bao ve chong lai: 1) dangerouslySetInnerHTML — render HTML tho. 2) Thuoc tinh href — href="javascript:alert(1)" thuc thi ma. 3) ref.current.innerHTML — thao tac DOM truc tiep bo qua React. 4) Server-side rendering voi du lieu nguoi dung chua duoc lam sach trong HTML ban dau. 5) Thu vien ben thu ba chen HTML. Luon lam sach dau vao nguoi dung bang DOMPurify truoc khi su dung dangerouslySetInnerHTML. Xac thuc URL truoc khi su dung trong thuoc tinh href/src.',
  },
  'sec-003': {
    question: 'Tim lo hong bao mat trong component React nay:',
    answer:
      'Hai lo hong: 1) dangerouslySetInnerHTML render user.bio duoi dang HTML tho — XSS neu bio chua the <script>. 2) user.website co the la "javascript:alert(1)" — XSS thong qua href.',
    explanation:
      'Cach sua: 1) Lam sach bio bang DOMPurify: dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(user.bio) }}. Hoac tot hon, su dung trinh render markdown khong cho phep HTML tho. 2) Xac thuc URL website: chi cho phep giao thuc http/https. Kiem tra bang: new URL(user.website).protocol === "https:" truoc khi render. Hoac su dung thu vien xac thuc URL. Khong bao gio tin tuong URL hoac noi dung HTML do nguoi dung cung cap ma khong lam sach.',
  },
  'sec-004': {
    question:
      'Content Security Policy (CSP) la gi va no ngan chan cac cuoc tan cong XSS nhu the nao?',
    explanation:
      'CSP la mot header phan hoi HTTP (Content-Security-Policy) cho trinh duyet biet nguon noi dung nao la dang tin cay. Cac chi thi: script-src (nguon script cho phep), style-src, img-src, connect-src (diem cuoi API), default-src. CSP ngan chan XSS bang cach: 1) Chan script noi tuyen (script-src khong co "unsafe-inline"). 2) Chi cho phep script tu cac origin trong danh sach trang. 3) Chan eval() va tuong tu. Vi du: Content-Security-Policy: default-src \'self\'; script-src \'self\' https://cdn.example.com; style-src \'self\' \'unsafe-inline\'. Su dung nonce hoac hash cho cac script noi tuyen can thiet boi framework.',
    options: [
      'Mot thu vien JavaScript xac thuc cac loai noi dung',
      'Mot HTTP header han che nguon noi dung (script, style, hinh anh) ma trinh duyet duoc phep tai va thuc thi',
      'Mot thuoc tinh CSS an noi dung nhay cam',
      'Mot cau hinh tuong lua phia server',
    ],
  },
  'sec-005': {
    question: 'CORS (Cross-Origin Resource Sharing) la gi va tai sao no ton tai?',
    explanation:
      'CORS la mot co che bao mat cua trinh duyet thuc thi Same-Origin Policy. Theo mac dinh, trinh duyet chan JavaScript phia frontend gui yeu cau den mot origin khac (giao thuc + ten mien + cong). Server phai gui header Access-Control-Allow-Origin de cho phep yeu cau cross-origin. Yeu cau preflight (OPTIONS) duoc gui cho cac yeu cau khong don gian (POST voi JSON, header tuy chinh). CORS bao ve nguoi dung khoi cac trang web doc hai gui yeu cau da xac thuc den cac trang khac. Cau hinh thuong gap: Access-Control-Allow-Origin: https://myapp.com, Access-Control-Allow-Methods: GET,POST, Access-Control-Allow-Credentials: true.',
    options: [
      'Mot framework CSS cho thiet ke responsive',
      'Mot co che bao mat cua trinh duyet han che cac yeu cau HTTP tu mot origin den mot origin khac tru khi server cho phep ro rang',
      'Mot goi Node.js de xu ly cookie',
      'Mot pattern JavaScript de quan ly cac thao tac bat dong bo',
    ],
  },
  'sec-006': {
    question:
      'CSRF (Cross-Site Request Forgery) la gi va cac ung dung frontend co the ngan chan no nhu the nao?',
    explanation:
      'CSRF khai thac viec trinh duyet tu dong dinh kem cookie voi moi yeu cau den mot ten mien. Mot trang web doc hai co the tao form/lien ket gui den your-bank.com — trinh duyet dinh kem cookie xac thuc cua ban, nen yeu cau tro nen hop le. Cach phong chong: 1) CSRF token — token duy nhat trong form/header ma ke tan cong khong the doan. 2) Thuoc tinh cookie SameSite — SameSite=Strict hoac Lax ngan cookie duoc gui trong yeu cau cross-origin. 3) Kiem tra header Origin/Referer tren server. 4) Yeu cau header tuy chinh (X-Requested-With) khong the dat boi form HTML.',
    options: [
      'Mot loai tan cong XSS duoc ngan chan bang xac thuc dau vao',
      'Mot cuoc tan cong trong do trang web doc hai lua trinh duyet gui yeu cau da xac thuc den trang khac; ngan chan bang CSRF token, cookie SameSite va header tuy chinh',
      'Mot cuoc tan cong gia mao DNS duoc ngan chan bang HTTPS',
      'Mot cuoc tan cong brute-force mat khau duoc ngan chan bang gioi han toc do',
    ],
  },
  'sec-007': {
    question:
      'Khi luu tru token xac thuc trong ung dung frontend, cach tiep can nao an toan nhat?',
    explanation:
      'Cookie HttpOnly la an toan nhat cho token xac thuc vi: 1) Co HttpOnly ngan JavaScript truy cap — mien nhiem voi viec danh cap token qua XSS. 2) Co Secure dam bao chi truyen qua HTTPS. 3) SameSite=Strict/Lax ngan CSRF. 4) Tu dong dinh kem trong yeu cau — khong can quan ly header thu cong. localStorage/sessionStorage co the truy cap qua JavaScript, nen bat ky lo hong XSS nao deu lo token. Danh doi: cookie can cau hinh CORS voi credentials:include, va co gioi han kich thuoc 4KB. Cho SPA, su dung access token ngan han trong bo nho + refresh token HttpOnly trong cookie.',
    options: [
      'localStorage — de truy cap tu JavaScript',
      'Cookie HttpOnly, Secure, SameSite — khong the truy cap tu JavaScript',
      'sessionStorage — xoa khi dong tab',
      'Mot bien JavaScript toan cuc trong window',
    ],
  },
  'sec-008': {
    question:
      'HTTPS (TLS) ma hoa du lieu trong qua trinh truyen va ngan chan cac cuoc tan cong man-in-the-middle tren ung dung web.',
    explanation:
      'HTTPS su dung TLS (Transport Layer Security) de ma hoa tat ca du lieu giua trinh duyet va server, ngan chan: 1) Nghe len — ke tan cong tren mang khong the doc du lieu. 2) Gia mao — du lieu khong the bi sua doi trong qua trinh truyen. 3) Mao danh — danh tinh server duoc xac minh qua chung chi. HTTPS la can thiet cho: token xac thuc, du lieu ca nhan, thong tin thanh toan va bat ky thao tac nhay cam nao. Trinh duyet hien dai danh dau cac trang HTTP la "Khong an toan". Header HSTS (HTTP Strict Transport Security) buoc su dung HTTPS va ngan chan cac cuoc tan cong SSL stripping. Tat ca ung dung web hien dai nen su dung HTTPS.',
  },
  'sec-009': {
    question: 'Van de bao mat trong API route Next.js nay la gi?',
    answer:
      'SQL Injection — id do nguoi dung cung cap duoc noi truc tiep vao chuoi truy van SQL ma khong su dung tham so hoa.',
    explanation:
      'Ke tan cong co the gui id=1; DROP TABLE users;-- de xoa toan bo bang. Cach sua: su dung truy van tham so hoa: db.query("SELECT * FROM users WHERE id = $1", [id]). Cac ORM nhu Prisma va Drizzle tu dong xu ly tham so hoa. Khong bao gio xay dung truy van SQL bang noi chuoi/noi suy voi dau vao nguoi dung. Dieu nay ap dung cho moi tuong tac co so du lieu, khong chi SQL — NoSQL injection cung co the xay ra voi MongoDB neu su dung $where hoac $regex voi dau vao nguoi dung.',
  },
  'sec-010': {
    question:
      'Subresource Integrity (SRI) la gi va khi nao ban nen su dung no?',
    explanation:
      'SRI them mot hash mat ma (SHA-256/384/512) vao cac the <script> va <link> tai tai nguyen ben ngoai tu CDN. Trinh duyet tinh hash cua file da tai xuong va so sanh voi hash mong doi — neu khong khop, tai nguyen bi chan. Dieu nay bao ve chong lai: CDN bi xam nhap, tan cong chuoi cung ung va sua doi man-in-the-middle. Su dung: <script src="https://cdn.example.com/lib.js" integrity="sha384-abc123..." crossorigin="anonymous">. Tao hash bang: shasum -b -a 384 file.js | xxd -r -p | base64. Su dung SRI cho tat ca tai nguyen CDN ben thu ba.',
    options: [
      'Mot JavaScript API de kiem tra tinh toan ven bo nho',
      'Mot co che xac minh cac script/stylesheet ben ngoai tai tu CDN chua bi gia mao, su dung hash mat ma',
      'Mot phuong thuc vong doi component React',
      'Mot tieu chuan ma hoa cho localStorage',
    ],
  },
  'sec-011': {
    question:
      'JWT (JSON Web Token) luu trong localStorage la an toan vi token da duoc ky.',
    explanation:
      'Viec ky JWT ngan chan gia mao (sua doi claims) nhung KHONG ngan chan viec danh cap. Neu luu trong localStorage, bat ky lo hong XSS nao cho phep ke tan cong danh cap JWT va mao danh nguoi dung. Viec ky dam bao server co the xac minh token chua bi sua doi, nhung bat ky ai so huu token deu co the su dung no. Cach an toan hon: luu JWT trong cookie HttpOnly (JavaScript khong the truy cap). Neu bat buoc su dung localStorage, giu token ngan han (15 phut), thuc hien xoay vong token va dau tu manh vao phong chong XSS. Luu y: JWT duoc ma hoa base64, KHONG duoc ma hoa — claims co the doc boi bat ky ai.',
  },
  'sec-012': {
    question:
      'Ung dung frontend nen xu ly luong OAuth 2.0 Authorization Code voi PKCE cho Single Page Application nhu the nao?',
    explanation:
      'Luong OAuth 2.0 Authorization Code voi PKCE la luong duoc khuyen nghi cho SPA. PKCE them code_verifier (chuoi ngau nhien) va code_challenge (hash SHA256) ngan chan cac cuoc tan cong chan ma uy quyen — ngay ca khi khong co client secret. Luong: 1) Tao code_verifier ngau nhien va hash SHA256 cua no (code_challenge). 2) Chuyen huong den auth server voi code_challenge. 3) Sau khi nguoi dung xac thuc, nhan ma uy quyen. 4) Doi ma + code_verifier lay token. Luong Implicit da bi loai bo (token trong URL fragment khong an toan). Khong bao gio luu client secret trong ma frontend.',
    options: [
      'Su dung luong Implicit Grant — no duoc thiet ke cho SPA',
      'Luu client secret trong frontend va su dung luong Authorization Code tieu chuan',
      'Su dung luong Authorization Code voi PKCE (Proof Key for Code Exchange) — khong can client secret phia frontend',
      'Su dung Resource Owner Password Credentials — gui username/password truc tiep',
    ],
  },
  'sec-013': {
    question: 'Clickjacking la gi va ban ngan chan no nhu the nao?',
    explanation:
      'Clickjacking tai trang web cua ban trong mot iframe vo hinh tren trang do ke tan cong kiem soat, dat vi tri de nguoi dung vo tinh nhan vao cac nut tren trang cua ban (nhu "Xoa tai khoan" hoac "Chuyen tien"). Phong chong: 1) Header X-Frame-Options: DENY hoac SAMEORIGIN — ngan trang cua ban bi nhung trong frame. 2) Chi thi CSP frame-ancestors: Content-Security-Policy: frame-ancestors \'self\' (linh hoat hon, CSP Level 2). 3) JavaScript frame-busting lam phuong an du phong: if (window.top !== window.self) window.top.location = window.self.location. Ung dung hien dai nen luon dat X-Frame-Options hoac frame-ancestors.',
    options: [
      'Mot loai tan cong XSS; ngan chan bang lam sach dau vao',
      'Mot cuoc tan cong chiem doat click cua nguoi dung bang cach dat mot iframe trong suot len trang hop phap; ngan chan bang X-Frame-Options va CSP frame-ancestors',
      'Mot ky thuat chiem doat su kien JavaScript; ngan chan bang stopPropagation()',
      'Mot cuoc tan cong animation CSS; ngan chan bang vo hieu hoa animation',
    ],
  },
  'sec-014': {
    question:
      'Tai sao ban nen luon them `rel="noopener noreferrer"` vao cac lien ket ben ngoai mo trong tab moi?',
    explanation:
      'Khi ban su dung target="_blank" ma khong co rel="noopener", trang duoc mo co the truy cap window.opener.location va chuyen huong trang goc cua ban den trang lua dao (reverse tabnabbing). Them rel="noopener" ngan chan viec truy cap nay. rel="noreferrer" them vao con ngan gui header Referer. Trinh duyet hien dai (Chrome 88+) tu dong them noopener cho target="_blank", nhung van la phuong phap tot nhat de them no ro rang cho ho tro trinh duyet cu va ro rang ve y dinh. React va Next.js xu ly dieu nay tu dong cho cac lien ket ben ngoai trong component Link.',
    options: [
      'De cai thien SEO',
      'De ngan trang moi truy cap window.opener va co the chuyen huong trang goc (reverse tabnabbing)',
      'De tai trang nhanh hon',
      'De ngan cookie duoc gui di',
    ],
  },
  'sec-015': {
    question:
      'Bien moi truong co tien to NEXT_PUBLIC_ hoac VITE_ an toan de luu tru bi mat API vi chung la "bien moi truong".',
    explanation:
      'Bien moi truong co tien to NEXT_PUBLIC_ va VITE_ duoc co tinh lo ra cho bundle client — chung duoc nhung vao JavaScript trong qua trinh build va hien thi cho bat ky ai kiem tra ma nguon. KHONG BAO GIO dat bi mat (API key, thong tin dang nhap co so du lieu, khoa rieng) trong bien moi truong lo ra client. Chi su dung chung cho: URL API cong khai, ID phan tich, co tinh nang va khoa cong khai. Giu bi mat trong bien moi truong chi server (khong co tien to trong Next.js, hoac trong file .env khong co tien to VITE_ trong Vite). Chi truy cap bi mat trong ma phia server (API route, Server Action, middleware).',
  },
  'sec-016': {
    question: 'Muc dich cua DOMPurify trong bao mat frontend la gi?',
    explanation:
      'DOMPurify la thu vien lam sach HTML tieu chuan nganh. No phan tich cac chuoi HTML va loai bo: the script, trinh xu ly su kien (onclick, onerror), URL javascript:, URL data: trong mot so ngu canh va cac vector XSS khac. No giu lai dinh dang HTML an toan (in dam, lien ket, hinh anh). Su dung: DOMPurify.sanitize(dirtyHTML). Luon su dung voi dangerouslySetInnerHTML trong React: <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userContent) }} />. Cau hinh the/thuoc tinh cho phep: DOMPurify.sanitize(html, { ALLOWED_TAGS: ["b", "i", "a"] }).',
    options: [
      'No lam sach cac phan tu DOM bang cach loai bo cac node khong su dung de tang hieu suat',
      'No lam sach cac chuoi HTML bang cach loai bo cac the, thuoc tinh va JavaScript co the doc hai, ngan chan XSS',
      'No ma hoa noi dung DOM',
      'No xac thuc cac thuoc tinh CSS',
    ],
  },
  'sec-017': {
    question:
      'Nhung security header nao ma moi ung dung frontend production nen thiet lap?',
    explanation:
      'Cac security header thiet yeu: 1) Content-Security-Policy — han che nguon noi dung (phong chong XSS). 2) X-Content-Type-Options: nosniff — ngan chan viec danh hoi kieu MIME. 3) X-Frame-Options: DENY — ngan chan clickjacking. 4) Strict-Transport-Security (HSTS) — buoc su dung HTTPS. 5) Referrer-Policy: strict-origin-when-cross-origin — kiem soat viec lo thong tin referrer. 6) Permissions-Policy — han che cac tinh nang trinh duyet (camera, microphone, geolocation). Kiem tra header tai securityheaders.com. Trong Next.js, thiet lap trong next.config.js headers(). Trong Vercel, su dung vercel.json headers.',
    options: [
      'Chi can Content-Type la du',
      'Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security, Referrer-Policy, Permissions-Policy',
      'Chi can Cache-Control va ETag',
      'Header Authorization va Cookie',
    ],
  },
  'sec-018': {
    question:
      'Su dung eval() hoac new Function() voi chuoi do nguoi dung cung cap la an toan neu ban xac thuc dau vao truoc.',
    explanation:
      'eval() va new Function() thuc thi JavaScript tuy y va KHONG BAO GIO nen su dung voi dau vao nguoi dung, bat ke viec xac thuc. Xac thuc dau vao luon co the bi vuot qua boi cac ke tan cong du sang tao — be mat tan cong qua lon. Ngay ca voi dau vao "da lam sach", cac truong hop dac biet va thu thuat ma hoa co the dan den thuc thi ma. CSP script-src khong co "unsafe-eval" chan cac ham nay hoan toan. Thay the: JSON.parse() cho du lieu, template literal cho noi suy chuoi, truy cap thuoc tinh dong cho khoa dong va trinh phan tich dung cho danh gia bieu thuc (nhu mathjs cho bieu thuc toan).',
  },
  'sec-019': {
    question:
      'Thiet ke mot luong xac thuc an toan cho ung dung React SPA ket noi voi REST API.',
    answer:
      'OAuth2 PKCE de dang nhap, access token ngan han trong bo nho, refresh token cookie HttpOnly, xoay vong token, dang xuat tren tat ca thiet bi.',
    explanation:
      'Kien truc xac thuc SPA an toan: 1) Dang nhap qua OAuth2 Authorization Code + PKCE (hoac email/mat khau den auth server cua ban). 2) Server tra ve access token ngan han (15 phut) trong body phan hoi + refresh token dai han trong cookie HttpOnly Secure SameSite=Strict. 3) Luu access token trong bo nho (React state/context) — KHONG phai localStorage. 4) Dinh kem access token lam header Authorization: Bearer qua Axios interceptor. 5) Khi access token het han, goi am endpoint refresh — refresh cookie duoc gui tu dong. 6) Thuc hien xoay vong refresh token (token moi moi lan su dung, vo hieu hoa token cu). 7) Dang xuat: xoa bo nho + server vo hieu hoa refresh token. 8) Bao ve CSRF: cookie SameSite + kiem tra header tuy chinh.',
  },
  'sec-020': {
    question:
      'Tan cong chuoi cung ung (supply chain attack) trong ngu canh phat trien frontend la gi va ban giam thieu no nhu the nao?',
    explanation:
      'Tan cong chuoi cung ung nham vao cac dependency phan mem ma ung dung cua ban dua vao. Vi du: goi npm bi xam nhap (su co event-stream), typosquatting (lodash vs 1odash), tai khoan nguoi bao tri bi chiem doat, sua doi CDN doc hai. Giam thieu: 1) Khoa dependency (package-lock.json). 2) Su dung npm audit va Snyk de quet lo hong. 3) SRI cho tai nguyen CDN. 4) Ghim phien ban chinh xac. 5) Xem xet thay doi dependency trong PR. 6) Su dung registry/proxy npm rieng (Verdaccio, Artifactory). 7) Bat npm provenance (co --provenance). 8) Giam thieu dependency. 9) Su dung Socket.dev de phan tich chuoi cung ung. 10) Xac thuc hai yeu to tren tai khoan npm.',
    options: [
      'Mot cuoc tan cong vao chuoi cung ung server vat ly',
      'Xam nhap cac goi npm, tai nguyen CDN hoac cong cu build de tiem ma doc hai vao cac ung dung phia duoi',
      'Mot cuoc tan cong DDoS vao cac package registry',
      'Danh cap ma nguon tu GitHub',
    ],
  },
  'sec-021': {
    question:
      'Trusted Types API la gi va no ngan chan DOM-based XSS nhu the nao?',
    explanation:
      'Thuc thi Trusted Types: header CSP trustedTypes: require-trusted-types-for \'script\' khien trinh duyet nem TypeError khi chuoi tho duoc gan cho innerHTML, eval() hoac script src. Lap trinh vien phai su dung policy: const policy = trustedTypes.createPolicy("default", { createHTML: (input) => DOMPurify.sanitize(input) }). Sau do: element.innerHTML = policy.createHTML(userContent) — trinh duyet chap nhan no. Dieu nay bat XSS tai diem nhan (sink), khong chi tai nguon, va hoat dong ngay ca khi thu vien ben thu ba co gan HTML tho. Ho tro trong Chrome/Edge; co polyfill cho Firefox. Bat trong CSP: Content-Security-Policy: require-trusted-types-for "script"; trusted-types default.',
    options: [
      'Trusted Types la cach xac minh chung chi TLS tu JavaScript',
      'Trusted Types la mot API trinh duyet han che cac gia tri nao co the truyen vao cac DOM sink nguy hiem (innerHTML, eval, document.write, thuoc tinh src). Ban dinh nghia mot policy lam sach/xac thuc chuoi truoc khi chung tro thanh noi dung DOM — trinh duyet thuc thi dieu nay, khong the vo tinh gan chuoi tho vao innerHTML.',
      'Trusted Types la mot API dac thu React de xac thuc props cua component',
      'Trusted Types thay the HTTPS de bao mat thao tac DOM',
    ],
  },
  'sec-022': {
    question: 'Tim lo hong bao mat trong trinh xu ly postMessage nay:',
    answer:
      'Thieu xac thuc origin — bat ky trang web nao cung co the gui thong diep den trinh xu ly nay. Mot trang web doc hai trong tab khac co the goi window.opener.postMessage({ type: "PAYMENT_COMPLETE", amount: 0, currency: "USD" }) de kich hoat xac nhan thanh toan gia.',
    explanation:
      'Cach sua: luon xac thuc event.origin truoc khi xu ly: if (event.origin !== "https://payment.trusted-provider.com") return; Khong bao gio xu ly du lieu postMessage ma khong kiem tra origin. Cung xac thuc event.source de dam bao do la frame mong doi. Pattern an toan: window.addEventListener("message", (event) => { if (event.origin !== TRUSTED_ORIGIN) return; if (event.source !== paymentIframe.contentWindow) return; // xu ly an toan }). Ngoai ra: xac thuc schema/kieu du lieu truoc khi su dung gia tri trong logic nghiep vu, va su dung structuredClone() neu ban can luu du lieu de tranh prototype pollution.',
  },
  'sec-023': {
    question:
      'Tan cong dependency confusion la gi va no khac gi voi typosquatting?',
    explanation:
      'Tan cong dependency confusion (namespace confusion): neu package.json cua ban tham chieu @mycompany/internal-utils va npm khong the tim thay no trong private registry cua ban, no kiem tra public npm registry. Ke tan cong biet ten goi noi bo cua ban (tu tin tuyen dung, thong bao loi hoac cau hinh bi lo) co the xuat ban @mycompany/internal-utils doc hai len public registry voi phien ban 9999.0.0 — cao hon phien ban noi bo cua ban. npm giai quyet phien ban public cao hon. Giam thieu: (1) Dat pham vi tat ca goi noi bo vao scope to chuc rieng va cau hinh registry KHONG BAO GIO giai quyet scope do tu npm cong khai. (2) .npmrc: @mycompany:registry=https://your-private-registry.com. (3) npm provenance cho tat ca goi xuat ban. (4) Xem xet dependency trong CI.',
    options: [
      'Chung la cung mot cuoc tan cong voi ten khac nhau',
      'Typosquatting: ke tan cong xuat ban goi npm cong khai voi ten tuong tu goi pho bien (lodahs vs lodash). Dependency confusion: ke tan cong xuat ban goi cong khai voi ten CHINH XAC nhu goi noi bo rieng cua ban — npm giai quyet goi cong khai truoc neu phien ban cao hon, thay the goi noi bo cua ban bang goi cua ke tan cong.',
      'Dependency confusion chi anh huong den Python pip, khong phai npm',
      'Dependency confusion yeu cau truy cap vat ly vao may cua lap trinh vien',
    ],
  },
  'sec-024': {
    question:
      'Prototype pollution trong JavaScript la gi va no co the dan den lo hong bao mat nhu the nao trong ung dung frontend?',
    explanation:
      'Vi du prototype pollution: ham merge xu ly dau vao nguoi dung { "__proto__": { "isAdmin": true } } -> dat Object.prototype.isAdmin = true -> bay gio moi doi tuong trong ung dung co isAdmin: true khi kiem tra. Ma de bi tan cong: function merge(target, src) { for (let key in src) target[key] = src[key]; } — khoa "__proto__" ghi vao prototype. Tac dong frontend: (1) Vuot qua kiem tra uy quyen. (2) Ghi de cac ham thu vien tren prototype. (3) Kich hoat cac duong dan ma khong mong doi. Giam thieu: su dung Object.hasOwn() thay vi hasOwnProperty, xac thuc khoa chong danh sach cam (__proto__, constructor, prototype), su dung Object.create(null) cho doi tuong du lieu, su dung lodash 4.17.21+ (da va), su dung structuredClone() de sao chep sau.',
    options: [
      'Prototype pollution la van de hieu suat do qua nhieu tra cuu chuoi prototype',
      'Prototype pollution la khi ke tan cong sua doi Object.prototype hoac Array.prototype bang cach khai thac cac ham merge/clone de quy xu ly khoa __proto__ hoac constructor.prototype — gay ra cac thuoc tinh khong mong doi tren tat ca doi tuong trong ung dung, co the dan den XSS, leo thang dac quyen hoac DoS.',
      'Prototype pollution chi anh huong den ma phia server Node.js, khong phai trinh duyet',
      'Prototype pollution duoc tu dong ngan chan boi strict mode ("use strict")',
    ],
  },
  'sec-025': {
    question:
      'Tan cong ReDoS (Regular expression Denial of Service) la gi va no co the anh huong den ung dung frontend nhu the nao?',
    explanation:
      'ReDoS trong frontend: trinh xac thuc form, dau vao tim kiem va trinh phan tich markdown thuong su dung regex phuc tap. Mot pattern de bi tan cong nhu /^([a-zA-Z]+)*$/ duoc danh gia voi chuoi duoc tao cau truc chua ky khien engine regex cua JavaScript quay lui theo cap so mu — luong giao dien trinh duyet bi dong bang. Giam thieu: (1) Su dung safe-regex hoac vuln-regex-detector de quet cac pattern quay lui tham hoa. (2) Xac thuc dau vao voi gioi han do dai truoc khi danh gia regex. (3) Su dung regex don gian, cu the — tranh cac luong tu long nhau nhu (a+)+. (4) Chuyen xac thuc phuc tap sang worker thread (Web Worker) de luong giao dien phan hoi. (5) Su dung trinh phan tich regex voi dam bao thoi gian tuyen tinh (RE2 qua wasm). Kiem tra voi cac cong cu kiem tra ReDoS nhu regex101.com.',
    options: [
      'ReDoS la cuoc tan cong chi phia server khong anh huong den JavaScript phia client',
      'ReDoS khai thac cac pattern regex co quay lui tham hoa — dau vao duoc tao de gay thoi gian danh gia theo cap so mu. Trong trinh duyet, dau vao doc hai chong lai regex de bi tan cong trong trinh xac thuc form co the dong bang luong giao dien hang giay hoac phut. Vi du: /^(a+)+$/ voi "aaaaaaaaaaX" gay quay lui theo cap so mu.',
      'ReDoS yeu cau mang luoi ke tan cong phan tan de hieu qua',
      'ReDoS chi anh huong den engine regex phia server, khong phai JavaScript V8',
    ],
  },
  'sec-026': {
    question:
      'Cac tac dong bao mat cua tung thuoc tinh cookie la gi: HttpOnly, Secure, SameSite, Domain, Path va Max-Age?',
    explanation:
      'Phan tich sau ve bao mat cookie: (1) HttpOnly: document.cookie khong the doc no — bao ve chong XSS danh cap token xac thuc. KHONG ngan CSRF. (2) Secure: dam bao cookie chi truyen qua HTTPS — ngan danh cap man-in-the-middle tren HTTP. (3) SameSite=Strict: cookie khong gui khi dieu huong tu trang khac — bao ve CSRF manh nhat nhung pha vo chuyen huong OAuth. SameSite=Lax: gui khi dieu huong GET cap cao nhat — mac dinh tot. SameSite=None: yeu cau Secure, dung cho nhung cross-site hop phap. (4) Domain: tien to __Host- (vi du __Host-session) thuc thi Secure, khong co Domain, Path=/ — pham vi cookie manh nhat. (5) Max-Age ngan giam cua so danh cap. Cookie xac thuc ly tuong: __Host-session=...; Secure; HttpOnly; SameSite=Strict; Path=/.',
    options: [
      'Chi SameSite quan trong cho bao mat — phan con lai la cho hieu suat',
      'HttpOnly: chan JavaScript truy cap (ngan XSS danh cap token). Secure: chi gui qua HTTPS (ngan nghe mang). SameSite=Strict: khong gui cross-site (phong chong CSRF). SameSite=Lax: gui khi dieu huong cap cao nhung khong trong yeu cau nhung (can bang bao mat va su dung). Domain: ten mien rong hon tang pham vi/be mat tan cong cookie. Path: gioi han cookie cho duong dan cu the. Max-Age/Expires: gioi han cua so danh cap; cookie phien (khong co Max-Age) het han khi dong trinh duyet.',
      'Tat ca thuoc tinh cookie la tuy chon va chi anh huong hieu suat',
      'HttpOnly ngan CSRF; SameSite ngan XSS',
    ],
  },
  'sec-027': {
    question:
      'CSP nonce va hash hoat dong nhu the nao nhu la giai phap thay the cho "unsafe-inline" de cho phep cac script noi tuyen cu the?',
    explanation:
      'Thuc hien CSP nonce: (1) Moi yeu cau: crypto.randomUUID() -> nonce. (2) Header CSP: Content-Security-Policy: script-src \'nonce-abc123xyz\'. (3) HTML: <script nonce="abc123xyz">/* script noi tuyen duoc phep */</script>. Script khong co nonce (bao gom script XSS bi tiem) bi chan. Nonce phai: ngau nhien mat ma, duy nhat moi phan hoi, it nhat 128 bit. Cach tiep can hash: tinh SHA-256 cua noi dung script chinh xac -> ma hoa base64 -> Content-Security-Policy: script-src \'sha256-{base64hash}\'. Neu noi dung script thay doi, hash phai duoc cap nhat. Next.js 15 ho tro nonce tu nhien qua middleware. Su dung cach tiep can nonce cho ung dung server-rendered; hash cho script hoan toan tinh.',
    options: [
      '"unsafe-inline" la cach duy nhat de cho phep script noi tuyen voi CSP',
      'Nonce: server tao gia tri ngau nhien mat ma moi yeu cau, them vao header CSP (script-src \'nonce-{value}\') va vao moi <script nonce="{value}"> duoc phep. Chi script co nonce khop moi thuc thi. Hash: tinh SHA-256 cua noi dung script noi tuyen, them vao CSP (script-src \'sha256-{hash}\'). Chi script noi tuyen khop hash moi thuc thi. Hash phu hop cho noi dung tinh; nonce phu hop cho noi dung dong.',
      'Nonce va hash chi hoat dong voi script ben ngoai, khong phai script noi tuyen',
      'CSP nonce giong voi CSRF token',
    ],
  },
  'sec-028': {
    question:
      'Theo OWASP Top 10 cho frontend (goc nhin 2025), cac rui ro bao mat phia client nghiem trong nhat la gi?',
    explanation:
      'Anh xa OWASP cho frontend: A01 Kiem soat truy cap bi hong: an cac phan tu giao dien khong phai la uy quyen — luon xac thuc tren server. A03 Tiem nhiem: DOM XSS qua innerHTML/dangerouslySetInnerHTML, tiem dua tren URL, tiem template trong render phia client. A05 Cau hinh sai: thieu CSP, CORS qua de dai (Access-Control-Allow-Origin: *), du lieu nhay cam trong console.log o production. A06 Component de bi tan cong: React, lodash loi thoi voi CVE da biet — chay npm audit trong CI. A07 Loi xac thuc: token trong localStorage, khong het phien. A08 Loi toan ven: script CDN khong co SRI, pipeline build bi xam nhap. Su dung securityheaders.com va observatory.mozilla.org de kiem tra header.',
    options: [
      'Ung dung frontend khong co rui ro lien quan OWASP — OWASP chi ap dung cho backend',
      'Rui ro OWASP lien quan frontend: A01 Kiem soat truy cap bi hong (route guard phia client khong phai bao mat — thuc thi tren server), A03 Tiem nhiem (XSS qua thao tac DOM, tiem template), A05 Cau hinh sai bao mat (thieu security header, lo DevTools o production), A06 Component de bi tan cong (goi npm loi thoi), A08 Loi toan ven phan mem (tai nguyen CDN khong xac minh, khong co SRI).',
      'Chi SQL injection lien quan den danh gia bao mat frontend',
      'Ung dung frontend duoc bao ve hoan toan boi mo hinh bao mat tich hop cua trinh duyet',
    ],
  },
  'sec-029': {
    question:
      'Ban se su dung Web Crypto API nhu the nao de thuc hien ma hoa phia client cho du lieu nhay cam truoc khi gui den server?',
    explanation:
      'Su dung Web Crypto API: (1) Tao khoa: const key = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]). (2) Ma hoa: const iv = crypto.getRandomValues(new Uint8Array(12)); const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data). (3) Suy dien khoa tu mat khau: PBKDF2 — crypto.subtle.importKey("raw", passwordBuffer, "PBKDF2", false, ["deriveKey"]) roi deriveKey voi 100.000 vong lap. Truong hop su dung: nhan tin ma hoa dau cuoi (khoa khong roi khoi client), ma hoa du lieu form nhay cam truoc khi tai len, bang chung khong tiet lo. Luu y: ma hoa phia client bao ve du lieu khoi nguoi van hanh server — server luu ban ma hoa ma khong the doc.',
    options: [
      'Web Crypto API chi dung de tao so ngau nhien',
      'Su dung SubtleCrypto: tao khoa AES-GCM (crypto.subtle.generateKey), ma hoa du lieu (crypto.subtle.encrypt), chuyen doi sang base64 de truyen. Cho trao doi khoa: thoa thuan khoa ECDH tao bi mat chung. Cho ky: ECDSA tao chu ky khong the choi bo. Tat ca thao tac la bat dong bo, hoat dong trong trinh duyet va Web Worker, va su dung cac trien khai goc (tang toc phan cung khi co the).',
      'Ma hoa phia client luon yeu hon phia server — khong bao gio su dung Web Crypto API',
      'Web Crypto API yeu cau extension trinh duyet dac biet de hoat dong',
    ],
  },
  'sec-030': {
    question:
      'Header HTTP Permissions Policy la gi va no han che truy cap tinh nang trinh duyet nhu the nao?',
    explanation:
      'Cac chi thi Permissions Policy: camera=() tu choi tat ca. microphone=(self) chi cho phep origin cua minh. geolocation=(self "https://maps.trusted.com") cho phep origin cua minh va ben thu ba cu the. payment=(self) han che Payment Request API. fullscreen=* cho phep tat ca. Su dung trong Next.js: headers: [{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" }]. Tai sao quan trong: neu ke tan cong tiem script qua XSS, ho khong the truy cap camera hoac geolocation ngay ca khi nguoi dung da cap quyen cho trang — vi policy vo hieu hoa no o cap trang. Cung anh huong iframe: noi dung ben thu ba nhung khong the truy cap tinh nang tru khi duoc cap ro rang qua thuoc tinh allow.',
    options: [
      'Permissions Policy kiem soat goi npm nao ma trang co the nhap',
      'Permissions Policy (truoc la Feature Policy) kiem soat tinh nang trinh duyet nao ma trang va iframe nhung co the truy cap. Vi du: Permissions-Policy: camera=(), microphone=(), geolocation=(self) — vo hieu hoa camera/mic toan cuc va han che geolocation chi cho origin hien tai. Dieu nay gioi han tac dong cua XSS va script ben thu ba bi xam nhap.',
      'Permissions Policy la mot JavaScript API de yeu cau quyen nguoi dung',
      'Permissions Policy thay the CORS cho truy cap tai nguyen cross-origin',
    ],
  },
  'sec-031': {
    question:
      'Su dung Content-Security-Policy voi "unsafe-inline" cho script van cung cap bao ve XSS co y nghia so voi khong co CSP.',
    explanation:
      '"unsafe-inline" trong script-src hoan toan vo hieu hoa bao ve XSS cua CSP cho script noi tuyen — script noi tuyen bi tiem (vector XSS pho bien nhat) thuc thi tu do. CSP voi "unsafe-inline" thuc te khong bao ve chong DOM XSS qua innerHTML hoac tiem thuoc tinh. Dieu duy nhat no van han che: tai script tu cac origin ben ngoai khong nam trong danh sach trang. CSP dung dan khong co "unsafe-inline" yeu cau su dung nonce hoac hash cho bat ky script noi tuyen can thiet nao. Neu ban co ung dung Next.js voi nhieu script noi tuyen khien "unsafe-inline" hap dan, su dung ho tro nonce tich hop cua Next.js (middleware tao nonce, truyen cho document) de cho phep script noi tuyen cua Next.js ma khong can ky tu dai dien "unsafe-inline".',
  },
  'sec-032': {
    question:
      'Co che tien to cookie __Host- va __Secure- la gi va chung cung cap dam bao bao mat bo sung nao?',
    explanation:
      '__Host- cung cap dam bao bao mat cookie manh nhat: (1) Phai la Secure (chi HTTPS). (2) Khong duoc co thuoc tinh Domain — cookie khong the chia se voi subdomain. (3) Path phai la / — ap dung cho toan bo trang. (4) Hieu qua: cookie duoc rang buoc chinh xac voi host nay chi qua HTTPS. Vi du: Set-Cookie: __Host-session=token; Secure; HttpOnly; SameSite=Strict; Path=/. Neu bat ky yeu cau nao bi vi pham, trinh duyet im lang bo qua chi thi Set-Cookie. Dieu nay ngan tan cong tiem cookie khi ke tan cong tren subdomain (compromised.example.com) co dat cookie cho example.com. Su dung __Host- cho tat ca cookie phien xac thuc trong production.',
    options: [
      'Chung chi la quy uoc dat ten khong co bat buoc bao mat nao',
      '__Secure-: trinh duyet bat buoc cookie phai co co Secure va duoc dat tu trang HTTPS. __Host-: them vao bat buoc khong co thuoc tinh Domain (chi host hien tai), Path phai la /, va yeu cau Secure. Nhung dieu nay duoc trinh duyet bat buoc — server khong the dat sai.',
      'Tien to cookie chi lien quan den cookie ben thu ba',
      'Tien to cookie da bi loai bo trong trinh duyet hien dai de thay the bang SameSite',
    ],
  },
  'sec-033': {
    question:
      'Ma nay chua lo hong bao mat gi va ban se sua no nhu the nao?',
    answer:
      'Lo hong prototype pollution — neu userPreferences chua { "__proto__": { "isAdmin": true } }, deepMerge se dat Object.prototype.isAdmin = true, anh huong den tat ca doi tuong trong ung dung.',
    explanation:
      'Cach sua: chan cac khoa nguy hiem khi merge: if (key === "__proto__" || key === "constructor" || key === "prototype") continue; — them kiem tra nay ben trong vong for. Hoac su dung Object.hasOwn(source, key) thay vi duyet chuoi prototype, hoac su dung structuredClone() de sao chep sau du lieu nguoi dung. Phuong phap tot nhat: xac thuc dau vao nguoi dung theo schema (Zod) truoc bat ky thao tac deep merge nao. _.merge cua Lodash de bi tan cong truoc phien ban 4.17.17; luon kiem tra CVE cho cac thu vien tien ich xu ly merge doi tuong. Phan tich JSON nguoi dung bang JSON.parse() la an toan (khong co prototype pollution), nhung merge de quy cua doi tuong da phan tich thi khong.',
  },
  'sec-034': {
    question:
      'crypto.getRandomValues() cua Web Crypto API khac Math.random() nhu the nao cho cac truong hop su dung nhay cam ve bao mat?',
    explanation:
      'Yeu cau tinh ngau nhien bao mat: cac thao tac mat ma can entropy ma ke tan cong khong the du doan hoac tai tao. Math.random() su dung xorshift128+ cua V8 — xac dinh, va du khong de du doan, khong bao gio nen dung cho: session token, CSRF token, khoa ma hoa, nonce, ma OTP hoac bat ky gia tri nhay cam bao mat nao. crypto.getRandomValues(new Uint8Array(32)) tao 32 byte dau ra CSPRNG — cung chat luong nhu entropy pool cua he dieu hanh. Trong Node.js: crypto.randomBytes(32). De tao ID ngau nhien: crypto.randomUUID() (co trong trinh duyet va Node.js 14.17+). Quy tac: bat ky gia tri nao phai khong the du doan boi ke tan cong phai su dung crypto.getRandomValues() hoac tuong duong.',
    options: [
      'Chung tao ket qua giong nhau — su khac biet chi la hieu suat',
      'crypto.getRandomValues() su dung trinh tao so gia ngau nhien an toan mat ma (CSPRNG) cua he dieu hanh — phu hop cho khoa, token, nonce va IV. Math.random() su dung thuat toan xac dinh co the du doan neu biet seed — khong bao gio su dung cho muc dich bao mat.',
      'Math.random() an toan hon vi no nhanh hon va kho du doan hon',
      'crypto.getRandomValues() chi co trong Node.js, khong phai trinh duyet',
    ],
  },
  'sec-035': {
    question:
      'Thiet ke Content Security Policy cho ung dung Next.js 15 su dung script noi tuyen (Next.js runtime), font ben ngoai (Google Fonts), phan tich (Plausible) va iframe thanh toan (Stripe).',
    answer:
      'Su dung nonce cho script noi tuyen (Next.js middleware tao nonce moi yeu cau), strict-dynamic de cho phep script duoc Next.js tai, danh sach cho phep cu the cho origin ben ngoai, va frame-src/child-src cho iframe Stripe.',
    explanation:
      'CSP cho stack nay: Content-Security-Policy: default-src \'self\'; script-src \'nonce-{REQUEST_NONCE}\' \'strict-dynamic\' https: \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com; font-src \'self\' https://fonts.gstatic.com; img-src \'self\' data: https:; connect-src \'self\' https://plausible.io; frame-src https://js.stripe.com https://hooks.stripe.com; object-src \'none\'; base-uri \'self\'; form-action \'self\'. Quyet dinh chinh: (1) Nonce + strict-dynamic: nonce cho phep script noi tuyen cua Next.js, strict-dynamic truyen tin cay cho script duoc tai dong ma khong can unsafe-inline. (2) \'unsafe-inline\' trong script-src bi bo qua boi trinh duyet ho tro nonce/strict-dynamic — chi co cho fallback legacy. (3) frame-src: chi domain Stripe cho iframe thanh toan. (4) connect-src: danh sach trang Plausible cho beacon phan tich. Thiet lap trong next.config.js headers() voi nonce duoc tao moi yeu cau trong middleware.',
  },
}
