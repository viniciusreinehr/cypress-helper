export default interface Audit {
  lhr: Lhr
  artifacts: Artifacts
  report: string
}

interface Artifacts {
  fetchTime: Date
  LighthouseRunWarnings: unknown[]
  HostFormFactor: string
  HostUserAgent: string
  NetworkUserAgent: string
  BenchmarkIndex: number
  WebAppManifest: WebAppManifest
  InstallabilityErrors: InstallabilityErrors
  Stacks: Stack[]
  traces: Traces
  devtoolsLogs: DevtoolsLogs
  settings: Settings
  URL: URL
  Timing: TimingElement[]
  PageLoadError: null
  CSSUsage: CSSUsage
  JsUsage: { [key: string]: JSUsage[] }
  ViewportDimensions: ViewportDimensions
  ConsoleMessages: ConsoleMessage[]
  AnchorElements: AnchorElement[]
  ImageElements: ImageElement[]
  LinkElements: LinkElement[]
  MetaElements: MetaElement[]
  ScriptElements: ScriptElement[]
  MainDocumentContent: string
  GatherContext: GatherContext
  GlobalListeners: GlobalListener[]
  AppCacheManifest: null
  Doctype: Doctype
  DOMStats: DOMStats
  OptimizedImages: unknown[]
  PasswordInputsWithPreventedPaste: unknown[]
  ResponseCompression: unknown[]
  TagsBlockingFirstPaint: unknown[]
  FontSize: FontSize
  EmbeddedContent: unknown[]
  RobotsTxt: RobotsTxt
  TapTargets: TapTarget[]
  Accessibility: Accessibility
  TraceElements: TraceElement[]
  InspectorIssues: InspectorIssues
  SourceMaps: unknown[]
  FullPageScreenshot: FullPageScreenshot
  ServiceWorker: ServiceWorker
  HTTPRedirect: HTTPRedirect
}

interface Accessibility {
  violations: Incomplete[]
  incomplete: Incomplete[]
  notApplicable: NotApplicable[]
  version: string
}

interface Incomplete {
  id: string
  impact: string
  tags: string[]
  nodes: IncompleteNode[]
}

interface IncompleteNode {
  target: string[]
  failureSummary: string
  node: Depth
}

interface Depth {
  lhId: string
  devtoolsNodePath: string
  selector: string
  boundingRect: BoundingRect
  snippet: string
  nodeLabel: string
  max?: number
}

interface BoundingRect {
  top: number
  bottom: number
  left: number
  right: number
  width: number
  height: number
}

interface NotApplicable {
  id: string
}

interface AnchorElement {
  href: string
  rawHref: string
  onclick: string
  role: Role
  name: string
  text: string
  rel: string
  target: Target
  node: Depth
  listeners: Listener[]
}

interface Listener {
  type: string
}

enum Role {
  Button = 'button',
  Empty = '',
  Menuitem = 'menuitem',
}

enum Target {
  Blank = '_blank',
  Empty = '',
  Top = '_top',
}

interface CSSUsage {
  rules: Rule[]
  stylesheets: Stylesheet[]
}

interface Rule {
  styleSheetId: string
  startOffset: number
  endOffset: number
  used: boolean
}

interface Stylesheet {
  header: Header
  content: string
}

interface Header {
  styleSheetId: string
  frameId: FrameID
  sourceURL: string
  origin: Origin
  title: string
  ownerNode: number
  disabled: boolean
  isInline: boolean
  isMutable: boolean
  isConstructed: boolean
  startLine: number
  startColumn: number
  length: number
  endLine: number
  endColumn: number
}

enum FrameID {
  A94780Bc3Adaf3A9F5E93751D4104E7C = 'A94780BC3ADAF3A9F5E93751D4104E7C',
  Ac643263714Ab315D940F3C24Ffe8F1A = 'AC643263714AB315D940F3C24FFE8F1A',
  Bffd27B5628494129917C4Edba8Cb6F9 = 'BFFD27B5628494129917C4EDBA8CB6F9',
  C088E43C4Ca3816Da8D8Ea98Eac79595 = 'C088E43C4CA3816DA8D8EA98EAC79595',
  D23Cfdbc063De2C2Db4Cdfccfaf1469B = 'D23CFDBC063DE2C2DB4CDFCCFAF1469B',
  D859A9B91Ce4B2D1F886147Fd1Df926E = 'D859A9B91CE4B2D1F886147FD1DF926E',
  Empty = '',
  The40967593C6Ab570B6E0E45012F8B19Fe = '40967593C6AB570B6E0E45012F8B19FE',
  The7B04A1Ec14F605B5922738126Bf65F86 = '7B04A1EC14F605B5922738126BF65F86',
  The7E969Eccfb1E22Cf3D6C2080D5Ddc1Da = '7E969ECCFB1E22CF3D6C2080D5DDC1DA',
  The81E7F781B266641Ed446475346Debb60 = '81E7F781B266641ED446475346DEBB60',
  The8Ef9745Eb0966B46C7Fa05F99Ca1Cd7D = '8EF9745EB0966B46C7FA05F99CA1CD7D',
}

enum Origin {
  Regular = 'regular',
}

interface ConsoleMessage {
  eventType: string
  source: string
  level: string
  text: string
  stackTrace: ConsoleMessageStackTrace
  timestamp: number
  url: string
  lineNumber: number
  columnNumber: number
}

interface ConsoleMessageStackTrace {
  callFrames: CallFrame[]
}

interface CallFrame {
  functionName: string
  scriptId: string
  url: string
  lineNumber: number
  columnNumber: number
}

interface DOMStats {
  depth: Depth
  width: Depth
  totalBodyElements: number
}

interface Doctype {
  name: string
  publicId: string
  systemId: string
}

interface FontSize {
  analyzedFailingNodesData: unknown[]
  analyzedFailingTextLength: number
  failingTextLength: number
  totalTextLength: number
}

interface FullPageScreenshot {
  screenshot: Screenshot
  nodes: { [key: string]: BoundingRect }
}

interface Screenshot {
  data: string
  width: number
  height: number
}

interface GatherContext {
  gatherMode: string
}

interface GlobalListener {
  type: GlobalListenerType
  scriptId: string
  lineNumber: number
  columnNumber: number
}

enum GlobalListenerType {
  Beforeunload = 'beforeunload',
  DOMContentLoaded = 'DOMContentLoaded',
  Error = 'error',
  Image = 'image',
  Load = 'load',
  Pagehide = 'pagehide',
  Pageshow = 'pageshow',
  Readystatechange = 'readystatechange',
  Text = 'text',
  Unload = 'unload',
  Visibilitychange = 'visibilitychange',
  Webkitvisibilitychange = 'webkitvisibilitychange',
}

interface HTTPRedirect {
  value: boolean
}

interface ImageElement {
  src: string
  srcset: string
  displayedWidth: number
  displayedHeight: number
  clientRect: ClientRect
  attributeWidth: null
  attributeHeight: null
  naturalDimensions: NaturalDimensions
  computedStyles: ComputedStyles
  isCss: boolean
  isPicture: boolean
  loading?: Ing
  isInShadowDOM: boolean
  node: Depth
  mimeType: string
  cssEffectiveRules?: CSSEffectiveRules
}

interface ClientRect {
  top: number
  bottom: number
  left: number
  right: number
}

interface ComputedStyles {
  position: Position
  objectFit: ObjectFit
  imageRendering: Ing
}

enum Ing {
  Auto = 'auto',
}

enum ObjectFit {
  Empty = '',
  Fill = 'fill',
}

enum Position {
  Static = 'static',
}

interface CSSEffectiveRules {
  width: Height | null
  height: Height | null
  aspectRatio: null
}

enum Height {
  The24Px = '24px',
  The48Px = '48px',
}

interface NaturalDimensions {
  width: number
  height: number
}

interface InspectorIssues {
  mixedContent: unknown[]
  sameSiteCookies: unknown[]
  blockedByResponse: unknown[]
  heavyAds: unknown[]
  contentSecurityPolicy: unknown[]
}

interface InstallabilityErrors {
  errors: unknown[]
}

interface JSUsage {
  scriptId: string
  url: string
  functions: IFunction[]
}

interface IFunction {
  functionName: string
  ranges: Range[]
  isBlockCoverage: boolean
}

interface Range {
  startOffset: number
  endOffset: number
  count: number
}

interface LinkElement {
  rel: string
  href: string
  hreflang: string
  as: string
  crossOrigin: null | string
  hrefRaw: string
  source: SourceEnum
  node: Depth
}

enum SourceEnum {
  Body = 'body',
  Head = 'head',
}

interface MetaElement {
  name: string
  content: string
  charset?: string
  node: Depth
}

interface RobotsTxt {
  status: null
  content: null
}

interface ScriptElement {
  type: null | string
  src: null | string
  id: null
  async: boolean
  defer: boolean
  source: SourceEnum
  content: string
  requestId: string
  node: Depth
}

interface ServiceWorker {
  versions: unknown[]
  registrations: unknown[]
}

interface Stack {
  detector: string
  id: string
  name: string
}

interface TapTarget {
  clientRects: BoundingRect[]
  href: string
  node: Depth
}

interface TimingElement {
  startTime: number
  name: string
  duration?: number
  entryType?: EntryType
  timingType?: string
}

enum EntryType {
  Measure = 'measure',
}

interface TraceElement {
  traceEventType: string
  node: Depth
  nodeId: number
  score?: number
  animations?: Animation[]
}

interface Animation {
  name: string
  failureReasonsMask: number
  unsupportedProperties: string[]
}

interface URL {
  requestedUrl: string
  finalUrl: string
}

interface ViewportDimensions {
  innerWidth: number
  innerHeight: number
  outerWidth: number
  outerHeight: number
  devicePixelRatio: number
}

interface WebAppManifest {
  raw: string
  value: WebAppManifestValue
  url: string
}

interface WebAppManifestValue {
  name: NameClass
  short_name: NameClass
  start_url: StartURL
  display: Display
  orientation: BackgroundColor
  icons: Icons
  related_applications: RelatedApplications
  prefer_related_applications: BackgroundColor
  theme_color: BackgroundColor
  background_color: BackgroundColor
}

type BackgroundColor = string | number | unknown;

interface Display {
  raw: DisplayRaw
  value: string
}

interface DisplayRaw {
  name: string
  short_name: string
  related_applications: RawElement[]
}

interface RawElement {
  id: string
  url: string
  platform: string
}

interface Icons {
  value: unknown[]
}

interface NameClass {
  raw: string
  value: string
}

interface RelatedApplications {
  raw: RawElement[]
  value: ValueElement[]
}

interface ValueElement {
  raw: RawElement
  value: ValueValue
}

interface ValueValue {
  platform: NameClass
  id: NameClass
  url: NameClass
}

interface StartURL {
  value: string
}

interface DevtoolsLogs {
  defaultPass: DefaultPassElement[]
  offlinePass: OfflinePass[]
  redirectPass: RedirectPass[]
}

interface DefaultPassElement {
  method: DefaultPassMethod
  params: DefaultPassParams
}

enum DefaultPassMethod {
  NetworkDataReceived = 'Network.dataReceived',
  NetworkLoadingFailed = 'Network.loadingFailed',
  NetworkLoadingFinished = 'Network.loadingFinished',
  NetworkRequestServedFromCache = 'Network.requestServedFromCache',
  NetworkRequestWillBeSent = 'Network.requestWillBeSent',
  NetworkRequestWillBeSentExtraInfo = 'Network.requestWillBeSentExtraInfo',
  NetworkResourceChangedPriority = 'Network.resourceChangedPriority',
  NetworkResponseReceived = 'Network.responseReceived',
  NetworkResponseReceivedExtraInfo = 'Network.responseReceivedExtraInfo',
  PageDOMContentEventFired = 'Page.domContentEventFired',
  PageFrameNavigated = 'Page.frameNavigated',
  PageFrameResized = 'Page.frameResized',
  PageFrameStartedLoading = 'Page.frameStartedLoading',
  PageFrameStoppedLoading = 'Page.frameStoppedLoading',
  PageLifecycleEvent = 'Page.lifecycleEvent',
  PageLoadEventFired = 'Page.loadEventFired',
  PageNavigatedWithinDocument = 'Page.navigatedWithinDocument',
}

interface DefaultPassParams {
  frameId?: FrameID
  loaderId?: PurpleLoaderID
  name?: string
  timestamp?: number
  requestId?: string
  documentURL?: string
  request?: ParamsRequest
  wallTime?: number
  initiator?: PurpleInitiator
  type?: ParamsType
  hasUserGesture?: boolean
  associatedCookies?: AssociatedCooky[]
  headers?: ParamsHeaders
  blockedCookies?: unknown[]
  resourceIPAddressSpace?: IPAddressSpace
  headersText?: string
  response?: Response
  frame?: ParamsFrame
  dataLength?: number
  encodedDataLength?: number
  clientSecurityState?: ClientSecurityState
  shouldReportCorbBlocking?: boolean
  newPriority?: Rity
  url?: string
}

interface AssociatedCooky {
  blockedReasons: string[]
  cookie: Cookie
}

interface Cookie {
  name: NameEnum
  value: string
  domain: Domain
  path: Path
  expires: number
  size: number
  httpOnly: boolean
  secure: boolean
  session: boolean
  sameSite?: SameSite
  priority: Priority
  sameParty: boolean
  sourceScheme: SecureContextType
  sourcePort: number
}

enum Domain {
  GoogleCOMBr = '.google.com.br',
}

enum NameEnum {
  Nid = 'NID',
  Ogpc = 'OGPC',
  The1PJar = '1P_JAR',
}

enum Path {
  Empty = '/',
}

enum Priority {
  Medium = 'Medium',
}

enum SameSite {
  None = 'None',
}

enum SecureContextType {
  NonSecure = 'NonSecure',
  Secure = 'Secure',
}

interface ClientSecurityState {
  initiatorIsSecureContext: boolean
  initiatorIPAddressSpace: IPAddressSpace
  privateNetworkRequestPolicy: PrivateNetworkRequestPolicy
}

enum IPAddressSpace {
  Local = 'Local',
}

enum PrivateNetworkRequestPolicy {
  Allow = 'Allow',
}

interface ParamsFrame {
  id: FrameID
  loaderId: string
  url: string
  domainAndRegistry: string
  securityOrigin: string
  mimeType: string
  adFrameType: AdFrameType
  secureContextType: SecureContextType
  crossOriginIsolatedContextType: string
  gatedAPIFeatures: unknown[]
}

enum AdFrameType {
  CrossSite = 'cross-site',
  None = 'none',
  SameOrigin = 'same-origin',
  SameSite = 'same-site',
}

interface ParamsHeaders {
  Host?: Host
  Connection?: Connection
  'Upgrade-Insecure-Requests'?: string
  'User-Agent'?: string
  Accept?: string
  'Sec-Fetch-Site'?: AdFrameType
  'Sec-Fetch-Mode'?: SECFetchMode
  'Sec-Fetch-User'?: string
  'Sec-Fetch-Dest'?: SECFetchDest
  'Accept-Encoding'?: AcceptEncoding
  'Accept-Language'?: AcceptLanguage
  Cookie?: string
  'content-type'?: string
  'strict-transport-security'?: string
  p3p?: string
  'content-encoding'?: ContentEncoding
  date?: string
  server?: Server
  'cache-control'?: CacheControl
  'x-xss-protection'?: string
  expires?: string
  'alt-svc'?: string
  'Set-Cookie'?: string
  Vary?: Vary
  'Keep-Alive'?: KeepAlive
  'Transfer-Encoding'?: TransferEncoding
  Referer?: string
  'Content-Length'?: string
  'Content-Type'?: string
  Origin?: string
  'accept-ranges'?: AcceptRanges
  'cross-origin-resource-policy'?: CrossOriginResourcePolicy
  'last-modified'?: string
  'x-content-type-options'?: XContentTypeOptions
  age?: string
  'Content-Encoding'?: ContentEncoding
  'access-control-allow-origin'?: string
  'timing-allow-origin'?: string
  version?: string
  'content-disposition'?: string
  'Proxy-Connection'?: Connection
  Location?: string
}

enum AcceptEncoding {
  GzipDeflate = 'gzip, deflate',
  GzipDeflateBr = 'gzip, deflate, br',
}

enum AcceptLanguage {
  PtBR = 'pt-BR',
}

enum Connection {
  KeepAlive = 'keep-alive',
}

enum ContentEncoding {
  Gzip = 'gzip',
}

enum Host {
  AdserviceGoogleCOMBr = 'adservice.google.com.br',
  ApisGoogleCOM = 'apis.google.com',
  FontsGstaticCOM = 'fonts.gstatic.com',
  WWWGoogleCOM = 'www.google.com',
  WWWGoogleCOMBr = 'www.google.com.br',
  WWWGstaticCOM = 'www.gstatic.com',
}

enum KeepAlive {
  Timeout5 = 'timeout=5',
}

enum SECFetchDest {
  Document = 'document',
  Empty = 'empty',
  Font = 'font',
  Image = 'image',
  Script = 'script',
  Style = 'style',
}

enum SECFetchMode {
  Cors = 'cors',
  Navigate = 'navigate',
  NoCors = 'no-cors',
}

enum TransferEncoding {
  Chunked = 'chunked',
}

enum Vary {
  AcceptAcceptEncoding = 'Accept, Accept-Encoding',
  AcceptEncoding = 'Accept-Encoding',
  AcceptEncodingOrigin = 'Accept-Encoding, Origin',
}

enum AcceptRanges {
  Bytes = 'bytes',
}

enum CacheControl {
  NoCacheNoStoreMustRevalidate = 'no-cache, no-store, must-revalidate',
  Private = 'private',
  PrivateMaxAge15 = 'private, max-age=15',
  PrivateMaxAge31536000 = 'private, max-age=31536000',
  PublicMaxAge31536000 = 'public, max-age=31536000',
}

enum CrossOriginResourcePolicy {
  CrossOrigin = 'cross-origin',
}

enum Server {
  Cafe = 'cafe',
  Gws = 'gws',
  Sffe = 'sffe',
}

enum XContentTypeOptions {
  Nosniff = 'nosniff',
}

interface PurpleInitiator {
  type: InitiatorType
  url?: string
  lineNumber?: number
  columnNumber?: number
  stack?: PurpleStack
}

interface PurpleStack {
  callFrames: CallFrame[]
  parent?: ParentParent
}

interface ParentParent {
  description: Description
  callFrames: CallFrame[]
  parent?: ParentParent
  parentId?: ParentID
}

enum Description {
  Image = 'Image',
  Load = 'load',
  PromiseThen = 'Promise.then',
  SetTimeout = 'setTimeout',
}

interface ParentID {
  id: string
  debuggerId: string
}

enum InitiatorType {
  Other = 'other',
  Parser = 'parser',
  Script = 'script',
}

enum PurpleLoaderID {
  C9E461Ce222Ee2F91F707587F869D974 = 'C9E461CE222EE2F91F707587F869D974',
  The9Df7010093Dc38Ee17D1D5265Ace4659 = '9DF7010093DC38EE17D1D5265ACE4659',
}

enum Rity {
  High = 'High',
  Low = 'Low',
  VeryHigh = 'VeryHigh',
  VeryLow = 'VeryLow',
}

interface ParamsRequest {
  url: string
  method: RequestMethodEnum
  headers: RequestHeaders
  mixedContentType: AdFrameType
  initialPriority: Rity
  referrerPolicy: ReferrerPolicy
  hasPostData?: boolean
  postDataEntries?: PostDataEntry[]
}

interface RequestHeaders {
  'Upgrade-Insecure-Requests'?: string
  'User-Agent'?: string
  Origin?: string
  Referer?: string
  'Content-Type'?: string
}

enum RequestMethodEnum {
  Get = 'GET',
  Post = 'POST',
}

interface PostDataEntry {
  bytes: string
}

enum ReferrerPolicy {
  Origin = 'origin',
  StrictOriginWhenCrossOrigin = 'strict-origin-when-cross-origin',
}

interface Response {
  url: string
  status: number
  statusText: StatusText
  headers: ResponseHeaders
  headersText?: string
  mimeType: string
  requestHeaders?: ResponseRequestHeaders
  requestHeadersText?: string
  connectionReused: boolean
  connectionId: number
  remoteIPAddress: RemoteIPAddress
  remotePort: number
  fromDiskCache: boolean
  fromServiceWorker: boolean
  fromPrefetchCache: boolean
  encodedDataLength: number
  timing: { [key: string]: number }
  responseTime: number
  protocol: ResponseProtocol
  securityState: SecurityState
  securityDetails: SecurityDetails
}

interface ResponseHeaders {
  'content-type': string
  'strict-transport-security'?: string
  p3p?: string
  'content-encoding'?: ContentEncoding
  date: string
  server: Server
  'cache-control'?: CacheControl
  'x-xss-protection': string
  expires?: string
  'alt-svc': string
  'Set-Cookie'?: string
  Vary?: Vary
  Connection: Connection
  'Keep-Alive': KeepAlive
  'Transfer-Encoding'?: TransferEncoding
  'x-content-type-options'?: XContentTypeOptions
  'last-modified'?: string
  age?: string
  'cross-origin-resource-policy'?: CrossOriginResourcePolicy
  'accept-ranges'?: AcceptRanges
  'Content-Encoding'?: ContentEncoding
  'access-control-allow-origin'?: string
  'timing-allow-origin'?: string
  'content-disposition'?: string
  version?: string
}

enum ResponseProtocol {
  HTTP11 = 'http/1.1',
}

enum RemoteIPAddress {
  The127001 = '127.0.0.1',
}

interface ResponseRequestHeaders {
  Host: Host
  Connection: Connection
  'Upgrade-Insecure-Requests'?: string
  'User-Agent': string
  Accept: string
  'Sec-Fetch-Site': AdFrameType
  'Sec-Fetch-Mode': SECFetchMode
  'Sec-Fetch-User'?: string
  'Sec-Fetch-Dest': SECFetchDest
  'Accept-Encoding': AcceptEncoding
  'Accept-Language': AcceptLanguage
  Cookie: string
  Referer?: string
  'Content-Type'?: string
  'Content-Length'?: string
}

interface SecurityDetails {
  protocol: SecurityDetailsProtocol
  keyExchange: string
  keyExchangeGroup: KeyExchangeGroup
  cipher: Cipher
  certificateId: number
  subjectName: Host
  sanList: Host[]
  issuer: Issuer
  validFrom: number
  validTo: number
  signedCertificateTimestampList: unknown[]
  certificateTransparencyCompliance: CertificateTransparencyCompliance
}

enum CertificateTransparencyCompliance {
  Unknown = 'unknown',
}

enum Cipher {
  Chacha20Poly1305 = 'CHACHA20_POLY1305',
}

enum Issuer {
  CypressProxyCA = 'CypressProxyCA',
}

enum KeyExchangeGroup {
  X25519 = 'X25519',
}

enum SecurityDetailsProtocol {
  TLS13 = 'TLS 1.3',
}

enum SecurityState {
  Insecure = 'insecure',
}

enum StatusText {
  NoContent = 'No Content',
  Ok = 'OK',
}

enum ParamsType {
  Document = 'Document',
  Font = 'Font',
  Image = 'Image',
  Navigation = 'Navigation',
  Ping = 'Ping',
  Script = 'Script',
  Stylesheet = 'Stylesheet',
  Xhr = 'XHR',
}

interface OfflinePass {
  method: DefaultPassMethod
  params: OfflinePassParams
}

interface OfflinePassParams {
  frameId?: FrameID
  loaderId?: FluffyLoaderID
  name?: string
  timestamp?: number
  requestId?: string
  documentURL?: string
  request?: ParamsRequest
  wallTime?: number
  initiator?: PurpleInitiator
  type?: ParamsType
  hasUserGesture?: boolean
  associatedCookies?: AssociatedCooky[]
  headers?: ParamsHeaders
  blockedCookies?: unknown[]
  resourceIPAddressSpace?: IPAddressSpace
  headersText?: string
  response?: Response
  frame?: ParamsFrame
  dataLength?: number
  encodedDataLength?: number
  shouldReportCorbBlocking?: boolean
  clientSecurityState?: ClientSecurityState
  url?: string
}

enum FluffyLoaderID {
  Ad854B67Ca8153817355073B56482B81 = 'AD854B67CA8153817355073B56482B81',
  The8E351Ed4Fea6Da4C304619900Be6E123 = '8E351ED4FEA6DA4C304619900BE6E123',
}

interface RedirectPass {
  method: DefaultPassMethod
  params: RedirectPassParams
}

interface RedirectPassParams {
  frameId?: FrameID
  loaderId?: TentacledLoaderID
  name?: string
  timestamp?: number
  requestId?: string
  documentURL?: string
  request?: ParamsRequest
  wallTime?: number
  initiator?: FluffyInitiator
  type?: ParamsType
  hasUserGesture?: boolean
  associatedCookies?: AssociatedCooky[]
  headers?: ParamsHeaders
  blockedCookies?: BlockedCooky[]
  resourceIPAddressSpace?: IPAddressSpace
  headersText?: string
  redirectResponse?: RedirectResponse
  response?: Response
  frame?: ParamsFrame
  dataLength?: number
  encodedDataLength?: number
  errorText?: string
  canceled?: boolean
  blockedReason?: BlockedReason
  shouldReportCorbBlocking?: boolean
  clientSecurityState?: ClientSecurityState
  url?: string
}

interface BlockedCooky {
  blockedReasons: string[]
  cookieLine: string
  cookie: Cookie
}

enum BlockedReason {
  Inspector = 'inspector',
}

interface FluffyInitiator {
  type: InitiatorType
  url?: string
  lineNumber?: number
  columnNumber?: number
  stack?: FluffyStack
}

interface FluffyStack {
  callFrames: CallFrame[]
  parent?: PurpleParent
}

interface PurpleParent {
  description: Description
  callFrames: CallFrame[]
  parent?: ParentParent
}

enum TentacledLoaderID {
  Bd65F53559A9E1Fcc7Ac1452E2038811 = 'BD65F53559A9E1FCC7AC1452E2038811',
  The257B4Cd05C2A20718Cf3Af46048132Fe = '257B4CD05C2A20718CF3AF46048132FE',
}

interface RedirectResponse {
  url: string
  status: number
  statusText: string
  headers: RedirectResponseHeaders
  headersText: string
  mimeType: string
  requestHeaders: RedirectResponseRequestHeaders
  requestHeadersText: string
  connectionReused: boolean
  connectionId: number
  remoteIPAddress: RemoteIPAddress
  remotePort: number
  fromDiskCache: boolean
  fromServiceWorker: boolean
  fromPrefetchCache: boolean
  encodedDataLength: number
  timing: { [key: string]: number }
  responseTime: number
  protocol: ResponseProtocol
  securityState: SecurityState
}

interface RedirectResponseHeaders {
  Location: string
  'cache-control': CacheControl
  'Content-Type': string
  date: string
  server: Server
  'x-xss-protection': string
  'Set-Cookie': string
  Vary: Vary
  'Content-Length': string
  Connection: Connection
  'Keep-Alive': KeepAlive
}

interface RedirectResponseRequestHeaders {
  Host: Host
  'Proxy-Connection': Connection
  'Upgrade-Insecure-Requests': string
  'User-Agent': string
  Accept: string
  'Accept-Encoding': AcceptEncoding
  'Accept-Language': AcceptLanguage
  Cookie: string
}

interface Settings {
  output: string
  maxWaitForFcp: number
  maxWaitForLoad: number
  formFactor: string
  throttling: Throttling
  throttlingMethod: string
  screenEmulation: ScreenEmulation
  emulatedUserAgent: string
  auditMode: boolean
  gatherMode: boolean
  disableStorageReset: boolean
  channel: Channel
  budgets: null
  locale: string
  blockedUrlPatterns: null
  additionalTraceCategories: null
  extraHeaders: null
  precomputedLanternData: null
  onlyAudits: null
  onlyCategories: string[]
  skipAudits: null
}

enum Channel {
  Node = 'node',
}

interface ScreenEmulation {
  mobile: boolean
  width: number
  height: number
  deviceScaleFactor: number
  disabled: boolean
}

interface Throttling {
  rttMs: number
  throughputKbps: number
  requestLatencyMs: number
  downloadThroughputKbps: number
  uploadThroughputKbps: number
  cpuSlowdownMultiplier: number
}

interface Traces {
  defaultPass: TracesDefaultPass
}

interface TracesDefaultPass {
  traceEvents: TraceEvent[]
}

interface TraceEvent {
  args: Args
  cat: Cat
  name: string
  ph: Bp
  pid: number
  tid: number
  ts: number
  dur?: number
  tdur?: number
  tts?: number
  s?: S
  id?: number | string
  bp?: Bp
  id2?: Id2
  scope?: Cat
}

interface Args {
  name?: string
  uptime?: string
  data?: Data
  frame?: FrameID
  url?: string
  layerTreeId?: number
  IsMainFrame?: boolean
  fileName?: string
  frameId?: number
  length?: number
  beginData?: BeginData
  endData?: EndData
  elementCount?: number
  microtask_count?: number
  layerId?: number
  tileData?: TileData
  afterUserInput?: number
  LazyPixelRef?: number
  pixelRefId?: number
  imageType?: string
  snapshot?: SnapshotClass | string
  number?: number
  sort_index?: number
  labels?: string
}

interface BeginData {
  frame: FrameID
  startLine?: number
  url?: string
  stackTrace?: StackTraceElement[]
  dirtyObjects?: number
  partialLayout?: boolean
  totalObjects?: number
}

interface StackTraceElement {
  columnNumber: number
  functionName: string
  lineNumber: number
  scriptId: number
  url: string
}

interface Data {
  frameTreeNodeId?: number
  frames?: FrameElement[]
  persistentIds?: boolean
  type?: GlobalListenerType
  documentLoaderURL?: string
  isLoadingMainFrame?: boolean
  navigationId?: string
  requestId?: string
  frame?: FrameID
  name?: string
  processId?: number
  url?: string
  needsBeginFrame?: number
  priority?: Rity
  requestMethod?: RequestMethodEnum
  encodedDataLength?: number
  fromCache?: boolean
  fromServiceWorker?: boolean
  mimeType?: string
  responseTime?: number
  statusCode?: number
  timing?: { [key: string]: number }
  isMainFrame?: boolean
  page?: FrameID
  columnNumber?: number
  lineNumber?: number
  notStreamedReason?: NotStreamedReason
  streamed?: boolean
  frameId?: number
  renderBlocking?: RenderBlocking
  stackTrace?: StackTraceElement[]
  frameID?: FrameID
  height?: number
  width?: number
  x?: number
  y?: number
  documents?: number
  jsEventListeners?: number
  jsHeapSizeUsed?: number
  nodes?: number
  decodedBodyLength?: number
  didFail?: boolean
  finishTime?: number
  functionName?: FunctionName
  scriptId?: string
  singleShot?: boolean
  timeout?: number
  timerId?: number
  layerTreeId?: number
  clip?: number[]
  layerId?: number
  nodeId?: number
  dom_node_id?: number
  is_aggregation_text?: boolean
  is_in_main_frame?: boolean
  is_svg?: boolean
  object_name?: string
  rect?: number[]
  viewport_rect?: number[]
  DOMNodeId?: number
  candidateIndex?: number
  frame_height?: number
  frame_width?: number
  frame_x?: number
  frame_y?: number
  isOOPIF?: boolean
  root_height?: number
  root_width?: number
  root_x?: number
  root_y?: number
  size?: number
  cumulative_score?: number
  frame_max_distance?: number
  had_recent_input?: boolean
  impacted_nodes?: ImpactedNode[]
  is_main_frame?: boolean
  last_input_timestamp?: number
  overall_max_distance?: number
  region_rects?: Array<number[]>
  score?: number
  weighted_score_delta?: number
  srcHeight?: number
  srcWidth?: number
  image_url?: string
  is_image?: boolean
  is_image_loaded?: boolean
  imageUrl?: string
  styleSheetUrl?: string
  readyState?: number
  id?: string
  nodeName?: string
  state?: string
  compositeFailed?: number
  unsupportedProperties?: string[]
}

interface FrameElement {
  frame: FrameID
  name: string
  processId: number
  url: string
}

enum FunctionName {
  AOnerrorAOnloadAOnabort = 'a.onerror.a.onload.a.onabort',
  B = 'b',
  BPort1Onmessage = 'b.port1.onmessage',
  C = 'c',
  D = 'd',
  EOnload = 'e.onload',
  Empty = '',
  L = 'l',
  QFkWb = 'q_Fk.wb',
  QSfa = 'q_Sfa',
  T = 't',
}

interface ImpactedNode {
  new_rect: number[]
  node_id: number
  old_rect: number[]
}

enum NotStreamedReason {
  InlineScript = 'inline script',
}

enum RenderBlocking {
  DynamicallyInjectedNonBlocking = 'dynamically_injected_non_blocking',
  NonBlocking = 'non_blocking',
}

interface EndData {
  endLine?: number
  layoutRoots?: LayoutRoot[]
  nodeId?: number
  nodeName?: string
  rectilinear?: boolean
  x?: number
  y?: number
  state?: string
}

interface LayoutRoot {
  depth: number
  nodeId: number
  quads: Array<number[]>
}

interface SnapshotClass {
  documentLoaderURL: string
  frame: TileID
  isLoadingMainFrame: boolean
}

interface TileID {
  id_ref: string
}

interface TileData {
  layerId: number
  sourceFrameNumber: number
  tileId: TileID
  tileResolution: TileResolution
}

enum TileResolution {
  HighResolution = 'HIGH_RESOLUTION',
}

enum Bp {
  B = 'B',
  BpB = 'b',
  BpN = 'n',
  D = 'D',
  E = 'e',
  F = 'f',
  I = 'I',
  M = 'M',
  N = 'N',
  O = 'O',
  R = 'R',
  S = 's',
  X = 'X',
}

enum Cat {
  BenchmarkLoading = 'benchmark,loading',
  BlinkAnimationsDevtoolsTimelineBenchmarkRail = 'blink.animations,devtools.timeline,benchmark,rail',
  BlinkDevtoolsTimeline = 'blink,devtools.timeline',
  BlinkLoading = 'blink,loading',
  BlinkUserTiming = 'blink.user_timing',
  BlinkUserTimingRail = 'blink.user_timing,rail',
  CcDisabledByDefaultDevtoolsTimeline = 'cc,disabled-by-default-devtools.timeline',
  DevtoolsTimeline = 'devtools.timeline',
  DevtoolsTimelineRail = 'devtools.timeline,rail',
  DisabledByDefaultDevtoolsScreenshot = 'disabled-by-default-devtools.screenshot',
  DisabledByDefaultDevtoolsTimeline = 'disabled-by-default-devtools.timeline',
  DisabledByDefaultDevtoolsTimelineFrame = 'disabled-by-default-devtools.timeline.frame',
  Loading = 'loading',
  LoadingRailDevtoolsTimeline = 'loading,rail,devtools.timeline',
  Metadata = '__metadata',
  V8 = 'v8',
  V8DevtoolsTimeline = 'v8,devtools.timeline',
  V8DevtoolsTimelineDisabledByDefaultV8Compile = 'v8,devtools.timeline,disabled-by-default-v8.compile',
  V8Execute = 'v8.execute',
}

interface Id2 {
  local: string
}

enum S {
  G = 'g',
  P = 'p',
  T = 't',
}

interface Lhr {
  userAgent: string
  environment: Environment
  lighthouseVersion: string
  fetchTime: Date
  requestedUrl: string
  finalUrl: string
  runWarnings: unknown[]
  audits: Audits
  configSettings: Settings
  categories: Categories
  categoryGroups: CategoryGroups
  timing: TimingClass
  i18n: I18N
  stackPacks: unknown[]
}

export interface Audits {
  'is-on-https': Accesskeys
  'redirects-http': Accesskeys
  'service-worker': Accesskeys
  viewport: Accesskeys
  'first-contentful-paint': BootupTime
  'largest-contentful-paint': CumulativeLayoutShift
  'first-meaningful-paint': BootupTime
  'speed-index': Accesskeys
  'screenshot-thumbnails': Accesskeys
  'final-screenshot': Accesskeys
  'total-blocking-time': Accesskeys
  'max-potential-fid': Accesskeys
  'cumulative-layout-shift': CumulativeLayoutShift
  'errors-in-console': Accesskeys
  'server-response-time': BootupTime
  interactive: CriticalRequestChains
  'user-timings': DOMSize
  'critical-request-chains': CriticalRequestChains
  redirects: Accesskeys
  'installable-manifest': Accesskeys
  'apple-touch-icon': Accesskeys
  'splash-screen': Accesskeys
  'themed-omnibox': Accesskeys
  'maskable-icon': Accesskeys
  'content-width': Accesskeys
  'image-aspect-ratio': Accesskeys
  'image-size-responsive': Accesskeys
  'preload-fonts': Accesskeys
  deprecations: Accesskeys
  'mainthread-work-breakdown': BootupTime
  'bootup-time': BootupTime
  'uses-rel-preload': Accesskeys
  'uses-rel-preconnect': Accesskeys
  'font-display': Accesskeys
  diagnostics: Accesskeys
  'network-requests': Accesskeys
  'network-rtt': Accesskeys
  'network-server-latency': CumulativeLayoutShift
  'main-thread-tasks': Accesskeys
  metrics: CriticalRequestChains
  'performance-budget': Accesskeys
  'timing-budget': Accesskeys
  'resource-summary': Accesskeys
  'third-party-summary': Accesskeys
  'third-party-facades': Accesskeys
  'largest-contentful-paint-element': CumulativeLayoutShift
  'layout-shift-elements': CumulativeLayoutShift
  'long-tasks': Accesskeys
  'no-unload-listeners': Accesskeys
  'non-composited-animations': Accesskeys
  'unsized-images': DOMSize
  'valid-source-maps': Accesskeys
  'preload-lcp-image': Accesskeys
  'csp-xss': Accesskeys
  'full-page-screenshot': Accesskeys
  'script-treemap-data': Accesskeys
  'pwa-cross-browser': Accesskeys
  'pwa-page-transitions': Accesskeys
  'pwa-each-page-has-url': Accesskeys
  accesskeys: Accesskeys
  'aria-allowed-attr': Accesskeys
  'aria-command-name': Accesskeys
  'aria-hidden-body': Accesskeys
  'aria-hidden-focus': Accesskeys
  'aria-input-field-name': Accesskeys
  'aria-meter-name': Accesskeys
  'aria-progressbar-name': Accesskeys
  'aria-required-attr': Accesskeys
  'aria-required-children': Accesskeys
  'aria-required-parent': Accesskeys
  'aria-roles': Accesskeys
  'aria-toggle-field-name': Accesskeys
  'aria-tooltip-name': Accesskeys
  'aria-treeitem-name': Accesskeys
  'aria-valid-attr-value': Accesskeys
  'aria-valid-attr': Accesskeys
  'button-name': Accesskeys
  bypass: Accesskeys
  'color-contrast': Accesskeys
  'definition-list': Accesskeys
  dlitem: Accesskeys
  'document-title': Accesskeys
  'duplicate-id-active': Accesskeys
  'duplicate-id-aria': Accesskeys
  'form-field-multiple-labels': Accesskeys
  'frame-title': Accesskeys
  'heading-order': Accesskeys
  'html-has-lang': Accesskeys
  'html-lang-valid': Accesskeys
  'image-alt': Accesskeys
  'input-image-alt': Accesskeys
  label: Accesskeys
  'link-name': Accesskeys
  list: Accesskeys
  listitem: Accesskeys
  'meta-refresh': Accesskeys
  'meta-viewport': Accesskeys
  'object-alt': Accesskeys
  tabindex: Accesskeys
  'td-headers-attr': Accesskeys
  'th-has-data-cells': Accesskeys
  'valid-lang': Accesskeys
  'video-caption': Accesskeys
  'custom-controls-labels': Accesskeys
  'custom-controls-roles': Accesskeys
  'focus-traps': Accesskeys
  'focusable-controls': Accesskeys
  'interactive-element-affordance': Accesskeys
  'logical-tab-order': Accesskeys
  'managed-focus': Accesskeys
  'offscreen-content-hidden': Accesskeys
  'use-landmarks': DOMSize
  'visual-order-follows-dom': Accesskeys
  'uses-long-cache-ttl': BootupTime
  'total-byte-weight': Accesskeys
  'offscreen-images': Accesskeys
  'render-blocking-resources': Accesskeys
  'unminified-css': DuplicatedJavascript
  'unminified-javascript': CriticalRequestChains
  'unused-css-rules': CriticalRequestChains
  'unused-javascript': CumulativeLayoutShift
  'modern-image-formats': DuplicatedJavascript
  'uses-optimized-images': BootupTime
  'uses-text-compression': Accesskeys
  'uses-responsive-images': Accesskeys
  'efficient-animated-content': DuplicatedJavascript
  'duplicated-javascript': DuplicatedJavascript
  'legacy-javascript': DuplicatedJavascript
  'appcache-manifest': Accesskeys
  doctype: Accesskeys
  charset: Accesskeys
  'dom-size': DOMSize
  'external-anchors-use-rel-noopener': Accesskeys
  'geolocation-on-start': Accesskeys
  'inspector-issues': Accesskeys
  'no-document-write': Accesskeys
  'no-vulnerable-libraries': Accesskeys
  'js-libraries': Accesskeys
  'notification-on-start': Accesskeys
  'password-inputs-can-be-pasted-into': Accesskeys
  'uses-http2': CumulativeLayoutShift
  'uses-passive-event-listeners': Accesskeys
  'meta-description': Accesskeys
  'http-status-code': Accesskeys
  'font-size': Accesskeys
  'link-text': Accesskeys
  'crawlable-anchors': Accesskeys
  'is-crawlable': Accesskeys
  'robots-txt': Accesskeys
  'tap-targets': DOMSize
  hreflang: Accesskeys
  plugins: Accesskeys
  canonical: Accesskeys
  'structured-data': Accesskeys
}

export interface Accesskeys {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: ScoreDisplayMode
  warnings?: unknown[]
  details?: AccesskeysDetails
  displayValue?: string
  numericValue?: number
  numericUnit?: NumericUnit
  explanation?: string
}

export interface AccesskeysDetails {
  type: DebugDataType
  headings?: PurpleHeading[]
  items?: PurpleItem[]
  debugData?: DebugData
  timing?: number
  timestamp?: number
  data?: string
  screenshot?: Screenshot
  nodes?: NodesNode[] | { [key: string]: BoundingRect }
  summary?: Summary
  overallSavingsMs?: number
  overallSavingsBytes?: number
  scale?: number
}

interface DebugData {
  type: DebugDataType
  impact?: string
  tags?: string[]
  manifestUrl?: string
  stacks?: NotApplicable[]
}

enum DebugDataType {
  Debugdata = 'debugdata',
  Filmstrip = 'filmstrip',
  FullPageScreenshot = 'full-page-screenshot',
  Opportunity = 'opportunity',
  Screenshot = 'screenshot',
  Table = 'table',
  TreemapData = 'treemap-data',
}

interface PurpleHeading {
  key: null | string
  itemType?: string
  text?: string
  subItemsHeading?: PurpleSubItemsHeading
  granularity?: number
  displayUnit?: string
  valueType?: string
  label?: string
}

interface PurpleSubItemsHeading {
  key: string
  itemType?: string
}

interface PurpleItem {
  node?: ItemNode
  severity?: Rity
  description?: string
  numRequests?: number
  numScripts?: number
  numStylesheets?: number
  numFonts?: number
  numTasks?: number
  numTasksOver10ms?: number
  numTasksOver25ms?: number
  numTasksOver50ms?: number
  numTasksOver100ms?: number
  numTasksOver500ms?: number
  rtt?: number
  throughput?: number
  maxRtt?: number
  maxServerLatency?: number
  totalByteWeight?: number
  totalTaskTime?: number
  mainDocumentTransferSize?: number
  source?: SourceClass
  selector?: string
  coverage?: string
  fontSize?: string
  url?: string
  displayedAspectRatio?: string
  actualAspectRatio?: string
  doRatiosMatch?: boolean
  elidedUrl?: string
  displayedSize?: string
  actualSize?: string
  actualPixels?: number
  expectedSize?: string
  expectedPixels?: number
  name?: string
  duration?: number
  startTime?: number
  protocol?: ResponseProtocol
  endTime?: number
  finished?: boolean
  transferSize?: number
  resourceSize?: number
  statusCode?: number
  mimeType?: string
  resourceType?: string
  origin?: string
  subItems?: PurpleSubItems
  requestStartTime?: number
  totalBytes?: number
  wastedBytes?: number
  wastedPercent?: number
  label?: string
  requestCount?: number
  timing?: number
  timestamp?: number
  data?: string
  failures?: string[]
  isParseFailure?: boolean
  hasStartUrl?: boolean
  hasIconsAtLeast144px?: boolean
  hasIconsAtLeast512px?: boolean
  fetchesIcon?: boolean
  hasPWADisplayValue?: boolean
  hasBackgroundColor?: boolean
  hasThemeColor?: boolean
  hasShortName?: boolean
  shortNameLength?: boolean
  hasName?: boolean
  hasMaskableIcon?: boolean
  themeColor?: null
  mainThreadTime?: number
  blockingTime?: number
  entity?: Entity
  scriptUrl?: string
}

interface Entity {
  type: string
  text: string
  url: string
}

interface ItemNode {
  type: Channel
  lhId: string
  path: string
  selector: string
  boundingRect: BoundingRect
  snippet: string
  nodeLabel: string
  explanation?: string
}

interface SourceClass {
  type: string
  value?: string
  url?: string
  urlProvider?: string
  line?: number
  column?: number
}

interface PurpleSubItems {
  type: string
  items: FluffyItem[]
}

interface FluffyItem {
  failureReason?: string
  animation?: string
  url?: string
  mainThreadTime?: number
  blockingTime?: number
  transferSize?: number
  error?: string
}

interface NodesNode {
  name: string
  resourceBytes: number
  unusedBytes?: number
}

interface Summary {
  wastedBytes?: number
  wastedMs?: number | number
}

enum NumericUnit {
  Byte = 'byte',
  Millisecond = 'millisecond',
}

enum ScoreDisplayMode {
  Binary = 'binary',
  Informative = 'informative',
  Manual = 'manual',
  NotApplicable = 'notApplicable',
  Numeric = 'numeric',
}

interface BootupTime {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: ScoreDisplayMode
  numericValue: number
  numericUnit: NumericUnit
  displayValue: string
  details?: BootupTimeDetails
  warnings?: unknown[]
}

interface BootupTimeDetails {
  type: DebugDataType
  headings: FluffyHeading[]
  items: TentacledItem[]
  summary?: Summary
  overallSavingsMs?: number
  overallSavingsBytes?: number
}

interface FluffyHeading {
  key: string
  itemType?: string
  text?: string
  granularity?: number
  valueType?: string
  label?: string
}

interface TentacledItem {
  url?: string
  total?: number
  scripting?: number
  scriptParseCompile?: number
  group?: string
  groupLabel?: string
  duration?: number
  responseTime?: number
}

interface CriticalRequestChains {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: ScoreDisplayMode
  displayValue?: string
  details?: CriticalRequestChainsDetails
  numericValue?: number
  numericUnit?: NumericUnit
  warnings?: unknown[]
}

interface CriticalRequestChainsDetails {
  type: string
  chains?: Chains
  longestChain?: LongestChain
  items?: StickyItem[]
  headings?: unknown[]
  overallSavingsMs?: number
  overallSavingsBytes?: number
}

interface Chains {
  '9DF7010093DC38EE17D1D5265ACE4659': The9Df7010093Dc38Ee17D1D5265Ace4659
}

interface The9Df7010093Dc38Ee17D1D5265Ace4659 {
  request: ChildRequest
  children: { [key: string]: Child }
}

interface Child {
  request: ChildRequest
}

interface ChildRequest {
  url: string
  startTime: number
  endTime: number
  responseReceivedTime: number
  transferSize: number
}

interface StickyItem {
  firstContentfulPaint?: number
  firstMeaningfulPaint?: number
  largestContentfulPaint?: number
  interactive?: number
  speedIndex?: number
  totalBlockingTime?: number
  maxPotentialFID?: number
  cumulativeLayoutShift?: number
  cumulativeLayoutShiftMainFrame?: number
  totalCumulativeLayoutShift?: number
  observedTimeOrigin?: number
  observedTimeOriginTs?: number
  observedNavigationStart?: number
  observedNavigationStartTs?: number
  observedFirstPaint?: number
  observedFirstPaintTs?: number
  observedFirstContentfulPaint?: number
  observedFirstContentfulPaintTs?: number
  observedFirstContentfulPaintAllFrames?: number
  observedFirstContentfulPaintAllFramesTs?: number
  observedFirstMeaningfulPaint?: number
  observedFirstMeaningfulPaintTs?: number
  observedLargestContentfulPaint?: number
  observedLargestContentfulPaintTs?: number
  observedLargestContentfulPaintAllFrames?: number
  observedLargestContentfulPaintAllFramesTs?: number
  observedTraceEnd?: number
  observedTraceEndTs?: number
  observedLoad?: number
  observedLoadTs?: number
  observedDomContentLoaded?: number
  observedDomContentLoadedTs?: number
  observedCumulativeLayoutShift?: number
  observedCumulativeLayoutShiftMainFrame?: number
  observedTotalCumulativeLayoutShift?: number
  observedFirstVisualChange?: number
  observedFirstVisualChangeTs?: number
  observedLastVisualChange?: number
  observedLastVisualChangeTs?: number
  observedSpeedIndex?: number
  observedSpeedIndexTs?: number
  lcpInvalidated?: boolean
}

interface LongestChain {
  duration: number
  length: number
  transferSize: number
}

interface CumulativeLayoutShift {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: ScoreDisplayMode
  numericValue?: number
  numericUnit?: string
  displayValue: string
  details?: CumulativeLayoutShiftDetails
}

interface CumulativeLayoutShiftDetails {
  type: DebugDataType
  items: IndigoItem[]
  headings?: TentacledHeading[]
  overallSavingsMs?: number
  overallSavingsBytes?: number
}

interface TentacledHeading {
  key: string
  itemType?: string
  text?: string
  granularity?: number
  valueType?: string
  subItemsHeading?: FluffySubItemsHeading
  label?: string
}

interface FluffySubItemsHeading {
  key: string
  valueType?: string
}

interface IndigoItem {
  cumulativeLayoutShiftMainFrame?: number
  totalCumulativeLayoutShift?: number
  node?: ItemNode
  score?: number
  origin?: string
  serverResponseTime?: number
  url?: string
  totalBytes?: number
  wastedBytes?: number
  wastedPercent?: number
  protocol?: ResponseProtocol
}

interface DOMSize {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: ScoreDisplayMode
  numericValue?: number
  numericUnit?: string
  displayValue?: string
  details?: DOMSizeDetails
}

interface DOMSizeDetails {
  type: DebugDataType
  headings: StickyHeading[]
  items: IndecentItem[]
}

interface StickyHeading {
  key: null | string
  itemType: string
  text: string
  granularity?: number
  subItemsHeading?: PurpleSubItemsHeading
  displayUnit?: string
}

interface IndecentItem {
  statistic?: string
  value?: number
  node?: ItemNode
  url?: string
  name?: string
  startTime?: number
  duration?: number
  timingType?: string
}

interface DuplicatedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: ScoreDisplayMode
  numericValue: number
  numericUnit: NumericUnit
  displayValue: string
  details: DuplicatedJavascriptDetails
  warnings?: unknown[]
}

interface DuplicatedJavascriptDetails {
  type: DebugDataType
  headings: IndigoHeading[]
  items: HilariousItem[]
  overallSavingsMs: number
  overallSavingsBytes: number
}

interface IndigoHeading {
  key: null | string
  valueType: string
  subItemsHeading?: FluffySubItemsHeading
  label: string
}

interface HilariousItem {
  url: string
  wastedBytes: number
  subItems?: FluffySubItems
  totalBytes: number
  wastedPercent?: number
}

interface FluffySubItems {
  type: string
  items: AmbitiousItem[]
}

interface AmbitiousItem {
  signal: string
  location: Location
}

interface Location {
  type: string
  url: string
  line: number
  column: number
  urlProvider: string
}

export interface Categories {
  performance: Performance
  accessibility: AccessibilityClass
  'best-practices': BestPractices
  seo: AccessibilityClass
  pwa: AccessibilityClass
}

interface AccessibilityClass {
  title: string
  description: string
  manualDescription: string
  auditRefs: AccessibilityAuditRef[]
  id: string
  score: number
}

interface AccessibilityAuditRef {
  id: string
  weight: number
  group?: string
}

interface BestPractices {
  title: string
  auditRefs: AccessibilityAuditRef[]
  id: string
  score: number
}

interface Performance {
  title: string
  auditRefs: PerformanceAuditRef[]
  id: string
  score: number
}

interface PerformanceAuditRef {
  id: string
  weight: number
  group?: Group
  acronym?: string
  relevantAudits?: string[]
}

enum Group {
  Budgets = 'budgets',
  Diagnostics = 'diagnostics',
  LoadOpportunities = 'load-opportunities',
  Metrics = 'metrics',
}

interface CategoryGroups {
  metrics: BestPracticesBrowserCompat
  'load-opportunities': A11YAria
  budgets: A11YAria
  diagnostics: A11YAria
  'pwa-installable': BestPracticesBrowserCompat
  'pwa-optimized': BestPracticesBrowserCompat
  'a11y-best-practices': A11YAria
  'a11y-color-contrast': A11YAria
  'a11y-names-labels': A11YAria
  'a11y-navigation': A11YAria
  'a11y-aria': A11YAria
  'a11y-language': A11YAria
  'a11y-audio-video': A11YAria
  'a11y-tables-lists': A11YAria
  'seo-mobile': A11YAria
  'seo-content': A11YAria
  'seo-crawl': A11YAria
  'best-practices-trust-safety': BestPracticesBrowserCompat
  'best-practices-ux': BestPracticesBrowserCompat
  'best-practices-browser-compat': BestPracticesBrowserCompat
  'best-practices-general': BestPracticesBrowserCompat
}

interface A11YAria {
  title: string
  description: string
}

interface BestPracticesBrowserCompat {
  title: string
}

interface Environment {
  networkUserAgent: string
  hostUserAgent: string
  benchmarkIndex: number
  credits: Credits
}

interface Credits {
  'axe-core': string
}

interface I18N {
  rendererFormattedStrings: RendererFormattedStrings
  icuMessagePaths: IcuMessagePaths
}

interface IcuMessagePaths {
  'lighthouse-core/audits/is-on-https.js | title': string[]
  'lighthouse-core/audits/is-on-https.js | description': string[]
  'lighthouse-core/audits/redirects-http.js | title': string[]
  'lighthouse-core/audits/redirects-http.js | description': string[]
  'lighthouse-core/audits/service-worker.js | failureTitle': string[]
  'lighthouse-core/audits/service-worker.js | description': string[]
  'lighthouse-core/audits/viewport.js | title': string[]
  'lighthouse-core/audits/viewport.js | description': string[]
  'lighthouse-core/lib/i18n/i18n.js | firstContentfulPaintMetric': string[]
  'lighthouse-core/audits/metrics/first-contentful-paint.js | description': string[]
  'lighthouse-core/lib/i18n/i18n.js | seconds': LighthouseCore[]
  'lighthouse-core/lib/i18n/i18n.js | largestContentfulPaintMetric': string[]
  'lighthouse-core/audits/metrics/largest-contentful-paint.js | description': string[]
  'lighthouse-core/lib/i18n/i18n.js | firstMeaningfulPaintMetric': string[]
  'lighthouse-core/audits/metrics/first-meaningful-paint.js | description': string[]
  'lighthouse-core/lib/i18n/i18n.js | speedIndexMetric': string[]
  'lighthouse-core/audits/metrics/speed-index.js | description': string[]
  'lighthouse-core/lib/i18n/i18n.js | totalBlockingTimeMetric': string[]
  'lighthouse-core/audits/metrics/total-blocking-time.js | description': string[]
  'lighthouse-core/lib/i18n/i18n.js | ms': LighthouseCore[]
  'lighthouse-core/lib/i18n/i18n.js | maxPotentialFIDMetric': string[]
  'lighthouse-core/audits/metrics/max-potential-fid.js | description': string[]
  'lighthouse-core/lib/i18n/i18n.js | cumulativeLayoutShiftMetric': string[]
  'lighthouse-core/audits/metrics/cumulative-layout-shift.js | description': string[]
  'lighthouse-core/audits/errors-in-console.js | title': string[]
  'lighthouse-core/audits/errors-in-console.js | description': string[]
  'lighthouse-core/audits/server-response-time.js | title': string[]
  'lighthouse-core/audits/server-response-time.js | description': string[]
  'lighthouse-core/audits/server-response-time.js | displayValue': LighthouseCore[]
  'lighthouse-core/lib/i18n/i18n.js | columnURL': string[]
  'lighthouse-core/lib/i18n/i18n.js | columnTimeSpent': string[]
  'lighthouse-core/lib/i18n/i18n.js | interactiveMetric': string[]
  'lighthouse-core/audits/metrics/interactive.js | description': string[]
  'lighthouse-core/audits/user-timings.js | title': string[]
  'lighthouse-core/audits/user-timings.js | description': string[]
  'lighthouse-core/audits/user-timings.js | displayValue': LighthouseCoreAuditsJSDisplayValue[]
  'lighthouse-core/lib/i18n/i18n.js | columnName': string[]
  'lighthouse-core/audits/user-timings.js | columnType': string[]
  'lighthouse-core/lib/i18n/i18n.js | columnStartTime': string[]
  'lighthouse-core/lib/i18n/i18n.js | columnDuration': string[]
  'lighthouse-core/audits/critical-request-chains.js | title': string[]
  'lighthouse-core/audits/critical-request-chains.js | description': string[]
  'lighthouse-core/audits/critical-request-chains.js | displayValue': LighthouseCoreAuditsJSDisplayValue[]
  'lighthouse-core/audits/redirects.js | title': string[]
  'lighthouse-core/audits/redirects.js | description': string[]
  'lighthouse-core/audits/installable-manifest.js | title': string[]
  'lighthouse-core/audits/installable-manifest.js | description': string[]
  'lighthouse-core/audits/apple-touch-icon.js | failureTitle': string[]
  'lighthouse-core/audits/apple-touch-icon.js | description': string[]
  'lighthouse-core/audits/splash-screen.js | failureTitle': string[]
  'lighthouse-core/audits/splash-screen.js | description': string[]
  'lighthouse-core/audits/themed-omnibox.js | failureTitle': string[]
  'lighthouse-core/audits/themed-omnibox.js | description': string[]
  'lighthouse-core/audits/maskable-icon.js | failureTitle': string[]
  'lighthouse-core/audits/maskable-icon.js | description': string[]
  'lighthouse-core/audits/content-width.js | title': string[]
  'lighthouse-core/audits/content-width.js | description': string[]
  'lighthouse-core/audits/image-aspect-ratio.js | failureTitle': string[]
  'lighthouse-core/audits/image-aspect-ratio.js | description': string[]
  'lighthouse-core/audits/image-aspect-ratio.js | columnDisplayed': string[]
  'lighthouse-core/audits/image-aspect-ratio.js | columnActual': string[]
  'lighthouse-core/audits/image-size-responsive.js | failureTitle': string[]
  'lighthouse-core/audits/image-size-responsive.js | description': string[]
  'lighthouse-core/audits/image-size-responsive.js | columnDisplayed': string[]
  'lighthouse-core/audits/image-size-responsive.js | columnActual': string[]
  'lighthouse-core/audits/image-size-responsive.js | columnExpected': string[]
  'lighthouse-core/audits/preload-fonts.js | title': string[]
  'lighthouse-core/audits/preload-fonts.js | description': string[]
  'lighthouse-core/audits/deprecations.js | title': string[]
  'lighthouse-core/audits/deprecations.js | description': string[]
  'lighthouse-core/audits/mainthread-work-breakdown.js | title': string[]
  'lighthouse-core/audits/mainthread-work-breakdown.js | description': string[]
  'lighthouse-core/audits/mainthread-work-breakdown.js | columnCategory': string[]
  'lighthouse-core/audits/bootup-time.js | title': string[]
  'lighthouse-core/audits/bootup-time.js | description': string[]
  'lighthouse-core/audits/bootup-time.js | columnTotal': string[]
  'lighthouse-core/audits/bootup-time.js | columnScriptEval': string[]
  'lighthouse-core/audits/bootup-time.js | columnScriptParse': string[]
  'lighthouse-core/audits/uses-rel-preload.js | title': string[]
  'lighthouse-core/audits/uses-rel-preload.js | description': string[]
  'lighthouse-core/audits/uses-rel-preconnect.js | title': string[]
  'lighthouse-core/audits/uses-rel-preconnect.js | description': string[]
  'lighthouse-core/audits/font-display.js | title': string[]
  'lighthouse-core/audits/font-display.js | description': string[]
  'lighthouse-core/audits/network-rtt.js | title': string[]
  'lighthouse-core/audits/network-rtt.js | description': string[]
  'lighthouse-core/audits/network-server-latency.js | title': string[]
  'lighthouse-core/audits/network-server-latency.js | description': string[]
  'lighthouse-core/audits/performance-budget.js | title': string[]
  'lighthouse-core/audits/performance-budget.js | description': string[]
  'lighthouse-core/audits/timing-budget.js | title': string[]
  'lighthouse-core/audits/timing-budget.js | description': string[]
  'lighthouse-core/audits/resource-summary.js | title': string[]
  'lighthouse-core/audits/resource-summary.js | description': string[]
  'lighthouse-core/audits/resource-summary.js | displayValue': LighthouseCoreAuditsResourceSummaryJSDisplayValue[]
  'lighthouse-core/lib/i18n/i18n.js | columnResourceType': string[]
  'lighthouse-core/lib/i18n/i18n.js | columnRequests': string[]
  'lighthouse-core/lib/i18n/i18n.js | columnTransferSize': string[]
  'lighthouse-core/lib/i18n/i18n.js | totalResourceType': string[]
  'lighthouse-core/lib/i18n/i18n.js | scriptResourceType': string[]
  'lighthouse-core/lib/i18n/i18n.js | documentResourceType': string[]
  'lighthouse-core/lib/i18n/i18n.js | imageResourceType': string[]
  'lighthouse-core/lib/i18n/i18n.js | fontResourceType': string[]
  'lighthouse-core/lib/i18n/i18n.js | otherResourceType': string[]
  'lighthouse-core/lib/i18n/i18n.js | stylesheetResourceType': string[]
  'lighthouse-core/lib/i18n/i18n.js | mediaResourceType': string[]
  'lighthouse-core/lib/i18n/i18n.js | thirdPartyResourceType': string[]
  'lighthouse-core/audits/third-party-summary.js | title': string[]
  'lighthouse-core/audits/third-party-summary.js | description': string[]
  'lighthouse-core/audits/third-party-summary.js | displayValue': LighthouseCore[]
  'lighthouse-core/audits/third-party-summary.js | columnThirdParty': string[]
  'lighthouse-core/lib/i18n/i18n.js | columnBlockingTime': string[]
  'lighthouse-core/lib/i18n/i18n.js | otherResourcesLabel': string[]
  'lighthouse-core/audits/third-party-facades.js | title': string[]
  'lighthouse-core/audits/third-party-facades.js | description': string[]
  'lighthouse-core/audits/largest-contentful-paint-element.js | title': string[]
  'lighthouse-core/audits/largest-contentful-paint-element.js | description': string[]
  'lighthouse-core/lib/i18n/i18n.js | displayValueElementsFound': LighthouseCoreLIBI18NI18NJSDisplayValueElementsFound[]
  'lighthouse-core/lib/i18n/i18n.js | columnElement': string[]
  'lighthouse-core/audits/layout-shift-elements.js | title': string[]
  'lighthouse-core/audits/layout-shift-elements.js | description': string[]
  'lighthouse-core/audits/layout-shift-elements.js | columnContribution': string[]
  'lighthouse-core/audits/long-tasks.js | title': string[]
  'lighthouse-core/audits/long-tasks.js | description': string[]
  'lighthouse-core/audits/long-tasks.js | displayValue': LighthouseCoreAuditsJSDisplayValue[]
  'lighthouse-core/audits/no-unload-listeners.js | failureTitle': string[]
  'lighthouse-core/audits/no-unload-listeners.js | description': string[]
  'lighthouse-core/lib/i18n/i18n.js | columnSource': string[]
  'lighthouse-core/audits/non-composited-animations.js | title': string[]
  'lighthouse-core/audits/non-composited-animations.js | description': string[]
  'lighthouse-core/audits/non-composited-animations.js | displayValue': LighthouseCoreAuditsJSDisplayValue[]
  'lighthouse-core/audits/non-composited-animations.js | unsupportedCSSProperty': LighthouseCoreAuditsNonCompositedAnimationsJSUnsupportedCSSProperty[]
  'lighthouse-core/audits/unsized-images.js | failureTitle': string[]
  'lighthouse-core/audits/unsized-images.js | description': string[]
  'lighthouse-core/lib/i18n/i18n.js | columnFailingElem': string[]
  'lighthouse-core/audits/valid-source-maps.js | failureTitle': string[]
  'lighthouse-core/audits/valid-source-maps.js | description': string[]
  'lighthouse-core/audits/valid-source-maps.js | columnMapURL': string[]
  'lighthouse-core/audits/valid-source-maps.js | missingSourceMapErrorMessage': string[]
  'lighthouse-core/audits/preload-lcp-image.js | title': string[]
  'lighthouse-core/audits/preload-lcp-image.js | description': string[]
  'lighthouse-core/audits/csp-xss.js | title': string[]
  'lighthouse-core/audits/csp-xss.js | description': string[]
  'lighthouse-core/lib/i18n/i18n.js | columnDescription': string[]
  'lighthouse-core/audits/csp-xss.js | columnDirective': string[]
  'lighthouse-core/audits/csp-xss.js | columnSeverity': string[]
  'lighthouse-core/lib/i18n/i18n.js | itemSeverityHigh': string[]
  'lighthouse-core/audits/csp-xss.js | noCsp': string[]
  'lighthouse-core/audits/manual/pwa-cross-browser.js | title': string[]
  'lighthouse-core/audits/manual/pwa-cross-browser.js | description': string[]
  'lighthouse-core/audits/manual/pwa-page-transitions.js | title': string[]
  'lighthouse-core/audits/manual/pwa-page-transitions.js | description': string[]
  'lighthouse-core/audits/manual/pwa-each-page-has-url.js | title': string[]
  'lighthouse-core/audits/manual/pwa-each-page-has-url.js | description': string[]
  'lighthouse-core/audits/accessibility/accesskeys.js | title': string[]
  'lighthouse-core/audits/accessibility/accesskeys.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-allowed-attr.js | failureTitle': string[]
  'lighthouse-core/audits/accessibility/aria-allowed-attr.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-command-name.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-command-name.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-hidden-body.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-hidden-body.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-hidden-focus.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-hidden-focus.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-input-field-name.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-input-field-name.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-meter-name.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-meter-name.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-progressbar-name.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-progressbar-name.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-required-attr.js | failureTitle': string[]
  'lighthouse-core/audits/accessibility/aria-required-attr.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-required-children.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-required-children.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-required-parent.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-required-parent.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-roles.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-roles.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-toggle-field-name.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-toggle-field-name.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-tooltip-name.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-tooltip-name.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-treeitem-name.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-treeitem-name.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-valid-attr-value.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-valid-attr-value.js | description': string[]
  'lighthouse-core/audits/accessibility/aria-valid-attr.js | title': string[]
  'lighthouse-core/audits/accessibility/aria-valid-attr.js | description': string[]
  'lighthouse-core/audits/accessibility/button-name.js | title': string[]
  'lighthouse-core/audits/accessibility/button-name.js | description': string[]
  'lighthouse-core/audits/accessibility/bypass.js | title': string[]
  'lighthouse-core/audits/accessibility/bypass.js | description': string[]
  'lighthouse-core/audits/accessibility/color-contrast.js | failureTitle': string[]
  'lighthouse-core/audits/accessibility/color-contrast.js | description': string[]
  'lighthouse-core/audits/accessibility/definition-list.js | title': string[]
  'lighthouse-core/audits/accessibility/definition-list.js | description': string[]
  'lighthouse-core/audits/accessibility/dlitem.js | title': string[]
  'lighthouse-core/audits/accessibility/dlitem.js | description': string[]
  'lighthouse-core/audits/accessibility/document-title.js | title': string[]
  'lighthouse-core/audits/accessibility/document-title.js | description': string[]
  'lighthouse-core/audits/accessibility/duplicate-id-active.js | title': string[]
  'lighthouse-core/audits/accessibility/duplicate-id-active.js | description': string[]
  'lighthouse-core/audits/accessibility/duplicate-id-aria.js | title': string[]
  'lighthouse-core/audits/accessibility/duplicate-id-aria.js | description': string[]
  'lighthouse-core/audits/accessibility/form-field-multiple-labels.js | title': string[]
  'lighthouse-core/audits/accessibility/form-field-multiple-labels.js | description': string[]
  'lighthouse-core/audits/accessibility/frame-title.js | title': string[]
  'lighthouse-core/audits/accessibility/frame-title.js | description': string[]
  'lighthouse-core/audits/accessibility/heading-order.js | title': string[]
  'lighthouse-core/audits/accessibility/heading-order.js | description': string[]
  'lighthouse-core/audits/accessibility/html-has-lang.js | title': string[]
  'lighthouse-core/audits/accessibility/html-has-lang.js | description': string[]
  'lighthouse-core/audits/accessibility/html-lang-valid.js | title': string[]
  'lighthouse-core/audits/accessibility/html-lang-valid.js | description': string[]
  'lighthouse-core/audits/accessibility/image-alt.js | title': string[]
  'lighthouse-core/audits/accessibility/image-alt.js | description': string[]
  'lighthouse-core/audits/accessibility/input-image-alt.js | title': string[]
  'lighthouse-core/audits/accessibility/input-image-alt.js | description': string[]
  'lighthouse-core/audits/accessibility/label.js | title': string[]
  'lighthouse-core/audits/accessibility/label.js | description': string[]
  'lighthouse-core/audits/accessibility/link-name.js | title': string[]
  'lighthouse-core/audits/accessibility/link-name.js | description': string[]
  'lighthouse-core/audits/accessibility/list.js | title': string[]
  'lighthouse-core/audits/accessibility/list.js | description': string[]
  'lighthouse-core/audits/accessibility/listitem.js | title': string[]
  'lighthouse-core/audits/accessibility/listitem.js | description': string[]
  'lighthouse-core/audits/accessibility/meta-refresh.js | title': string[]
  'lighthouse-core/audits/accessibility/meta-refresh.js | description': string[]
  'lighthouse-core/audits/accessibility/meta-viewport.js | title': string[]
  'lighthouse-core/audits/accessibility/meta-viewport.js | description': string[]
  'lighthouse-core/audits/accessibility/object-alt.js | title': string[]
  'lighthouse-core/audits/accessibility/object-alt.js | description': string[]
  'lighthouse-core/audits/accessibility/tabindex.js | title': string[]
  'lighthouse-core/audits/accessibility/tabindex.js | description': string[]
  'lighthouse-core/audits/accessibility/td-headers-attr.js | title': string[]
  'lighthouse-core/audits/accessibility/td-headers-attr.js | description': string[]
  'lighthouse-core/audits/accessibility/th-has-data-cells.js | title': string[]
  'lighthouse-core/audits/accessibility/th-has-data-cells.js | description': string[]
  'lighthouse-core/audits/accessibility/valid-lang.js | title': string[]
  'lighthouse-core/audits/accessibility/valid-lang.js | description': string[]
  'lighthouse-core/audits/accessibility/video-caption.js | title': string[]
  'lighthouse-core/audits/accessibility/video-caption.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | displayValue': LighthouseCoreAuditsJSDisplayValue[]
  'lighthouse-core/audits/byte-efficiency/total-byte-weight.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/total-byte-weight.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/total-byte-weight.js | displayValue': LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValue[]
  'lighthouse-core/audits/byte-efficiency/offscreen-images.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/offscreen-images.js | description': string[]
  'lighthouse-core/lib/i18n/i18n.js | displayValueByteSavings': LighthouseCoreLIBI18NI18NJSDisplayValueByteSaving[]
  'lighthouse-core/lib/i18n/i18n.js | columnResourceSize': string[]
  'lighthouse-core/lib/i18n/i18n.js | columnWastedBytes': string[]
  'lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/unminified-css.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/unminified-css.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/unminified-javascript.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/unminified-javascript.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/unused-css-rules.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/unused-css-rules.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/unused-javascript.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/unused-javascript.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/modern-image-formats.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/modern-image-formats.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/uses-text-compression.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/uses-text-compression.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/duplicated-javascript.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/duplicated-javascript.js | description': string[]
  'lighthouse-core/audits/byte-efficiency/legacy-javascript.js | title': string[]
  'lighthouse-core/audits/byte-efficiency/legacy-javascript.js | description': string[]
  'lighthouse-core/audits/dobetterweb/appcache-manifest.js | title': string[]
  'lighthouse-core/audits/dobetterweb/appcache-manifest.js | description': string[]
  'lighthouse-core/audits/dobetterweb/doctype.js | title': string[]
  'lighthouse-core/audits/dobetterweb/doctype.js | description': string[]
  'lighthouse-core/audits/dobetterweb/charset.js | title': string[]
  'lighthouse-core/audits/dobetterweb/charset.js | description': string[]
  'lighthouse-core/audits/dobetterweb/dom-size.js | title': string[]
  'lighthouse-core/audits/dobetterweb/dom-size.js | description': string[]
  'lighthouse-core/audits/dobetterweb/dom-size.js | displayValue': LighthouseCoreAuditsJSDisplayValue[]
  'lighthouse-core/audits/dobetterweb/dom-size.js | columnStatistic': string[]
  'lighthouse-core/audits/dobetterweb/dom-size.js | columnValue': string[]
  'lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMElements': string[]
  'lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMDepth': string[]
  'lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMWidth': string[]
  'lighthouse-core/audits/dobetterweb/external-anchors-use-rel-noopener.js | title': string[]
  'lighthouse-core/audits/dobetterweb/external-anchors-use-rel-noopener.js | description': string[]
  'lighthouse-core/audits/dobetterweb/geolocation-on-start.js | title': string[]
  'lighthouse-core/audits/dobetterweb/geolocation-on-start.js | description': string[]
  'lighthouse-core/audits/dobetterweb/inspector-issues.js | title': string[]
  'lighthouse-core/audits/dobetterweb/inspector-issues.js | description': string[]
  'lighthouse-core/audits/dobetterweb/no-document-write.js | title': string[]
  'lighthouse-core/audits/dobetterweb/no-document-write.js | description': string[]
  'lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | title': string[]
  'lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | description': string[]
  'lighthouse-core/audits/dobetterweb/js-libraries.js | title': string[]
  'lighthouse-core/audits/dobetterweb/js-libraries.js | description': string[]
  'lighthouse-core/audits/dobetterweb/js-libraries.js | columnVersion': string[]
  'lighthouse-core/audits/dobetterweb/notification-on-start.js | title': string[]
  'lighthouse-core/audits/dobetterweb/notification-on-start.js | description': string[]
  'lighthouse-core/audits/dobetterweb/password-inputs-can-be-pasted-into.js | title': string[]
  'lighthouse-core/audits/dobetterweb/password-inputs-can-be-pasted-into.js | description': string[]
  'lighthouse-core/audits/dobetterweb/uses-http2.js | title': string[]
  'lighthouse-core/audits/dobetterweb/uses-http2.js | description': string[]
  'lighthouse-core/audits/dobetterweb/uses-http2.js | displayValue': LighthouseCoreAuditsJSDisplayValue[]
  'lighthouse-core/audits/dobetterweb/uses-http2.js | columnProtocol': string[]
  'lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | failureTitle': string[]
  'lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | description': string[]
  'lighthouse-core/audits/seo/meta-description.js | failureTitle': string[]
  'lighthouse-core/audits/seo/meta-description.js | description': string[]
  'lighthouse-core/audits/seo/http-status-code.js | title': string[]
  'lighthouse-core/audits/seo/http-status-code.js | description': string[]
  'lighthouse-core/audits/seo/font-size.js | title': string[]
  'lighthouse-core/audits/seo/font-size.js | description': string[]
  'lighthouse-core/audits/seo/font-size.js | displayValue': LighthouseCoreAuditsSEOJSDisplayValue[]
  'lighthouse-core/audits/seo/font-size.js | columnSelector': string[]
  'lighthouse-core/audits/seo/font-size.js | columnPercentPageText': string[]
  'lighthouse-core/audits/seo/font-size.js | columnFontSize': string[]
  'lighthouse-core/audits/seo/font-size.js | legibleText': string[]
  'lighthouse-core/audits/seo/link-text.js | title': string[]
  'lighthouse-core/audits/seo/link-text.js | description': string[]
  'lighthouse-core/audits/seo/crawlable-anchors.js | failureTitle': string[]
  'lighthouse-core/audits/seo/crawlable-anchors.js | description': string[]
  'lighthouse-core/audits/seo/crawlable-anchors.js | columnFailingLink': string[]
  'lighthouse-core/audits/seo/is-crawlable.js | title': string[]
  'lighthouse-core/audits/seo/is-crawlable.js | description': string[]
  'lighthouse-core/audits/seo/robots-txt.js | failureTitle': string[]
  'lighthouse-core/audits/seo/robots-txt.js | description': string[]
  'lighthouse-core/audits/seo/robots-txt.js | explanation': string[]
  'lighthouse-core/audits/seo/tap-targets.js | title': string[]
  'lighthouse-core/audits/seo/tap-targets.js | description': string[]
  'lighthouse-core/audits/seo/tap-targets.js | displayValue': LighthouseCoreAuditsSEOJSDisplayValue[]
  'lighthouse-core/audits/seo/hreflang.js | title': string[]
  'lighthouse-core/audits/seo/hreflang.js | description': string[]
  'lighthouse-core/audits/seo/plugins.js | title': string[]
  'lighthouse-core/audits/seo/plugins.js | description': string[]
  'lighthouse-core/audits/seo/canonical.js | title': string[]
  'lighthouse-core/audits/seo/canonical.js | description': string[]
  'lighthouse-core/audits/seo/manual/structured-data.js | title': string[]
  'lighthouse-core/audits/seo/manual/structured-data.js | description': string[]
  'lighthouse-core/config/default-config.js | performanceCategoryTitle': string[]
  'lighthouse-core/config/default-config.js | a11yCategoryTitle': string[]
  'lighthouse-core/config/default-config.js | a11yCategoryDescription': string[]
  'lighthouse-core/config/default-config.js | a11yCategoryManualDescription': string[]
  'lighthouse-core/config/default-config.js | bestPracticesCategoryTitle': string[]
  'lighthouse-core/config/default-config.js | seoCategoryTitle': string[]
  'lighthouse-core/config/default-config.js | seoCategoryDescription': string[]
  'lighthouse-core/config/default-config.js | seoCategoryManualDescription': string[]
  'lighthouse-core/config/default-config.js | pwaCategoryTitle': string[]
  'lighthouse-core/config/default-config.js | pwaCategoryDescription': string[]
  'lighthouse-core/config/default-config.js | pwaCategoryManualDescription': string[]
  'lighthouse-core/config/default-config.js | metricGroupTitle': string[]
  'lighthouse-core/config/default-config.js | loadOpportunitiesGroupTitle': string[]
  'lighthouse-core/config/default-config.js | loadOpportunitiesGroupDescription': string[]
  'lighthouse-core/config/default-config.js | budgetsGroupTitle': string[]
  'lighthouse-core/config/default-config.js | budgetsGroupDescription': string[]
  'lighthouse-core/config/default-config.js | diagnosticsGroupTitle': string[]
  'lighthouse-core/config/default-config.js | diagnosticsGroupDescription': string[]
  'lighthouse-core/config/default-config.js | pwaInstallableGroupTitle': string[]
  'lighthouse-core/config/default-config.js | pwaOptimizedGroupTitle': string[]
  'lighthouse-core/config/default-config.js | a11yBestPracticesGroupTitle': string[]
  'lighthouse-core/config/default-config.js | a11yBestPracticesGroupDescription': string[]
  'lighthouse-core/config/default-config.js | a11yColorContrastGroupTitle': string[]
  'lighthouse-core/config/default-config.js | a11yColorContrastGroupDescription': string[]
  'lighthouse-core/config/default-config.js | a11yNamesLabelsGroupTitle': string[]
  'lighthouse-core/config/default-config.js | a11yNamesLabelsGroupDescription': string[]
  'lighthouse-core/config/default-config.js | a11yNavigationGroupTitle': string[]
  'lighthouse-core/config/default-config.js | a11yNavigationGroupDescription': string[]
  'lighthouse-core/config/default-config.js | a11yAriaGroupTitle': string[]
  'lighthouse-core/config/default-config.js | a11yAriaGroupDescription': string[]
  'lighthouse-core/config/default-config.js | a11yLanguageGroupTitle': string[]
  'lighthouse-core/config/default-config.js | a11yLanguageGroupDescription': string[]
  'lighthouse-core/config/default-config.js | a11yAudioVideoGroupTitle': string[]
  'lighthouse-core/config/default-config.js | a11yAudioVideoGroupDescription': string[]
  'lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupTitle': string[]
  'lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupDescription': string[]
  'lighthouse-core/config/default-config.js | seoMobileGroupTitle': string[]
  'lighthouse-core/config/default-config.js | seoMobileGroupDescription': string[]
  'lighthouse-core/config/default-config.js | seoContentGroupTitle': string[]
  'lighthouse-core/config/default-config.js | seoContentGroupDescription': string[]
  'lighthouse-core/config/default-config.js | seoCrawlingGroupTitle': string[]
  'lighthouse-core/config/default-config.js | seoCrawlingGroupDescription': string[]
  'lighthouse-core/config/default-config.js | bestPracticesTrustSafetyGroupTitle': string[]
  'lighthouse-core/config/default-config.js | bestPracticesUXGroupTitle': string[]
  'lighthouse-core/config/default-config.js | bestPracticesBrowserCompatGroupTitle': string[]
  'lighthouse-core/config/default-config.js | bestPracticesGeneralGroupTitle': string[]
}

interface LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValue {
  values: LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValueValues
  path: string
}

interface LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValueValues {
  totalBytes: number
}

interface LighthouseCoreAuditsJSDisplayValue {
  values: LighthouseCoreAuditsByteEfficiencyUsesLongCacheTTLJSDisplayValueValues
  path: string
}

interface LighthouseCoreAuditsByteEfficiencyUsesLongCacheTTLJSDisplayValueValues {
  itemCount: number
}

interface LighthouseCoreAuditsNonCompositedAnimationsJSUnsupportedCSSProperty {
  values: LighthouseCoreAuditsNonCompositedAnimationsJSUnsupportedCSSPropertyValues
  path: string
}

interface LighthouseCoreAuditsNonCompositedAnimationsJSUnsupportedCSSPropertyValues {
  propertyCount: number
  properties: string
}

interface LighthouseCoreAuditsResourceSummaryJSDisplayValue {
  values: LighthouseCoreAuditsResourceSummaryJSDisplayValueValues
  path: string
}

interface LighthouseCoreAuditsResourceSummaryJSDisplayValueValues {
  requestCount: number
  byteCount: number
}

interface LighthouseCoreAuditsSEOJSDisplayValue {
  values: LighthouseCoreAuditsSEOFontSizeJSDisplayValueValues
  path: string
}

interface LighthouseCoreAuditsSEOFontSizeJSDisplayValueValues {
  decimalProportion: number
}

interface LighthouseCore {
  values: LighthouseCoreAuditsServerResponseTimeJSDisplayValueValues
  path: string
}

interface LighthouseCoreAuditsServerResponseTimeJSDisplayValueValues {
  timeInMs: number
}

interface LighthouseCoreLIBI18NI18NJSDisplayValueByteSaving {
  values: LighthouseCoreLIBI18NI18NJSDisplayValueByteSavingValues
  path: string
}

interface LighthouseCoreLIBI18NI18NJSDisplayValueByteSavingValues {
  wastedBytes: number
}

interface LighthouseCoreLIBI18NI18NJSDisplayValueElementsFound {
  values: LighthouseCoreLIBI18NI18NJSDisplayValueElementsFoundValues
  path: string
}

interface LighthouseCoreLIBI18NI18NJSDisplayValueElementsFoundValues {
  nodeCount: number
}

interface RendererFormattedStrings {
  calculatorLink: string
  crcInitialNavigation: string
  crcLongestDurationLabel: string
  dropdownCopyJSON: string
  dropdownDarkTheme: string
  dropdownPrintExpanded: string
  dropdownPrintSummary: string
  dropdownSaveGist: string
  dropdownSaveHTML: string
  dropdownSaveJSON: string
  dropdownViewer: string
  errorLabel: string
  errorMissingAuditInfo: string
  footerIssue: string
  labDataTitle: string
  lsPerformanceCategoryDescription: string
  manualAuditsGroupTitle: string
  notApplicableAuditsGroupTitle: string
  opportunityResourceColumnLabel: string
  opportunitySavingsColumnLabel: string
  passedAuditsGroupTitle: string
  runtimeDesktopEmulation: string
  runtimeMobileEmulation: string
  runtimeNoEmulation: string
  runtimeSettingsAxeVersion: string
  runtimeSettingsBenchmark: string
  runtimeSettingsChannel: string
  runtimeSettingsCPUThrottling: string
  runtimeSettingsDevice: string
  runtimeSettingsFetchTime: string
  runtimeSettingsNetworkThrottling: string
  runtimeSettingsTitle: string
  runtimeSettingsUA: string
  runtimeSettingsUANetwork: string
  runtimeSettingsUrl: string
  runtimeUnknown: string
  showRelevantAudits: string
  snippetCollapseButtonLabel: string
  snippetExpandButtonLabel: string
  thirdPartyResourcesLabel: string
  throttlingProvided: string
  toplevelWarningsMessage: string
  varianceDisclaimer: string
  viewTreemapLabel: string
  warningAuditsGroupTitle: string
  warningHeader: string
}

interface TimingClass {
  entries: TimingElement[]
  total: number
}
