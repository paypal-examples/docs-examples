pkg archive/tar, type FileInfoNames interface { Gname, IsDir, ModTime, Mode, Name, Size, Sys, Uname } #50102
pkg archive/tar, type FileInfoNames interface, Gname() (string, error) #50102
pkg archive/tar, type FileInfoNames interface, IsDir() bool #50102
pkg archive/tar, type FileInfoNames interface, ModTime() time.Time #50102
pkg archive/tar, type FileInfoNames interface, Mode() fs.FileMode #50102
pkg archive/tar, type FileInfoNames interface, Name() string #50102
pkg archive/tar, type FileInfoNames interface, Size() int64 #50102
pkg archive/tar, type FileInfoNames interface, Sys() interface{} #50102
pkg archive/tar, type FileInfoNames interface, Uname() (string, error) #50102
pkg crypto/tls, const QUICResumeSession = 8 #63691
pkg crypto/tls, const QUICResumeSession QUICEventKind #63691
pkg crypto/tls, const QUICStoreSession = 9 #63691
pkg crypto/tls, const QUICStoreSession QUICEventKind #63691
pkg crypto/tls, method (*ECHRejectionError) Error() string #63369
pkg crypto/tls, method (*QUICConn) StoreSession(*SessionState) error #63691
pkg crypto/tls, type Config struct, EncryptedClientHelloConfigList []uint8 #63369
pkg crypto/tls, type Config struct, EncryptedClientHelloRejectionVerify func(ConnectionState) error #63369
pkg crypto/tls, type ConnectionState struct, ECHAccepted bool #63369
pkg crypto/tls, type ECHRejectionError struct #63369
pkg crypto/tls, type ECHRejectionError struct, RetryConfigList []uint8 #63369
pkg crypto/tls, type QUICConfig struct, EnableSessionEvents bool #63691
pkg crypto/tls, type QUICEvent struct, SessionState *SessionState #63691
pkg crypto/tls, type QUICSessionTicketOptions struct, Extra [][]uint8 #63691
pkg crypto/x509, func ParseOID(string) (OID, error) #66249
pkg crypto/x509, method (*OID) UnmarshalBinary([]uint8) error #66249
pkg crypto/x509, method (*OID) UnmarshalText([]uint8) error #66249
pkg crypto/x509, method (OID) MarshalBinary() ([]uint8, error) #66249
pkg crypto/x509, method (OID) MarshalText() ([]uint8, error) #66249
pkg debug/elf, const PT_OPENBSD_NOBTCFI = 1705237480 #66054
pkg debug/elf, const PT_OPENBSD_NOBTCFI ProgType #66054
pkg debug/elf, const STT_GNU_IFUNC = 10 #66836
pkg debug/elf, const STT_GNU_IFUNC SymType #66836
pkg debug/elf, const STT_RELC = 8 #66836
pkg debug/elf, const STT_RELC SymType #66836
pkg debug/elf, const STT_SRELC = 9 #66836
pkg debug/elf, const STT_SRELC SymType #66836
pkg encoding/binary, func Append([]uint8, ByteOrder, interface{}) ([]uint8, error) #60023
pkg encoding/binary, func Decode([]uint8, ByteOrder, interface{}) (int, error) #60023
pkg encoding/binary, func Encode([]uint8, ByteOrder, interface{}) (int, error) #60023
pkg go/ast, func Preorder(Node) iter.Seq[Node] #66339
pkg go/types, method (*Alias) Origin() *Alias #67143
pkg go/types, method (*Alias) Rhs() Type #66559
pkg go/types, method (*Alias) SetTypeParams([]*TypeParam) #67143
pkg go/types, method (*Alias) TypeArgs() *TypeList #67143
pkg go/types, method (*Alias) TypeParams() *TypeParamList #67143
pkg go/types, method (*Func) Signature() *Signature #65772
pkg iter, func Pull2[$0 interface{}, $1 interface{}](Seq2[$0, $1]) (func() ($0, $1, bool), func()) #61897
pkg iter, func Pull[$0 interface{}](Seq[$0]) (func() ($0, bool), func()) #61897
pkg iter, type Seq2[$0 interface{}, $1 interface{}] func(func($0, $1) bool) #61897
pkg iter, type Seq[$0 interface{}] func(func($0) bool) #61897
pkg maps, func All[$0 interface{ ~map[$1]$2 }, $1 comparable, $2 interface{}]($0) iter.Seq2[$1, $2] #61900
pkg maps, func Collect[$0 comparable, $1 interface{}](iter.Seq2[$0, $1]) map[$0]$1 #61900
pkg maps, func Insert[$0 interface{ ~map[$1]$2 }, $1 comparable, $2 interface{}]($0, iter.Seq2[$1, $2]) #61900
pkg maps, func Keys[$0 interface{ ~map[$1]$2 }, $1 comparable, $2 interface{}]($0) iter.Seq[$1] #61900
pkg maps, func Values[$0 interface{ ~map[$1]$2 }, $1 comparable, $2 interface{}]($0) iter.Seq[$2] #61900
pkg math/rand/v2, func Uint() uint #61716
pkg math/rand/v2, method (*ChaCha8) Read([]uint8) (int, error) #67059
pkg math/rand/v2, method (*Rand) Uint() uint #61716
pkg net, method (*DNSError) Unwrap() error #63116
pkg net, method (*TCPConn) SetKeepAliveConfig(KeepAliveConfig) error #62254
pkg net, type DNSError struct, UnwrapErr error #63116
pkg net, type Dialer struct, KeepAliveConfig KeepAliveConfig #62254
pkg net, type KeepAliveConfig struct #62254
pkg net, type KeepAliveConfig struct, Count int #62254
pkg net, type KeepAliveConfig struct, Enable bool #62254
pkg net, type KeepAliveConfig struct, Idle time.Duration #62254
pkg net, type KeepAliveConfig struct, Interval time.Duration #62254
pkg net, type ListenConfig struct, KeepAliveConfig KeepAliveConfig #62254
pkg net/http, func ParseCookie(string) ([]*Cookie, error) #66008
pkg net/http, func ParseSetCookie(string) (*Cookie, error) #66008
pkg net/http, method (*Request) CookiesNamed(string) []*Cookie #61472
pkg net/http, type Cookie struct, Partitioned bool #62490
pkg net/http, type Cookie struct, Quoted bool #46443
pkg net/http, type Request struct, Pattern string #66405
pkg net/http/httptest, func NewRequestWithContext(context.Context, string, string, io.Reader) *http.Request #59473
pkg os, func CopyFS(string, fs.FS) error #62484
pkg path/filepath, func Localize(string) (string, error) #57151
pkg reflect, func SliceAt(Type, unsafe.Pointer, int) Value #61308
pkg reflect, method (Value) Seq() iter.Seq[Value] #66056
pkg reflect, method (Value) Seq2() iter.Seq2[Value, Value] #66056
pkg reflect, type Type interface, CanSeq() bool #66056
pkg reflect, type Type interface, CanSeq2() bool #66056
pkg reflect, type Type interface, OverflowComplex(complex128) bool #60427
pkg reflect, type Type interface, OverflowFloat(float64) bool #60427
pkg reflect, type Type interface, OverflowInt(int64) bool #60427
pkg reflect, type Type interface, OverflowUint(uint64) bool #60427
pkg runtime/debug, func SetCrashOutput(*os.File, CrashOptions) error #42888
pkg runtime/debug, type CrashOptions struct #67182
pkg slices, func All[$0 interface{ ~[]$1 }, $1 interface{}]($0) iter.Seq2[int, $1] #61899
pkg slices, func AppendSeq[$0 interface{ ~[]$1 }, $1 interface{}]($0, iter.Seq[$1]) $0 #61899
pkg slices, func Backward[$0 interface{ ~[]$1 }, $1 interface{}]($0) iter.Seq2[int, $1] #61899
pkg slices, func Chunk[$0 interface{ ~[]$1 }, $1 interface{}]($0, int) iter.Seq[$0] #53987
pkg slices, func Collect[$0 interface{}](iter.Seq[$0]) []$0 #61899
pkg slices, func Repeat[$0 interface{ ~[]$1 }, $1 interface{}]($0, int) $0 #65238
pkg slices, func SortedFunc[$0 interface{}](iter.Seq[$0], func($0, $0) int) []$0 #61899
pkg slices, func SortedStableFunc[$0 interface{}](iter.Seq[$0], func($0, $0) int) []$0 #61899
pkg slices, func Sorted[$0 cmp.Ordered](iter.Seq[$0]) []$0 #61899
pkg slices, func Values[$0 interface{ ~[]$1 }, $1 interface{}]($0) iter.Seq[$1] #61899
pkg structs, type HostLayout struct #66408
pkg sync, method (*Map) Clear() #61696
pkg sync/atomic, func AndInt32(*int32, int32) int32 #61395
pkg sync/atomic, func AndInt64(*int64, int64) int64 #61395
pkg sync/atomic, func AndUint32(*uint32, uint32) uint32 #61395
pkg sync/atomic, func AndUint64(*uint64, uint64) uint64 #61395
pkg sync/atomic, func AndUintptr(*uintptr, uintptr) uintptr #61395
pkg sync/atomic, func OrInt32(*int32, int32) int32 #61395
pkg sync/atomic, func OrInt64(*int64, int64) int64 #61395
pkg sync/atomic, func OrUint32(*uint32, uint32) uint32 #61395
pkg sync/atomic, func OrUint64(*uint64, uint64) uint64 #61395
pkg sync/atomic, func OrUintptr(*uintptr, uintptr) uintptr #61395
pkg sync/atomic, method (*Int32) And(int32) int32 #61395
pkg sync/atomic, method (*Int32) Or(int32) int32 #61395
pkg sync/atomic, method (*Int64) And(int64) int64 #61395
pkg sync/atomic, method (*Int64) Or(int64) int64 #61395
pkg sync/atomic, method (*Uint32) And(uint32) uint32 #61395
pkg sync/atomic, method (*Uint32) Or(uint32) uint32 #61395
pkg sync/atomic, method (*Uint64) And(uint64) uint64 #61395
pkg sync/atomic, method (*Uint64) Or(uint64) uint64 #61395
pkg sync/atomic, method (*Uintptr) And(uintptr) uintptr #61395
pkg sync/atomic, method (*Uintptr) Or(uintptr) uintptr #61395
pkg syscall (openbsd-386), const EBADMSG = 92 #67998
pkg syscall (openbsd-386), const ELAST = 95 #67998
pkg syscall (openbsd-386), const ENOTRECOVERABLE = 93 #67998
pkg syscall (openbsd-386), const ENOTRECOVERABLE Errno #67998
pkg syscall (openbsd-386), const EOWNERDEAD = 94 #67998
pkg syscall (openbsd-386), const EOWNERDEAD Errno #67998
pkg syscall (openbsd-386), const EPROTO = 95 #67998
pkg syscall (openbsd-386-cgo), const EBADMSG = 92 #67998
pkg syscall (openbsd-386-cgo), const ELAST = 95 #67998
pkg syscall (openbsd-386-cgo), const ENOTRECOVERABLE = 93 #67998
pkg syscall (openbsd-386-cgo), const ENOTRECOVERABLE Errno #67998
pkg syscall (openbsd-386-cgo), const EOWNERDEAD = 94 #67998
pkg syscall (openbsd-386-cgo), const EOWNERDEAD Errno #67998
pkg syscall (openbsd-386-cgo), const EPROTO = 95 #67998
pkg syscall (openbsd-amd64), const EBADMSG = 92 #67998
pkg syscall (openbsd-amd64), const ELAST = 95 #67998
pkg syscall (openbsd-amd64), const ENOTRECOVERABLE = 93 #67998
pkg syscall (openbsd-amd64), const ENOTRECOVERABLE Errno #67998
pkg syscall (openbsd-amd64), const EOWNERDEAD = 94 #67998
pkg syscall (openbsd-amd64), const EOWNERDEAD Errno #67998
pkg syscall (openbsd-amd64), const EPROTO = 95 #67998
pkg syscall (openbsd-amd64-cgo), const EBADMSG = 92 #67998
pkg syscall (openbsd-amd64-cgo), const ELAST = 95 #67998
pkg syscall (openbsd-amd64-cgo), const ENOTRECOVERABLE = 93 #67998
pkg syscall (openbsd-amd64-cgo), const ENOTRECOVERABLE Errno #67998
pkg syscall (openbsd-amd64-cgo), const EOWNERDEAD = 94 #67998
pkg syscall (openbsd-amd64-cgo), const EOWNERDEAD Errno #67998
pkg syscall (openbsd-amd64-cgo), const EPROTO = 95 #67998
pkg syscall (windows-386), const WSAENOPROTOOPT = 10042 #62254
pkg syscall (windows-386), const WSAENOPROTOOPT Errno #62254
pkg syscall (windows-amd64), const WSAENOPROTOOPT = 10042 #62254
pkg syscall (windows-amd64), const WSAENOPROTOOPT Errno #62254
pkg syscall, const EBADMSG Errno #67998
pkg syscall, const EPROTO Errno #67998
pkg unicode/utf16, func RuneLen(int32) int #44940
pkg unique, func Make[$0 comparable]($0) Handle[$0] #62483
pkg unique, method (Handle[$0]) Value() $0 #62483
pkg unique, type Handle[$0 comparable] struct #62483
PKï¿½ï¿½ï¿½ï¿½ï¿½!ï¿½4aï¿½\ï¿½ï¿½*ï¿½ï¿½ï¿½[Content_Types].xml ï¿½(ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Nï¿½0Eï¿½Hï¿½ï¿½ï¿½-JÜ²@5ï¿½ï¿½*Q>ï¿½ï¿½'ï¿½ï¿½c[ï¿½ï¿½ï¿½ï¿½Lï¿½6Bï¿½4ï¿½ï¿½ï¿½Hï¿½Ì½ï¿½ï¿½ï¿½ï¿½`ï¿½ï¿½,[BLÆ»ï¿½ï¿½ï¿½gï¿½ï¿½ï¿½ï¿½ï¿½
ï¿½1yï¿½ï¿½9K(ï¿½ï¿½ï¿½;(ï¿½
ï¿½ï¿½ï¿½Mï¿½ï¿½Hï¿½Rï¿½ï¿½ï¿½Aï¿½ï¿½ï¿½PÉ”ï¿½ï¿½ï¿½*ï¿½ï¿½ï¿½Dzï¿½3ï¿½ï¿½ï¿½3ï¿½ï¿½Þ�Pï¿½!8Ì°ï¿½ï¿½ï¿½ï¿½ï¿½raï¿½=ï¿½ï¿½ï¿½$ï¿½Mï¿½=në¬‚ï¿½ï¿½Qï¿½.ï¿½Nï¿½Hï¿½v        9)ï¿½ï¿½47!ï¿½Pgï¿½`DSï¿½5a/|ï¿½Ã‰FËˆï¿½ï¿½ï¿½6ï¿½ï¿½Qï¿½Õ¢"i~ï¿½ï¿½ï¿½ï¿½/Kï¿½ï¿½ï¿½ï¿½n!z)Ñ©W6o+ï¿½4ï¿½ï¿½ï¿½Wï¿½ï¿½ï¿½ï¿½[ï¿½?ï¿½").Aï¿½sï¿½fXï¿½ï¿½ï¿½bï¿½Ì»IJ
ï¿½È©ï¿½ï¿½sï¿½ï¿½ï¿½Hï¿½ï¿½gï¿½dï¿½ï¿½ï¿½h&ï¿½ï¿½ï¿½ï¿½6;ï¿½cï¿½ï¿½ï¿½ï¿½ï¿½Fï¿½tï¿½zm$yï¿½<!Ô·ï¿½}(\47ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½PKï¿½ï¿½ï¿½ï¿½ï¿½!ï¿½*ï¿½{ï¿½ï¿½ï¿½ï¿½Qï¿½ï¿½ï¿½_rels/.rels ï¿½(ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½jï¿½0@ï¿½ï¿½ï¿½Ñ½Qï¿½ï¿½ï¿½N/cï¿½ï¿½ï¿½[ILï¿½ï¿½jï¿½ï¿½ï¿½<ï¿½]ï¿½aGï¿½ï¿½Ó“ï¿½zsï¿½Fuï¿½ï¿½]ï¿½ï¿½U
ï¿½ï¿½        ï¿½ï¿½^ï¿½[ï¿½ï¿½xï¿½ï¿½ï¿½ï¿½ï¿½1xï¿½pï¿½ï¿½ï¿½ï¿½fï¿½ï¿½#I)Êƒï¿½Yï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½*Dï¿½ï¿½i")ï¿½ï¿½c$ï¿½ï¿½ï¿½qUï¿½ï¿½ï¿½~3ï¿½ï¿½1ï¿½ï¿½jH[{ï¿½=Eï¿½ï¿½ï¿½ï¿½~
f?ï¿½ï¿½3-ï¿½ï¿½ï¿½Þ²]ï¿½Tê“¸2ï¿½j)ï¿½,l0/%ï¿½ï¿½bï¿½
ï¿½WZ]ï¿½ï¿½ï¿½ï¿½8ï¿½ï¿½%!4!ï¿½eï¿½ÏŒï¿½Fï¿½ï¿½\ï¿½<ï¿½Gï¿½=$ï¿½ï¿½+ï¿½ï¿½ï¿½ï¿½Ch>ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½PKï¿½ï¿½ï¿½ï¿½ï¿½!ï¿½ï¿½Üºï¿½ï¿½ï¿½ï¿½ï¿½6ï¿½ï¿½ï¿½word/_rels/document.xml.rels ï¿½(ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½jï¿½0Eï¿½ï¿½ï¿½ï¿½ï¿½}-;}PBï¿½lJ!ï¿½ï¿½ï¿½ï¿½E?ï¿½,        ï¿½ï¿½á¿¯Hiï¿½ï¿½`ï¿½ï¿½rï¿½ï¿½sÏ€6ï¿½ï¿½ï¿½ï¿½wï¿½ï¿½{ï¿½ï¿½ï¿½rèŒ¯{ï¿½*xï¿½ï¿½ï¿½AkWkï¿½*ï¿½`[^^lï¿½ï¿½jNKï¿½ï¿½ï¿½Dï¿½8Rï¿½1ï¿½ï¿½ï¿½d:4e>ï¿½K/ï¿½ï¿½ï¿½ï¿½4ï¿½Vm^uï¿½rï¿½ï¿½w2NPï¿½0Å®Vwï¿½5ï¿½jï¿½ï¿½oï¿½ï¿½ï¿½ï¿½7o:>S!?pï¿½ï¿½ï¿½ï¿½8JX[dï¿½0KDï¿½ï¿½jIï¿½ï¿½ï¿½ï¿½:ï¿½:ï¿½hqjpï¿½gï¿½oï¿½ï¿½ç´‹ï¿½ï¿½ï¿½ï¿½;,f%nï¿½ï¿½hï¿½ï¿½Jï¿½ï¿½Dï¿½-ï¿½ï¿½o/ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½PKï¿½ï¿½ï¿½ï¿½ï¿½!ï¿½ï¿½ï¿½ï¿½Pï¿½ï¿½ï¿½@ï¿½ï¿½ï¿½ï¿½ï¿½word/document.xmlï¿½[oï¿½6ï¿½ï¿½ï¿½;zï¿½ï¿½;ï¿½Qï¿½hsCï¿½v0ï¿½ï¿½iï¿½Mï¿½gRï¿½HÊŠ7ï¿½ï¿½Pwï¿½]!;hd`ï¿½C$ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Pmï¿½ï¿½ï¿½gÎœ
ï¿½ï¿½ï¿½pï¿½v/:ï¿½CB,|ï¿½&î—§ï¿½ï¿½#ï¿½Qï¿½>b"$wKï¿½ï¿½~ï¿½ï¿½ï’±/pï¿½Iï¿½ï¿½ï¿½8ï¿½ï¿½ï¿½
ï¿½ï¿½Æžï¿½p@8Rï¿½b)ï¿½Xï¿½,ï¿½'ï¿½Kï¿½ï¿½ï¿½ï¿½{ï¿½Nï¿½ï¿½ï¿½ER`ï¿½ï¿½wï¿½ï¿½
Rn.ï¿½ï¿½ï¿½ï¿½ï¿½%Pï¿½^z8@Rï¿½ï¿½Jï¿½{ï¿½ï¿½ï¿½ï¿½ï¿½Fï¿½Bï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Tï¿½hï¿½ï¿½gï¿½:ï¿½<Iï¿½:Pï¿½ï¿½ï¿½ï¿½ï¿½
OSï¿½*]ï¿½ï¿½ï¿½?Tï¿½ï¿½t0ï¿½ï¿½ï¿½ï¿½        !s)$G.ï¿½ï¿½ï¿½Hï¿½ï¿½ï¿½-GHï¿½eToAï¿½3,d
ï¿½'Xï¿½Jï¿½ï¿½ï¿½Vï¿½ï¿½ï¿½        ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½yï¿½ï¿½e}cï¿½8ï¿½ï¿½ï¿½ï¿½5kï¿½ï¿½ï¿½È³fJueï¿½eï¿½oï¿½%ï¿½ï¿½'        ?ï¿½P4*g~ï¿½dï¿½ï¿½ï¿½[ï¿½pVï¿½Kï¿½nï¿½Pï¿½ï¿½ï¿½ï¿½6ï¿½P        61?gï¿½Yfï¿½ï¿½ï¿½ï¿½4ï¿½DYï¿½ï¿½        ï¿½mï¿½pï¿½Uï¿½'ï¿½ï¿½ï¿½ï¿½nï¿½É§ï¿½1ixï¿½(4Fï¿½ï¿½ï¿½ï¿½ï¿½6:ï¿½aX:ï¿½C+ï¿½vÎ�ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½(ï¿½^ï¿½Wï¿½ï¿½EHï¿½ï¿½(ï¿½ï¿½ï¿½r[^ï¿½Qï¿½zY <HGï¿½}ï¿½ï¿½c5%&fqrï¿½VPï¿½ W/3fï¿½fJï¿½Ç�ï¿½PHï¿½``ï¿½ï¿½#ï¿½I        ï¿½ï¿½0Pï¿½!=%ï¿½iï¿½aï¿½9Æ�Âªj!ï¿½ï¿½9FN2ï¿½Uï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Hï¿½Iï¿½x}9ï¿½8ê•‰ï¿½dï¿½bï¿½Mï¿½ï¿½ï¿½ï¿½cï¿½È™ï¿½
ï¿½ï¿½3ï¿½ï¿½zï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ndï¿½/\ï¿½3edVTÞ‹P+(ï¿½ï¿½ï¿½ï¿½FÄ’ï¿½ï¿½Bï¿½Hï¿½!Tï¿½ï¿½Xï¿½%ï¿½ï¿½ï¿½Kzï¿½ï¿½}ï¿½ï¿½m'c=ï¿½^ï¿½qï¿½Mï¿½2"Mï¿½ÎŠdï¿½Yß™ï¿½Iï¿½A"ï¿½ï¿½ï¿½"Eï¿½3q8ï¿½~SZB0ï¿½ï¿½ï¿½ï¿½`^Zdï¿½ï¿½SWA)L.ï¿½\ï¿½cï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½,ï¿½ï¿½ï¿½jï¿½ï¿½:ï¿½"ï¿½ï¿½Kï¿½ï¿½0XTxJ:Je9Qï¿½ï¿½ï¿½ï¿½ï¿½<ï¿½ï¿½"        ï¿½Tï¿½hï¿½ï¿½Nï¿½tï¿½_ï¿½ï¿½jdï¿½L8ì¸¿%ï¿½ï¿½f0Dï¿½ï¿½ï¿½
kï¿½aGIï¿½11ï¿½aTdï¿½ï¿½ï¿½ï¿½$ï¿½ï¿½ï¿½Ô‚ï¿½Ì°ï¿½Ú§É†eï¿½ï¿½.ï¿½%tï¿½ï¿½R^ï¿½bï¿½_ï¿½ï¿½)Ï«/ï¿½ï¿½.mï¿½ï¿½ï¿½ï¿½ï¿½Cxxï¿½ï¿½ï¿½ï¿½{ï¿½x!ï¿½ï¿½ï¿½kqï¿½Â‚ï¿½o?wï¿½ï¿½ï¿½eLï¿½ï¿½ï¿½"ï¿½8ï¿½{Ï¶ï¿½Yï¿½Aï¿½ï¿½<Dcï¿½ï¿½&ï¿½ï¿½jÛ©ï¿½Yï¿½ï¿½ï¿½|On#ï¿½ï¿½ï¿½,)#OÛˆì³±`Z#ï¿½ï¿½DCï¿½iTt,ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ï˜ï¿½vï¿½Lï¿½#ï¿½ï¿½Qï¿½\ï¿½ï¿½3ï¿½kR,ï¿½,ï¿½sï¿½ï¿½ï¿½ï¿½ï¿½`ï¿½ï¿½]ï¿½ï¿½ï¿½ï¿½6F9Moï¿½ï¿½Hï¿½ï¿½ï¿½ï¿½ß‚iL@}r/ï¿½ï¿½ï¿½hï¿½`ï¿½ï¿½
ï¿½ Ø¼2'Nï¿½ï¿½ï¿½e0*Aï¿½ï¿½ï¿½ï¿½.ï¿½ï¿½ï¿½_ï¿½ï¿½qï¿½ï¿½Vï¿½Í´`Zï¿½@xmï¿½ï¿½ï¿½=Kï¿½y}xï¿½ï¿½!ï¿½ï¿½4ï¿½Zï¿½`ï¿½ï¿½ï¿½ï¿½"ï¿½è¬‚ï¿½Î¬ï¿½~ï¿½Ï¡ï¿½~ï¿½Vï¿½ 7ï¿½ï¿½ï¿½ï¿½yï¿½ï¿½ï¿½ï¿½?ï¿½{ï¿½ï¿½ï¿½ï¿½ï¿½ ï¿½{ï¿½ï¿½ï¿½Uï¿½Rï¿½~`.Bkï¿½ï¿½lFï¿½Yï¿½e*Hï¿½Oï¿½ï¿½ï¿½ï¿½ï¿½\.ï¿½Ðµï¿½Ulï¿½        ï¿½ï¿½ï¿½Ã‚Ç©aï¿½Jï¿½}ï¿½ï¿½yCnï¿½ï¿½ï¿½hF5Cï¿½Ã¬ï¿½Wx$=ï¿½Þ“ï¿½C0ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½PKï¿½ï¿½ï¿½ï¿½ï¿½!ï¿½xÂ³}ï¿½ï¿½ï¿½m!ï¿½ï¿½ï¿½ï¿½ï¿½word/theme/theme1.xmlï¿½Z[ï¿½7~/ï¿½?ï¿½yw|ï¿½ï¿½%ï¿½ì±�ï¿½nï¿½NJï¿½cyFï¿½fd$y7&Jï¿½Ô—B!-}hï¿½o}(ï¿½ï¿½ï¿½ï¿½Hhï¿½QIï¿½Iï¿½ï¿½ï¿½d7%ï¿½ï¿½{Fï¿½ï¿½sï¿½ï¿½9::;ï¿½ï¿½ï¿½ï¿½Sï¿½f-ï¿½|ï¿½ï¿½ï¿½Etï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
pï¿½!$4C-oï¿½ï¿½wqï¿½ï¿½O.ï¿½ï¿½"A)ï¿½ï¿½ï¿½ï¿½ï¿½%BLï¿½ï¿½<ï¿½Ã�ï¿½ï¿½ï¿½É¹e)ï¿½ï¿½ï¿½!ï¿½GRnJï¿½ï¿½Rï¿½VL!ï¿½<ï¿½ï¿½Tï¿½H"pc4ï¿½ï¿½vï¿½ï¿½{Dï¿½eï¿½ï¿½ï¿½ï¿½ï¿½}%-8v8.ï¿½>ï¿½!aï¿½ï¿½ï¿½'5
ï¿½ï¿½ï¿½ï¿½ ï¿½9ï¿½ï¿½Jï¿½ï¿½ï¿½Î…ï¿½EDï¿½ ï¿½ï¿½kI\0ï¿½ï¿½&ï¿½ï¿½`ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½4ï¿½ï¿½m`ï¿½Þ«ï¿½jkï¿½ï¿½Hï¿½vnï¿½-ï¿½^        ï¿½%ï¿½@ï¿½/Ò»ï¿½nï¿½l
ï¿½-B;P6Aï¿½ï¿½ï¿½ï¿½ï¿½
Wï¿½ï¿½eï¿½E:ï¿½NwCï¿½Fï¿½/k[ï¿½zï¿½ï¿½ï¿½ï¿½6Aï¿½ï¿½ï¿½ï¿½ï¿½Ôªï¿½jï¿½+Ìˆï¿½ï¿½N|3ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Lï¿½ï¿½D^Þ¥ï¿½e}        ï¿½Qï¿½g@ï¿½&h#ï¿½!ï¿½ï¿½]'2        '0ï¿½\ï¿½*ï¿½~ï¿½*ï¿½ÕŸï¿½ï¿½æ‘…ï¿½4è‹±ï¿½oï¿½)ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½wU
ï¿½Ì«/^>zï¿½ï¿½Ñ¯/?~ï¿½ï¿½ï¿½ï¿½mï¿½eï¿½ï¿½&ï¿½ï¿½_ï¿½ï¿½ï¿½sï¿½ï¿½/ß¿yï¿½uï¿½ï¿½ï¿½ï¿½?}ï¿½ï¿½ï¿½ï¿½ï¿½Qï¿½ï¿½,ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½^}ï¿½ï¿½?>qï¿½ï¿½ï¿½ï¿½Nï¿½ï¿½ï¿½ESï¿½Hï¿½
tï¿½Þ‘2H 6)ï¿½,ï¿½0ï¿½ï¿½ï¿½ï¿½Dbï¿½ï¿½ï¿½ ï¿½.`ï¿½ï¿½ï¿½dq"/Mï¿½YFï¿½'l*ï¿½y-I-ï¿½ï¿½ï¿½Cï¿½{a×´:ï¿½ï¿½,ï¿½ï¿½Ï¦&ï¿½ï¿½ï¿½Nï¿½ï¿½Fï¿½{Ó‰ï¿½ï¿½)4Lï¿½eï¿½M"ï¿½cï¿½!ï¿½#ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½t$ï¿½]:ï¿½3ï¿½Vjï¿½Yï¿½q*4sï¿½(Coyhï¿½ï¿½Pï¿½Tï¿½Eï¿½6TnHï¿½Bï¿½ï¿½y        NLï¿½VÃ”ï¿½ï¿½](ï¿½ï¿½ï¿½3Yï¿½ï¿½B=Fï¿½ï¿½ï¿½qï¿½$ï¿½`jï¿½kï¿½5Yr2`ï¿½ï¿½Rï¿½;ï¿½ï¿½ï¿½RÚ¥ï¿½0ï¿½ï¿½ï¿½m7ï¿½|ï¿½ï¿½eï¿½Bpï¿½
ï¿½ï¿½ï¿½3ï¿½^fï¿½ï¿½ï¿½ï¿½ï¿½ï¿½cï¿½ï¿½Û²@ï¿½ï¿½Eï¿½Lï¿½sï¿½ jï¿½ï¿½Aï¿½ï¿½fï¿½Uï¿½ï¿½ï¿½3ï¿½3ï¿½ï¿½Tï¿½Eï¿½ï¿½#8DÜ¾ï¿½$Ð‰ï¿½ï¿½ï¿½ï¿½WYm.#ï¿½ï¿½ï¿½B;uï¿½}ï¿½8ï¿½fï¿½bÌ­ï¿½G1ï¿½3ioï¿½Qï¿½f0K!Ë•}}lï¿½OOï¿½ï¿½ï¿½;}I4ï¿½
-fj'ï¿½ï¿½qï¿½+)Ç‘{3ï¿½Vï¿½ï¿½{ï¿½ï¿½ï¿½3fEï¿½Xï¿½Nï¿½ï¿½        ï¿½;IVï¿½ï¿½{hï¿½ï¿½ï¿½bï¿½<(ï¿½g1ï¿½+ï¿½ï¿½ï¿½4o
WalletCore

WalletCore/wallet.core.jni/Cardano/outputMinAdaAmount
outputMinAdaAmount
open fun outputMinAdaAmount(toAddress: String, tokenBundle: Array<Byte>, coinsPerUtxoByte: String): String
Calculates the minimum ADA amount needed for an output.

Return
the minimum ADA amount (Base-10 decimal string).

See also
reference
https://docs.cardano.org/native-tokens/minimum-ada-value-requirement

Parameters
toAddress
valid destination address, as string.

tokenBundle
serialized data of TW.Cardano.Proto.TokenBundle.

coinsPerUtxoByte
cost per one byte of a serialized UTXO (Base-10 decimal string).

© 2023 CopyrightGenerated by dokka
WalletCore

WalletCore/wallet.core.jni/PrivateKey/getPublicKeyEd25519Cardano
getPublicKeyEd25519Cardano
open fun getPublicKeyEd25519Cardano(): PublicKey
Returns the Ed25519Cardano public key associated with the given private key

Return
Non-null pointer to the corresponding public key

Parameters
pk
Non-null pointer to the private key

© 2023 CopyrightGenerated by dokkahttps://github.com/Edgarruiz856/docs

<?php

/**
 * Raw DSA Key Handler
 *
 * PHP version 5
 *
 * Reads and creates arrays as DSA keys
 *
 * @category  Crypt
 * @package   DSA
 * @author    Jim Wigginton <terrafrost@php.net>
 * @copyright 2015 Jim Wigginton
 * @license   http://www.opensource.org/licenses/mit-license.html  MIT License
 * @link      http://phpseclib.sourceforge.net
 */

namespace phpseclib3\Crypt\DSA\Formats\Keys;

use phpseclib3\Math\BigInteger;

/**
 * Raw DSA Key Handler
 *
 * @package DSA
 * @author  Jim Wigginton <terrafrost@php.net>
 * @access  public
 */
abstract class Raw
{
    /**
     * Break a public or private key down into its constituent components
     *
     * @access public
     * @param array $key
     * @param string $password optional
     * @return array
     */
    public static function load($key, $password = '')
    {
        if (!is_array($key)) {
            throw new \UnexpectedValueException('Key should be a array - not a ' . gettype($key));
        }

        switch (true) {
            case !isset($key['p']) || !isset($key['q']) || !isset($key['g']):
            case !$key['p'] instanceof BigInteger:
            case !$key['q'] instanceof BigInteger:
            case !$key['g'] instanceof BigInteger:
            case !isset($key['x']) && !isset($key['y']):
            case isset($key['x']) && !$key['x'] instanceof BigInteger:
            case isset($key['y']) && !$key['y'] instanceof BigInteger:
                throw new \UnexpectedValueException('Key appears to be malformed');
        }

        $options = ['p' => 1, 'q' => 1, 'g' => 1, 'x' => 1, 'y' => 1];

        return array_intersect_key($key, $options);
    }

    /**
     * Convert a private key to the appropriate format.
     *
     * @access public
     * @param \phpseclib3\Math\BigInteger $p
     * @param \phpseclib3\Math\BigInteger $q
     * @param \phpseclib3\Math\BigInteger $g
     * @param \phpseclib3\Math\BigInteger $y
     * @param \phpseclib3\Math\BigInteger $x
     * @param string $password optional
     * @return string
     */
    public static function savePrivateKey(BigInteger $p, BigInteger $q, BigInteger $g, BigInteger $y, BigInteger $x, $password = '')
    {
        return compact('p', 'q', 'g', 'y', 'x');
    }

    /**
     * Convert a public key to the appropriate format
     *
     * @access public
     * @param \phpseclib3\Math\BigInteger $p
     * @param \phpseclib3\Math\BigInteger $q
     * @param \phpseclib3\Math\BigInteger $g
     * @param \phpseclib3\Math\BigInteger $y
     * @return string
     */
    public static function savePublicKey(BigInteger $p, BigInteger $q, BigInteger $g, BigInteger $y)
    {
        return compact('p', 'q', 'g', 'y');
    }
}

# Trabajar con el registro de RubyGems

Puedes configurar RubyGems para publicar un paquete para GitHub Packages y utilizar paquetes almacenados en GitHub Packages como dependencias en un proyecto Ruby con Bundler.

<!-- 2148AF7B-5FF8-4B28-A808-D692FEE2225A -->

## Requisitos previos

* Debes contar con RubyGems 2.4.1 o superior. Para encontrar tu versión de RubyGems:

  ```shell
  gem --version
  ```

* Debes tener Bundler 1.6.4 o superiores. Para encontrar tu versión Bundler:

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

## Autenticar a GitHub Packages

> \[!NOTE]
> GitHub Packages solo admite la autenticación mediante un personal access token (classic). Para más información, consulta [Administración de tokens de acceso personal](/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Necesitas un token de acceso para publicar, instalar y eliminar paquetes privados, internos y públicos.

Puedes utilizar un personal access token (classic) para autenticarte en el GitHub Packages o en la API de GitHub. Cuando creas un personal access token (classic), puedes asignar al token diferentes ámbitos en función de tus necesidades. Para más información sobre los ámbitos relacionados con paquetes para un personal access token (classic), consulta [Acerca de los permisos para los Paquetes de GitHub](/es/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries).

Para autenticarte en un registro del GitHub Packages dentro de un flujo de trabajo de GitHub Actions, puedes utilizar:

* `GITHUB_TOKEN` para publicar los paquetes asociados con el repositorio del flujo de trabajo.
* Un personal access token (classic) con al menos alcance `read:packages` para instalar los paquetes asociados con otros repositorios privados (`GITHUB_TOKEN` puede utilizarse si el repositorio tiene acceso de lectura al paquete. Consulta [Configurar la visibilidad y el control de accesos de un paquete](/es/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)).

### Autenticación en un flujo de trabajo de GitHub Actions

Este registro admite permisos granulares. Para los registros que admiten permisos detallados, si en el flujo de trabajo de GitHub Actions se usa un personal access token para autenticarse en un registro, se recomienda encarecidamente actualizar el flujo de trabajo para usar `GITHUB_TOKEN`. Para obtener orientación sobre la actualización de tus flujos de trabajo que se autentican en un registro con un personal access token, consulta [Publicar e instalar un paquete con GitHub Actions](/es/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token).

> \[!NOTE]
> La capacidad de que los flujos de trabajo de GitHub Actions eliminen y restauren paquetes mediante la API de REST se encuentra actualmente en versión preliminar pública y está sujeta a cambios.

Puede usar un `GITHUB_TOKEN` en un flujo de trabajo de GitHub Actions para eliminar o restaurar un paquete mediante la API de REST, si el token tiene el permiso `admin` para el paquete. A los repositorios que publican paquetes mediante un flujo de trabajo y a los repositorios que se han conectado explícitamente a los paquetes se les concede automáticamente el permiso `admin` para los paquetes del repositorio.

Para obtener más información sobre `GITHUB_TOKEN`, consulta [Uso de GITHUB\\\_TOKEN para la autenticación en flujos de trabajo](/es/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow). Para obtener más información sobre los procedimientos recomendados al usar un registro en acciones, consulta [Referencia de uso seguro](/es/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access).

También puedes optar por conceder permisos de acceso a paquetes de forma independiente para  GitHub Codespaces y GitHub Actions. Para más información, consulta [Configurar la visibilidad y el control de accesos de un paquete](/es/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) y [Configurar la visibilidad y el control de accesos de un paquete](/es/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).

### Autenticación con un personal access token

Debes utilizar un personal access token (classic) con los ámbitos adecuados para publicar e instalar paquetes en GitHub Packages. Para más información, consulta [Introducción a los paquetes de GitHub](/es/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages).

Si quieres publicar e instalar gems, puedes configurar RubyGems o Bundler para autenticarse en GitHub Packages con tu personal access token.

Para publicar gems nuevos, debes autenticarte en GitHub Packages con RubyGems editando el archivo *\~/.gem/credentials* para incluir tu personal access token (classic). Cree un nuevo archivo *\~/.gem/credentials* si este archivo no existe.

Por ejemplo, puedes crear o editar un archivo *\~/.gem/credentials* para incluir lo siguiente, reemplazando TOKEN por tu personal access token.

```shell
---
:github: Bearer TOKEN
```

Para instalar gems, debes autenticarte en GitHub Packages actualizando tus orígenes de gems para incluir `https://USERNAME:TOKEN@rubygems.pkg.github.com/NAMESPACE/`. Debes reemplazar:

* `USERNAME` por su nombre de usuario de GitHub.
* `TOKEN` por tu personal access token (classic).
* `NAMESPACE` por el nombre de la cuenta personal u organización a la que se limita la gema.

Si quieres que el paquete esté disponible globalmente, puedes ejecutar el siguiente comando para agregar el registro como origen.

```shell
gem sources --add https://USERNAME:TOKEN@rubygems.pkg.github.com/NAMESPACE/
```

Para la autenticación con Bundler, configúralo para que use tu personal access token (classic), reemplazando NOMBRE\_DE\_USUARIO por tu nombre de usuario de GitHub, TOKEN por tu personal access token y ESPACIO\_DE\_NOMBRES por el nombre de la cuenta personal u organización a la que se limita la gema.

```shell
bundle config https://rubygems.pkg.github.com/NAMESPACE USERNAME:TOKEN 
```1

##jobs:
  secret-generator:
    runs-on: ubuntu-latest
    steps:
    - uses: some/secret-store@27b31702a0e7fc50959f5ad993c78deac1bdfc29
      with:{% raw %}
        credentials: ${{ secrets.SECRET_STORE_CREDENTIALS }}
        instance: ${{ secrets.SECRET_STORE_INSTANCE }}{% endraw %}
    - name: generate secret
      shell: pwsh
      run: |
        Set-Variable -Name Generated_Secret -Value (Get-Random)
        Write-Output "::add-mask::$Generated_Secret"
        Set-Variable -Name Secret_Handle -Value (Store-Secret "$Generated_Secret")
        "handle=$Secret_Handle" >> $env:GITHUB_OUTPUT
  secret-consumer:
    runs-on: macos-latest
    needs: secret-generator
    steps:
    - uses: some/secret-store@27b31702a0e7fc50959f5ad993c78deac1bdfc29
      with:{% raw %}
        credentials: ${{ secrets.SECRET_STORE_CREDENTIALS }}
        instance: ${{ secrets.SECRET_STORE_INSTANCE }}{% endraw %}
    - name: use secret
      shell: pwsh
      run: |{% raw %}
        Set-Variable -Name Secret_Handle -Value "${{ needs.secret-generator.outputs.handle }}"{% endraw %}
        Set-Variable -Name Retrieved_Secret -Value (Retrieve-Secret "$Secret_Handle")
        echo "::add-mask::$Retrieved_Secret"
        echo "We retrieved our masked secret: $Retrieved_Secret"af39-020a1e20f556
Coinbase94Olvidé la vida cuando comete mi hermosa 100 Pine Street, Suite 1250 San Francisco, CA 94111 +1 888 908-7930 support.coinbase.com Page 1/1
Transaction report for Edgar Manuel Ruiz Arias Date range Filter Customer
You can use this transaction report to inform your likely tax obligations. For US From: 2023-02-15T00:00:00Z Type: all edgarplasticos3@hotmail.com customers, Sells, Converts, Rewards Income, Learning Rewards, and Donations 
are taxable events. For final tax obligations, please consult your tax advisor.
To: 2023-03-17T21:59:23Z Asset: all 640dc8b7acaee7242f9cb3c5
• TimestampTransaction Type Asset Quantity Transacted Spot Price Currenc
https://ecas.cc.cec.eu.int:7002/cas/userdata/eid/manageMyEids.cgi
## Atheme IRC Services

Atheme is a set of IRC services designed for large IRC networks with high
scalability requirements. It is relatively mature software, with some code
and design derived from another package called Shrike.

Atheme's behavior is tunable using modules and a highly detailed
configuration file. Almost all behavior can be changed at deployment time
just by editing the configuration.



## Obtaining Atheme

If you have a modern version of Git (1.6.5 or newer), you can recursively
clone the repository:

    $ git clone --recursive 'https://github.com/atheme/atheme/' atheme-devel
    $ cd atheme-devel

If you have an older version of Git, you must clone the repository, and then
fetch its submodules:

    $ git clone 'https://github.com/atheme/atheme/' atheme-devel
    $ cd atheme-devel
    $ git submodule init
    $ git submodule update

If you don't have Git, you can download a package archive from our website at
<https://atheme.github.io/>.

If you are browsing our GitHub repository, please do NOT click the "Download
ZIP" button or the "Source code" links there, as they will give you an archive
that lacks the required submodules. There are proper `.tar.bz2` or `.tar.xz`
archives attached to each release under "Assets", which is what the "Download"
button on our website will take you to.



## Basic build instructions for the impatient

Obtain the source code repository and change into its directory (using the
commands given above).

If you are building Atheme on a GNU/Linux system, or something which can
sufficiently emulate that (like WSL 2 on Windows 10), execute the following
commands:

    $ ./configure
    $ make
    $ make install

If you are building Atheme on an OpenBSD (or similar) system, execute the
following commands instead:

    # pkg_add gmake
    $ ./configure --disable-linker-defs
    $ gmake
    $ gmake install



## Library Detection

If your user-installed libraries that you want Atheme to use are installed by
your package manager to a directory such as `/usr/local/`, you may need to
supplement the default compiler and linker search paths so that Atheme can
detect those libraries (e.g. cracklib from FreeBSD Ports):

    $ ./configure CPPFLAGS="-I/usr/local/include" LDFLAGS="-L/usr/local/lib"

The following libraries generally require pkg-config to be installed:

- PHC Argon2 Reference Implementation (`libargon2.pc`)
- OpenSSL (`libcrypto.pc`)
- GNU libidn (`libidn.pc`)
- GNU Nettle (`nettle.pc`)
- PCRE (`libpcre2-8.pc`)
- libqrencode (`libqrencode.pc`)
- Sodium (`libsodium.pc`)

If you do not have pkg-config installed and want to use one or more of these
libraries, please see `./configure --help` for the options to set to override
pkg-config discovery for those libraries. For example, if you wish to use GNU
libidn, and it is installed into a default search path for your compiler and
linker, and you do not have pkg-config installed, execute:

    $ ./configure LIBIDN_CFLAGS="" LIBIDN_LIBS="-lidn"

If a library relies on populating `LIBFOO_CFLAGS` with some preprocessor
definitions, or populating `LIBFOO_LIBS` with some library linking flags,
this will generally fail. Install pkg-config for the best results.



## Choice of compiler and its features

If you wish to compile Atheme with the LLVM project's C compiler (`clang`),
you may also wish to use LLVM's linker (`lld`). You can accomplish this as
follows:

    $ ./configure CC="clang" LDFLAGS="-fuse-ld=lld"

If you want to use compiler sanitizers, and you want to build with Clang, you
MUST also use LLD, as most of the sanitizers in Clang require LTO to function
properly, and Clang in LTO mode emits LLVM bitcode, not machine code. The
linker is ultimately responsible for performing most of the LTO heavy lifting,
and translating the result into machine code, and most other linkers do not
know how to do this.

To use compiler sanitizers with GCC (supported):

    $ ./configure --disable-heap-allocator --disable-linker-defs \
        --enable-compiler-sanitizers CC="gcc"

To use compiler sanitizers with Clang (recommended):

    $ ./configure --disable-heap-allocator --disable-linker-defs \
        --enable-compiler-sanitizers CC="clang" LDFLAGS="-fuse-ld=lld"

If you do enable the sanitizers, it is recommended to enable the configuration
option `general::db_save_blocking`; see the example configuration file for
more details.

The sanitizers are not recommended for production usage, but they are
recommended for developers, including third parties writing new features
and/or modifying the source code.



## Getting More Help

If you're still lost, read the [INSTALL](INSTALL) file or check out our wiki
for more hints.

- [Our Website](https://atheme.github.io/)
- [Our GitHub Repository](https://github.com/atheme/atheme/)
- [The Atheme Wiki](https://github.com/atheme/atheme/wiki/)
- [The #atheme channel on Libera Chat](ircs://irc.libera.chat:6697/#atheme)

 Publicación de un paquete

Cuando publicas un paquete por primera vez, la visibilidad predeterminada es privada. Para cambiar la visibilidad o establecer permisos de acceso, consulta [Configurar la visibilidad y el control de accesos de un paquete](/es/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility). Para más información sobre cómo crear la gema, consulta [Creación de una gema propia](http://guides.rubygems.org/make-your-own-gem/) en la documentación de RubyGems.

> \[!NOTE]
> Si publicas un paquete vinculado a un repositorio, el paquete hereda automáticamente los permisos de acceso del repositorio vinculado y los flujos de trabajo de GitHub Actions en el repositorio vinculado automáticamente obtienen acceso al paquete, a menos que la organización haya deshabilitado la herencia automática de los permisos de acceso. Para más información, consulta [Configurar la visibilidad y el control de accesos de un paquete](/es/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#about-inheritance-of-access-permissions).

1. Autentícate en GitHub Packages. Para obtener más información, consulta [Autenticación en GitHub Packages](#authenticating-to-github-packages).

2. Compile el paquete a partir de *gemspec* para crear el paquete *.gem*. Reemplace `GEM_NAME` por el nombre de su gem.

   ```shell
   gem build GEM_NAME.gemspec
   ```

3. Publica un paquete en GitHub Packages, y reemplaza `NAMESPACE` por el nombre de la cuenta personal u organización a la que se limita el paquete y `GEM_NAME` por el nombre del paquete de gemas.

   > \[!NOTE]
   > El tamaño máximo sin comprimir del archivo `metadata.gz` de una gema debe ser menor que 2 MB. Se producirá un error en las solicitudes para insertar gemas que superen ese límite.

   ```shell
   $ gem push --key github \
   --host https://rubygems.pkg.github.com/NAMESPACE \
   GEM_NAME-0.0.1.gem
   ```

## Conexión de un paquete a un repositorio

En el registro de RubyGems se almacenan paquetes de la cuenta personal o de la organización, y permite asociar los paquetes a un repositorio. Puedes elegir si quieres heredar permisos desde un repositorio o si quieres configurar permisos granulares independientemente de un repositorio.

Puedes asegurarte de que las gemas se vincularán a un repositorio tan pronto como se publiquen si incluyes la dirección URL del repositorio GitHub en el campo `github_repo` de `gem.metadata`. Puedes vincular varias gemas al mismo repositorio.

```ruby
gem.metadata = { "github_repo" => "ssh://github.com/OWNER/REPOSITORY" }
```

Para obtener más información sobre la vinculación de un paquete publicado con un repositorio, consulta [Conectar un repositorio a un paquete](/es/packages/learn-github-packages/connecting-a-repository-to-a-package).

## Instalación de un paquete

Puede usar gemas de GitHub Packages de forma muy similar a las gemas de *rubygems.org*. Debe autenticarse en GitHub Packages agregando su usuario u organización de GitHub como origen en el archivo *\~/.gemrc* o mediante Bundler, editando el archivo *Gemfile*.

1. Autentícate en GitHub Packages. Para obtener más información, consulta [Autenticación en GitHub Packages](#authenticating-to-github-packages).

2. Para Bundler, agregue su usuario u organización de GitHub como origen en el archivo *Gemfile* para extraer gemas de este nuevo origen. Por ejemplo, puedes agregar un nuevo bloque `source` al archivo *Gemfile* que use GitHub Packages solo para los paquetes que especifiques, y reemplazar `GEM_NAME` por el paquete que quieras instalar desde GitHub Packages y `NAMESPACE` por la cuenta personal u organización a la que se limita la gema que quieres instalar.

   ```ruby
   source "https://rubygems.org"

   gem "rails"

   source "https://rubygems.pkg.github.com/NAMESPACE" do
     gem "GEM_NAME"
   end
   ```

3. En el caso de las versiones de Bundler anteriores a la 1.7.0, debe agregar un nuevo `source` global. Para obtener más información sobre el uso de Bundler, consulte la [documentación de bundler.io](https://bundler.io/gemfile.html).

   ```ruby
   source "https://rubygems.pkg.github.com/NAMESPACE"
   source "https://rubygems.org"

   gem "rails"
   gem "GEM_NAME"
   ```

4. Instala el paquete:

   ```shell
   gem install GEM_NAME --version "0.1.1"
   ```

## Información adicional

* [Borrar y restablecer un paquete](/es/packages/learn-github-packages/deleting-and-restoring-a-package)
* # core.js

> Extendable client for GitHub's REST & GraphQL APIs

[![@latest](https://img.shields.io/npm/v/@octokit/core.svg)](https://www.npmjs.com/package/@octokit/core)
[![Build Status](https://github.com/octokit/core.js/workflows/Test/badge.svg)](https://github.com/octokit/core.js/actions?query=workflow%3ATest+branch%3Amain)

<!-- toc -->

- [Usage](#usage)
  - [REST API example](#rest-api-example)
  - [GraphQL example](#graphql-example)
- [Options](#options)
- [Defaults](#defaults)
- [Authentication](#authentication)
- [Logging](#logging)
- [Hooks](#hooks)
- [Plugins](#plugins)
- [Build your own Octokit with Plugins and Defaults](#build-your-own-octokit-with-plugins-and-defaults)
- [LICENSE](#license)

<!-- tocstop -->

If you need a minimalistic library to utilize GitHub's [REST API](https://developer.github.com/v3/) and [GraphQL API](https://developer.github.com/v4/) which you can extend with plugins as needed, then `@octokit/core` is a great starting point.

If you don't need the Plugin API then using [`@octokit/request`](https://github.com/octokit/request.js/) or [`@octokit/graphql`](https://github.com/octokit/graphql.js/) directly is a good alternative.

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>
Load <code>@octokit/core</code> directly from <a href="https://esm.sh">esm.sh</a>

```html
<script type="module">
  import { Octokit } from "https://esm.sh/@octokit/core";
</script>
```

</td></tr>
<tr><th>
Node
</th><td>

Install with <code>npm install @octokit/core</code>

```js
import { Octokit } from "@octokit/core";
```

</td></tr>
</tbody>
</table>

As we use [conditional exports](https://nodejs.org/api/packages.html#conditional-exports), you will need to adapt your `tsconfig.json`. See the TypeScript docs on [package.json "exports"](https://www.typescriptlang.org/docs/handbook/modules/reference.html#packagejson-exports).

### REST API example

```js
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `personal-access-token123` });

const response = await octokit.request("GET /orgs/{org}/repos", {
  org: "octokit",
  type: "private",
});
```

See [`@octokit/request`](https://github.com/octokit/request.js) for full documentation of the `.request` method.

### GraphQL example

```js
const octokit = new Octokit({ auth: `secret123` });

const response = await octokit.graphql(
  `query ($login: String!) {
    organization(login: $login) {
      repositories(privacy: PRIVATE) {
        totalCount
      }
    }
  }`,
  { login: "octokit" },
);
```

See [`@octokit/graphql`](https://github.com/octokit/graphql.js) for full documentation of the `.graphql` method.

## Options

<table>
  <thead align=left>
    <tr>
      <th>
        name
      </th>
      <th>
        type
      </th>
      <th width=100%>
        description
      </th>
    </tr>
  </thead>
  <tbody align=left valign=top>
    <tr>
      <th>
        <code>options.authStrategy</code>
      </th>
      <td>
        <code>Function<code>
      </td>
      <td>
        Defaults to <a href="https://github.com/octokit/auth-token.js#readme"><code>@octokit/auth-token</code></a>. See <a href="#authentication">Authentication</a> below for examples.
      </td>
    </tr>
    <tr>
      <th>
        <code>options.auth</code>
      </th>
      <td>
        <code>String</code> or <code>Object</code>
      </td>
      <td>
        See <a href="#authentication">Authentication</a> below for examples.
      </td>
    </tr>
    <tr>
      <th>
        <code>options.baseUrl</code>
      </th>
      <td>
        <code>String</code>
      </td>
      <td>

When using with GitHub Enterprise Server, set `options.baseUrl` to the root URL of the API. For example, if your GitHub Enterprise Server's hostname is `github.acme-inc.com`, then set `options.baseUrl` to `https://github.acme-inc.com/api/v3`. Example

```js
const octokit = new Octokit({
  baseUrl: "https://github.acme-inc.com/api/v3",
});
```

</td></tr>
    <tr>
      <th>
        <code>options.previews</code>
      </th>
      <td>
        <code>Array of Strings</code>
      </td>
      <td>

Some REST API endpoints require preview headers to be set, or enable
additional features. Preview headers can be set on a per-request basis, e.g.

```js
octokit.request("POST /repos/{owner}/{repo}/pulls", {
  mediaType: {
    previews: ["shadow-cat"],
  },
  owner,
  repo,
  title: "My pull request",
  base: "main",
  head: "my-feature",
  draft: true,
});
```

You can also set previews globally, by setting the `options.previews` option on the constructor. Example:

```js
const octokit = new Octokit({
  previews: ["shadow-cat"],
});
```

</td></tr>
    <tr>
      <th>
        <code>options.request</code>
      </th>
      <td>
        <code>Object</code>
      </td>
      <td>

Set a default request timeout (`options.request.timeout`) or an [`http(s).Agent`](https://nodejs.org/api/http.html#http_class_http_agent) e.g. for proxy usage (Node only, `options.request.agent`).

There are more `options.request.*` options, see [`@octokit/request` options](https://github.com/octokit/request.js#request). `options.request` can also be set on a per-request basis.

</td></tr>
    <tr>
      <th>
        <code>options.timeZone</code>
      </th>
      <td>
        <code>String</code>
      </td>
      <td>

Sets the `Time-Zone` header which defines a timezone according to the [list of names from the Olson database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```js
const octokit = new Octokit({
  timeZone: "America/Los_Angeles",
});
```

The time zone header will determine the timezone used for generating the timestamp when creating commits. See [GitHub's Timezones documentation](https://developer.github.com/v3/#timezones).

</td></tr>
    <tr>
      <th>
        <code>options.userAgent</code>
      </th>
      <td>
        <code>String</code>
      </td>
      <td>

A custom user agent string for your app or library. Example

```js
const octokit = new Octokit({
  userAgent: "my-app/v1.2.3",
});
```

</td></tr>
  </tbody>
</table>

## Defaults

You can create a new Octokit class with customized default options.

```js
const MyOctokit = Octokit.defaults({
  auth: "personal-access-token123",
  baseUrl: "https://github.acme-inc.com/api/v3",
  userAgent: "my-app/v1.2.3",
});
const octokit1 = new MyOctokit();
const octokit2 = new MyOctokit();
```

If you pass additional options to your new constructor, the options will be merged shallowly.

```js
const MyOctokit = Octokit.defaults({
  foo: {
    opt1: 1,
  },
});
const octokit = new MyOctokit({
  foo: {
    opt2: 1,
  },
});
// options will be { foo: { opt2: 1 }}
```

If you need a deep or conditional merge, you can pass a function instead.

```js
const MyOctokit = Octokit.defaults((options) => {
  return {
    foo: Object.assign({}, options.foo, { opt1: 1 }),
  };
});
const octokit = new MyOctokit({
  foo: { opt2: 1 },
});
// options will be { foo: { opt1: 1, opt2: 1 }}
```

Be careful about mutating the `options` object in the `Octokit.defaults` callback, as it can have unforeseen consequences.

## Authentication

Authentication is optional for some REST API endpoints accessing public data, but is required for GraphQL queries. Using authentication also increases your [API rate limit](https://developer.github.com/v3/#rate-limiting).

By default, Octokit authenticates using the [token authentication strategy](https://github.com/octokit/auth-token.js). Pass in a token using `options.auth`. It can be a personal access token, an OAuth token, an installation access token or a JSON Web Token for GitHub App authentication. The `Authorization` header will be set according to the type of token.

```js
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: "mypersonalaccesstoken123",
});

const { data } = await octokit.request("/user");
```

To use a different authentication strategy, set `options.authStrategy`. A list of authentication strategies is available at [octokit/authentication-strategies.js](https://github.com/octokit/authentication-strategies.js/#readme).

Example

```js
import { Octokit } from "@octokit/core";
import { createAppAuth } from "@octokit/auth-app";

const appOctokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: 123,
    privateKey: process.env.PRIVATE_KEY,
  },
});

const { data } = await appOctokit.request("/app");
```

The `.auth()` method returned by the current authentication strategy can be accessed at `octokit.auth()`. Example

```js
const { token } = await appOctokit.auth({
  type: "installation",
  installationId: 123,
});
```

## Logging

There are four built-in log methods

1. `octokit.log.debug(message[, additionalInfo])`
1. `octokit.log.info(message[, additionalInfo])`
1. `octokit.log.warn(message[, additionalInfo])`
1. `octokit.log.error(message[, additionalInfo])`

They can be configured using the [`log` client option](client-options). By default, `octokit.log.debug()` and `octokit.log.info()` are no-ops, while the other two call `console.warn()` and `console.error()` respectively.

This is useful if you build reusable [plugins](#plugins).

If you would like to make the log level configurable using an environment variable or external option, we recommend the [console-log-level](https://github.com/watson/console-log-level) package. Example

```js
import consoleLogLevel from "console-log-level";
const octokit = new Octokit({
  log: consoleLogLevel({ level: "info" }),
});
```

## Hooks

You can customize Octokit's request lifecycle with hooks.

```js
octokit.hook.before("request", async (options) => {
  validate(options);
});
octokit.hook.after("request", async (response, options) => {
  console.log(`${options.method} ${options.url}: ${response.status}`);
});
octokit.hook.error("request", async (error, options) => {
  if (error.status === 304) {
    return findInCache(error.response.headers.etag);
  }

  throw error;
});
octokit.hook.wrap("request", async (request, options) => {
  // add logic before, after, catch errors or replace the request altogether
  return request(options);
});
```

See [before-after-hook](https://github.com/gr2m/before-after-hook#readme) for more documentation on hooks.

## Plugins

Octokit’s functionality can be extended using plugins. The `Octokit.plugin()` method accepts a plugin (or many) and returns a new constructor.

A plugin is a function which gets two arguments:

1. the current instance
2. the options passed to the constructor.

In order to extend `octokit`'s API, the plugin must return an object with the new methods. Please refrain from adding methods directly to the `octokit` instance, especialy if you depend on keys that do not exist in `@octokit/core`, such as `octokit.rest`.

```js
// index.js
import { Octokit } from "@octokit/core";
import myPlugin from "./lib/my-plugin.js";
import octokitPluginExample from "octokit-plugin-example";
const MyOctokit = Octokit.plugin(
  myPlugin,
  octokitPluginExample
);

const octokit = new MyOctokit({ greeting: "Moin moin" });
octokit.helloWorld(); // logs "Moin moin, world!"
octokit.request("GET /"); // logs "GET / - 200 in 123ms"

// lib/my-plugin.js
const plugin = (octokit, options = { greeting: "Hello" }) => {
  // hook into the request lifecycle
  octokit.hook.wrap("request", async (request, options) => {
    const time = Date.now();
    const response = await request(options);
    console.log(
      `${options.method} ${options.url} – ${response.status} in ${Date.now() -
        time}ms`
    );
    return response;
  });

  // add a custom method
  return {
    helloWorld: () => console.log(`${options.greeting}, world!`);
  }
};
export default plugin;
```

## Build your own Octokit with Plugins and Defaults

You can build your own Octokit class with preset default options and plugins. In fact, this is mostly how the `@octokit/<context>` modules work, such as [`@octokit/action`](https://github.com/octokit/action.js):

```js
import { Octokit } from "@octokit/core";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { throttling } from "@octokit/plugin-throttling";
import { retry } from "@octokit/plugin-retry";
import { createActionAuth } from "@octokit/auth-action";
const MyActionOctokit = Octokit.plugin(
  paginateRest,
  throttling,
  retry,
).defaults({
  throttle: {
    onAbuseLimit: (retryAfter, options) => {
      /* ... */
    },
    onRateLimit: (retryAfter, options) => {
      /* ... */
    },
  },
  authStrategy: createActionAuth,
  userAgent: `my-octokit-action/v1.2.3`,
});

const octokit = new MyActionOctokit();
const installations = await octokit.paginate("GET /app/installations");
```

## LICENSE

[MIT](LICENSE)
import sys, os

# Append the top level directory of the docs, so we can import from the config dir.
sys.path.insert(0, os.path.abspath('..'))

# Pull in all the configuration options defined in the global config file..
from config.all import *

language = 'en'
/* MaxMind, Inc., licenses this file to you under the Apache License, Version
 * 2.0 (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

#include "php_maxminddb.h"

#ifdef HAVE_CONFIG_H
#include "config.h"
#endif

#include <php.h>
#include <zend.h>

#include "Zend/zend_exceptions.h"
#include "ext/standard/info.h"
#include <maxminddb.h>

#ifdef ZTS
#include <TSRM.h>
#endif

#define __STDC_FORMAT_MACROS
#include <inttypes.h>

#define PHP_MAXMINDDB_NS ZEND_NS_NAME("MaxMind", "Db")
#define PHP_MAXMINDDB_READER_NS ZEND_NS_NAME(PHP_MAXMINDDB_NS, "Reader")
#define PHP_MAXMINDDB_READER_EX_NS                                             \
    ZEND_NS_NAME(PHP_MAXMINDDB_READER_NS, "InvalidDatabaseException")

#ifdef ZEND_ENGINE_3
#define Z_MAXMINDDB_P(zv) php_maxminddb_fetch_object(Z_OBJ_P(zv))
#define _ZVAL_STRING ZVAL_STRING
#define _ZVAL_STRINGL ZVAL_STRINGL
typedef size_t strsize_t;
typedef zend_object free_obj_t;
#else
#define Z_MAXMINDDB_P(zv)                                                      \
    (maxminddb_obj *)zend_object_store_get_object(zv TSRMLS_CC)
#define _ZVAL_STRING(a, b) ZVAL_STRING(a, b, 1)
#define _ZVAL_STRINGL(a, b, c) ZVAL_STRINGL(a, b, c, 1)
typedef int strsize_t;
typedef void free_obj_t;
#endif

/* For PHP 8 compatibility */
#ifndef TSRMLS_C
#define TSRMLS_C
#endif
#ifndef TSRMLS_CC
#define TSRMLS_CC
#endif
#ifndef TSRMLS_DC
#define TSRMLS_DC
#endif
#ifndef ZEND_ACC_CTOR
#define ZEND_ACC_CTOR 0
#endif

#ifdef ZEND_ENGINE_3
typedef struct _maxminddb_obj {
    MMDB_s *mmdb;
    zend_object std;
} maxminddb_obj;
#else
typedef struct _maxminddb_obj {
    zend_object std;
    MMDB_s *mmdb;
} maxminddb_obj;
#endif

PHP_FUNCTION(maxminddb);

static int
get_record(INTERNAL_FUNCTION_PARAMETERS, zval *record, int *prefix_len);
static const MMDB_entry_data_list_s *
handle_entry_data_list(const MMDB_entry_data_list_s *entry_data_list,
                       zval *z_value TSRMLS_DC);
static const MMDB_entry_data_list_s *
handle_array(const MMDB_entry_data_list_s *entry_data_list,
             zval *z_value TSRMLS_DC);
static const MMDB_entry_data_list_s *
handle_map(const MMDB_entry_data_list_s *entry_data_list,
           zval *z_value TSRMLS_DC);
static void handle_uint128(const MMDB_entry_data_list_s *entry_data_list,
                           zval *z_value TSRMLS_DC);
static void handle_uint64(const MMDB_entry_data_list_s *entry_data_list,
                          zval *z_value TSRMLS_DC);
static void handle_uint32(const MMDB_entry_data_list_s *entry_data_list,
                          zval *z_value TSRMLS_DC);
static zend_class_entry *lookup_class(const char *name TSRMLS_DC);

#define CHECK_ALLOCATED(val)                                                   \
    if (!val) {                                                                \
        zend_error(E_ERROR, "Out of memory");                                  \
        return;                                                                \
    }

#define THROW_EXCEPTION(name, ...)                                             \
    {                                                                          \
        zend_class_entry *exception_ce = lookup_class(name TSRMLS_CC);         \
        zend_throw_exception_ex(exception_ce, 0 TSRMLS_CC, __VA_ARGS__);       \
    }

#if PHP_VERSION_ID < 50399
#define object_properties_init(zo, class_type)                                 \
    {                                                                          \
        zval *tmp;                                                             \
        zend_hash_copy((*zo).properties,                                       \
                       &class_type->default_properties,                        \
                       (copy_ctor_func_t)zval_add_ref,                         \
                       (void *)&tmp,                                           \
                       sizeof(zval *));                                        \
    }
#endif

static zend_object_handlers maxminddb_obj_handlers;
static zend_class_entry *maxminddb_ce;

static inline maxminddb_obj *
php_maxminddb_fetch_object(zend_object *obj TSRMLS_DC) {
#ifdef ZEND_ENGINE_3
    return (maxminddb_obj *)((char *)(obj)-XtOffsetOf(maxminddb_obj, std));
#else
    return (maxminddb_obj *)obj;
#endif
}

ZEND_BEGIN_ARG_INFO_EX(arginfo_maxmindbreader_construct, 0, 0, 1)
ZEND_ARG_INFO(0, db_file)
ZEND_END_ARG_INFO()

PHP_METHOD(MaxMind_Db_Reader, __construct) {
    char *db_file = NULL;
    strsize_t name_len;
    zval *_this_zval = NULL;

    if (zend_parse_method_parameters(ZEND_NUM_ARGS() TSRMLS_CC,
                                     getThis(),
                                     "Os",
                                     &_this_zval,
                                     maxminddb_ce,
                                     &db_file,
                                     &name_len) == FAILURE) {
        THROW_EXCEPTION("InvalidArgumentException",
                        "The constructor takes exactly one argument.");
        return;
    }

    if (0 != php_check_open_basedir(db_file TSRMLS_CC) ||
        0 != access(db_file, R_OK)) {
        THROW_EXCEPTION("InvalidArgumentException",
                        "The file \"%s\" does not exist or is not readable.",
                        db_file);
        return;
    }

    MMDB_s *mmdb = (MMDB_s *)ecalloc(1, sizeof(MMDB_s));
    uint16_t status = MMDB_open(db_file, MMDB_MODE_MMAP, mmdb);

    if (MMDB_SUCCESS != status) {
        THROW_EXCEPTION(PHP_MAXMINDDB_READER_EX_NS,
                        "Error opening database file (%s). Is this a valid "
                        "MaxMind DB file?",
                        db_file);
        efree(mmdb);
        return;
    }

    maxminddb_obj *mmdb_obj = Z_MAXMINDDB_P(getThis());
    mmdb_obj->mmdb = mmdb;
}

ZEND_BEGIN_ARG_INFO_EX(arginfo_maxmindbreader_get, 0, 0, 1)
ZEND_ARG_INFO(0, ip_address)
ZEND_END_ARG_INFO()

PHP_METHOD(MaxMind_Db_Reader, get) {
    int prefix_len = 0;
    get_record(INTERNAL_FUNCTION_PARAM_PASSTHRU, return_value, &prefix_len);
}

PHP_METHOD(MaxMind_Db_Reader, getWithPrefixLen) {
    zval *record, *z_prefix_len;
#ifdef ZEND_ENGINE_3
    zval _record, _z_prefix_len;
    record = &_record;
    z_prefix_len = &_z_prefix_len;
#else
    ALLOC_INIT_ZVAL(record);
    ALLOC_INIT_ZVAL(z_prefix_len);
#endif

    int prefix_len = 0;
    if (get_record(INTERNAL_FUNCTION_PARAM_PASSTHRU, record, &prefix_len)) {
        return;
    }

    array_init(return_value);
    add_next_index_zval(return_value, record);

    ZVAL_LONG(z_prefix_len, prefix_len);
    add_next_index_zval(return_value, z_prefix_len);
}

static int
get_record(INTERNAL_FUNCTION_PARAMETERS, zval *record, int *prefix_len) {
    char *ip_address = NULL;
    strsize_t name_len;
    zval *_this_zval = NULL;

    if (zend_parse_method_parameters(ZEND_NUM_ARGS() TSRMLS_CC,
                                     getThis(),
                                     "Os",
                                     &_this_zval,
                                     maxminddb_ce,
                                     &ip_address,
                                     &name_len) == FAILURE) {
        THROW_EXCEPTION("InvalidArgumentException",
                        "Method takes exactly one argument.");
        return 1;
    }

    const maxminddb_obj *mmdb_obj = (maxminddb_obj *)Z_MAXMINDDB_P(getThis());

    MMDB_s *mmdb = mmdb_obj->mmdb;

    if (NULL == mmdb) {
        THROW_EXCEPTION("BadMethodCallException",
                        "Attempt to read from a closed MaxMind DB.");
        return 1;
    }

    struct addrinfo hints = {
        .ai_family = AF_UNSPEC,
        .ai_flags = AI_NUMERICHOST,
        // We set ai_socktype so that we only get one result back
        .ai_socktype = SOCK_STREAM};

    struct addrinfo *addresses = NULL;
    int gai_status = getaddrinfo(ip_address, NULL, &hints, &addresses);
    if (gai_status) {
        THROW_EXCEPTION("InvalidArgumentException",
                        "The value \"%s\" is not a valid IP address.",
                        ip_address);
        return 1;
    }
    if (!addresses || !addresses->ai_addr) {
        THROW_EXCEPTION(
            "InvalidArgumentException",
            "getaddrinfo was successful but failed to set the addrinfo");
        return 1;
    }

    int sa_family = addresses->ai_addr->sa_family;

    int mmdb_error = MMDB_SUCCESS;
    MMDB_lookup_result_s result =
        MMDB_lookup_sockaddr(mmdb, addresses->ai_addr, &mmdb_error);

    freeaddrinfo(addresses);

    if (MMDB_SUCCESS != mmdb_error) {
        char *exception_name;
        if (MMDB_IPV6_LOOKUP_IN_IPV4_DATABASE_ERROR == mmdb_error) {
            exception_name = "InvalidArgumentException";
        } else {
            exception_name = PHP_MAXMINDDB_READER_EX_NS;
        }
        THROW_EXCEPTION(exception_name,
                        "Error looking up %s. %s",
                        ip_address,
                        MMDB_strerror(mmdb_error));
        return 1;
    }

    *prefix_len = result.netmask;

    if (sa_family == AF_INET && mmdb->metadata.ip_version == 6) {
        // We return the prefix length given the IPv4 address. If there is
        // no IPv4 subtree, we return a prefix length of 0.
        *prefix_len = *prefix_len >= 96 ? *prefix_len - 96 : 0;
    }

    if (!result.found_entry) {
        ZVAL_NULL(record);
        return 0;
    }

    MMDB_entry_data_list_s *entry_data_list = NULL;
    int status = MMDB_get_entry_data_list(&result.entry, &entry_data_list);

    if (MMDB_SUCCESS != status) {
        THROW_EXCEPTION(PHP_MAXMINDDB_READER_EX_NS,
                        "Error while looking up data for %s. %s",
                        ip_address,
                        MMDB_strerror(status));
        MMDB_free_entry_data_list(entry_data_list);
        return 1;
    } else if (NULL == entry_data_list) {
        THROW_EXCEPTION(PHP_MAXMINDDB_READER_EX_NS,
                        "Error while looking up data for %s. Your database may "
                        "be corrupt or you have found a bug in libmaxminddb.",
                        ip_address);
        return 1;
    }

    handle_entry_data_list(entry_data_list, record TSRMLS_CC);
    MMDB_free_entry_data_list(entry_data_list);
    return 0;
}

ZEND_BEGIN_ARG_INFO_EX(arginfo_maxmindbreader_void, 0, 0, 0)
ZEND_END_ARG_INFO()

PHP_METHOD(MaxMind_Db_Reader, metadata) {
    if (ZEND_NUM_ARGS() != 0) {
        THROW_EXCEPTION("InvalidArgumentException",
                        "Method takes no arguments.");
        return;
    }

    const maxminddb_obj *const mmdb_obj =
        (maxminddb_obj *)Z_MAXMINDDB_P(getThis());

    if (NULL == mmdb_obj->mmdb) {
        THROW_EXCEPTION("BadMethodCallException",
                        "Attempt to read from a closed MaxMind DB.");
        return;
    }

    const char *const name = ZEND_NS_NAME(PHP_MAXMINDDB_READER_NS, "Metadata");
    zend_class_entry *metadata_ce = lookup_class(name TSRMLS_CC);

    object_init_ex(return_value, metadata_ce);

#ifdef ZEND_ENGINE_3
    zval _metadata_array;
    zval *metadata_array = &_metadata_array;
    ZVAL_NULL(metadata_array);
#else
    zval *metadata_array;
    ALLOC_INIT_ZVAL(metadata_array);
#endif

    MMDB_entry_data_list_s *entry_data_list;
    MMDB_get_metadata_as_entry_data_list(mmdb_obj->mmdb, &entry_data_list);

    handle_entry_data_list(entry_data_list, metadata_array TSRMLS_CC);
    MMDB_free_entry_data_list(entry_data_list);
#if PHP_VERSION_ID >= 80000
    zend_call_method_with_1_params(Z_OBJ_P(return_value),
                                   metadata_ce,
                                   &metadata_ce->constructor,
                                   ZEND_CONSTRUCTOR_FUNC_NAME,
                                   NULL,
                                   metadata_array);
    zval_ptr_dtor(metadata_array);
#elif defined(ZEND_ENGINE_3)
    zend_call_method_with_1_params(return_value,
                                   metadata_ce,
                                   &metadata_ce->constructor,
                                   ZEND_CONSTRUCTOR_FUNC_NAME,
                                   NULL,
                                   metadata_array);
    zval_ptr_dtor(metadata_array);
#else
    zend_call_method_with_1_params(&return_value,
                                   metadata_ce,
                                   &metadata_ce->constructor,
                                   ZEND_CONSTRUCTOR_FUNC_NAME,
                                   NULL,
                                   metadata_array);
    zval_ptr_dtor(&metadata_array);
#endif
}

PHP_METHOD(MaxMind_Db_Reader, close) {
    if (ZEND_NUM_ARGS() != 0) {
        THROW_EXCEPTION("InvalidArgumentException",
                        "Method takes no arguments.");
        return;
    }

    maxminddb_obj *mmdb_obj = (maxminddb_obj *)Z_MAXMINDDB_P(getThis());

    if (NULL == mmdb_obj->mmdb) {
        THROW_EXCEPTION("BadMethodCallException",
                        "Attempt to close a closed MaxMind DB.");
        return;
    }
    MMDB_close(mmdb_obj->mmdb);
    efree(mmdb_obj->mmdb);
    mmdb_obj->mmdb = NULL;
}

static const MMDB_entry_data_list_s *
handle_entry_data_list(const MMDB_entry_data_list_s *entry_data_list,
                       zval *z_value TSRMLS_DC) {
    switch (entry_data_list->entry_data.type) {
        case MMDB_DATA_TYPE_MAP:
            return handle_map(entry_data_list, z_value TSRMLS_CC);
        case MMDB_DATA_TYPE_ARRAY:
            return handle_array(entry_data_list, z_value TSRMLS_CC);
        case MMDB_DATA_TYPE_UTF8_STRING:
            _ZVAL_STRINGL(z_value,
                          (char *)entry_data_list->entry_data.utf8_string,
                          entry_data_list->entry_data.data_size);
            break;
        case MMDB_DATA_TYPE_BYTES:
            _ZVAL_STRINGL(z_value,
                          (char *)entry_data_list->entry_data.bytes,
                          entry_data_list->entry_data.data_size);
            break;
        case MMDB_DATA_TYPE_DOUBLE:
            ZVAL_DOUBLE(z_value, entry_data_list->entry_data.double_value);
            break;
        case MMDB_DATA_TYPE_FLOAT:
            ZVAL_DOUBLE(z_value, entry_data_list->entry_data.float_value);
            break;
        case MMDB_DATA_TYPE_UINT16:
            ZVAL_LONG(z_value, entry_data_list->entry_data.uint16);
            break;
        case MMDB_DATA_TYPE_UINT32:
            handle_uint32(entry_data_list, z_value TSRMLS_CC);
            break;
        case MMDB_DATA_TYPE_BOOLEAN:
            ZVAL_BOOL(z_value, entry_data_list->entry_data.boolean);
            break;
        case MMDB_DATA_TYPE_UINT64:
            handle_uint64(entry_data_list, z_value TSRMLS_CC);
            break;
        case MMDB_DATA_TYPE_UINT128:
            handle_uint128(entry_data_list, z_value TSRMLS_CC);
            break;
        case MMDB_DATA_TYPE_INT32:
            ZVAL_LONG(z_value, entry_data_list->entry_data.int32);
            break;
        default:
            THROW_EXCEPTION(PHP_MAXMINDDB_READER_EX_NS,
                            "Invalid data type arguments: %d",
                            entry_data_list->entry_data.type);
            return NULL;
    }
    return entry_data_list;
}

static const MMDB_entry_data_list_s *
handle_map(const MMDB_entry_data_list_s *entry_data_list,
           zval *z_value TSRMLS_DC) {
    array_init(z_value);
    const uint32_t map_size = entry_data_list->entry_data.data_size;

    uint i;
    for (i = 0; i < map_size && entry_data_list; i++) {
        entry_data_list = entry_data_list->next;

        char *key = estrndup((char *)entry_data_list->entry_data.utf8_string,
                             entry_data_list->entry_data.data_size);
        if (NULL == key) {
            THROW_EXCEPTION(PHP_MAXMINDDB_READER_EX_NS,
                            "Invalid data type arguments");
            return NULL;
        }

        entry_data_list = entry_data_list->next;
#ifdef ZEND_ENGINE_3
        zval _new_value;
        zval *new_value = &_new_value;
        ZVAL_NULL(new_value);
#else
        zval *new_value;
        ALLOC_INIT_ZVAL(new_value);
#endif
        entry_data_list =
            handle_entry_data_list(entry_data_list, new_value TSRMLS_CC);
        add_assoc_zval(z_value, key, new_value);
        efree(key);
    }
    return entry_data_list;
}

static const MMDB_entry_data_list_s *
handle_array(const MMDB_entry_data_list_s *entry_data_list,
             zval *z_value TSRMLS_DC) {
    const uint32_t size = entry_data_list->entry_data.data_size;

    array_init(z_value);

    uint i;
    for (i = 0; i < size && entry_data_list; i++) {
        entry_data_list = entry_data_list->next;
#ifdef ZEND_ENGINE_3
        zval _new_value;
        zval *new_value = &_new_value;
        ZVAL_NULL(new_value);
#else
        zval *new_value;
        ALLOC_INIT_ZVAL(new_value);
#endif
        entry_data_list =
            handle_entry_data_list(entry_data_list, new_value TSRMLS_CC);
        add_next_index_zval(z_value, new_value);
    }
    return entry_data_list;
}

static void handle_uint128(const MMDB_entry_data_list_s *entry_data_list,
                           zval *z_value TSRMLS_DC) {
    uint64_t high = 0;
    uint64_t low = 0;
#if MMDB_UINT128_IS_BYTE_ARRAY
    int i;
    for (i = 0; i < 8; i++) {
        high = (high << 8) | entry_data_list->entry_data.uint128[i];
    }

    for (i = 8; i < 16; i++) {
        low = (low << 8) | entry_data_list->entry_data.uint128[i];
    }
#else
    high = entry_data_list->entry_data.uint128 >> 64;
    low = (uint64_t)entry_data_list->entry_data.uint128;
#endif

    char *num_str;
    spprintf(&num_str, 0, "0x%016" PRIX64 "%016" PRIX64, high, low);
    CHECK_ALLOCATED(num_str);

    _ZVAL_STRING(z_value, num_str);
    efree(num_str);
}

static void handle_uint32(const MMDB_entry_data_list_s *entry_data_list,
                          zval *z_value TSRMLS_DC) {
    uint32_t val = entry_data_list->entry_data.uint32;

#if LONG_MAX >= UINT32_MAX
    ZVAL_LONG(z_value, val);
    return;
#else
    if (val <= LONG_MAX) {
        ZVAL_LONG(z_value, val);
        return;
    }

    char *int_str;
    spprintf(&int_str, 0, "%" PRIu32, val);
    CHECK_ALLOCATED(int_str);

    _ZVAL_STRING(z_value, int_str);
    efree(int_str);
#endif
}

static void handle_uint64(const MMDB_entry_data_list_s *entry_data_list,
                          zval *z_value TSRMLS_DC) {
    uint64_t val = entry_data_list->entry_data.uint64;

#if LONG_MAX >= UINT64_MAX
    ZVAL_LONG(z_value, val);
    return;
#else
    if (val <= LONG_MAX) {
        ZVAL_LONG(z_value, val);
        return;
    }

    char *int_str;
    spprintf(&int_str, 0, "%" PRIu64, val);
    CHECK_ALLOCATED(int_str);

    _ZVAL_STRING(z_value, int_str);
    efree(int_str);
#endif
}

static zend_class_entry *lookup_class(const char *name TSRMLS_DC) {
#ifdef ZEND_ENGINE_3
    zend_string *n = zend_string_init(name, strlen(name), 0);
    zend_class_entry *ce = zend_lookup_class(n);
    zend_string_release(n);
    if (NULL == ce) {
        zend_error(E_ERROR, "Class %s not found", name);
    }
    return ce;
#else
    zend_class_entry **ce;
    if (FAILURE == zend_lookup_class(name, strlen(name), &ce TSRMLS_CC)) {
        zend_error(E_ERROR, "Class %s not found", name);
    }
    return *ce;
#endif
}

static void maxminddb_free_storage(free_obj_t *object TSRMLS_DC) {
    maxminddb_obj *obj =
        php_maxminddb_fetch_object((zend_object *)object TSRMLS_CC);
https://drive.google.com/file/d/1sKmILGyEg7HngccRJq7BG0ABSg7AFO35/view?usp=drivesdk
<?php

// {{{ license

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4 foldmethod=marker: */
//
// +----------------------------------------------------------------------+
// | This library is free software; you can redistribute it and/or modify |
// | it under the terms of the GNU Lesser General Public License as       |
// | published by the Free Software Foundation; either version 2.1 of the |
// | License, or (at your option) any later version.                      |
// |                                                                      |
// | This library is distributed in the hope that it will be useful, but  |
// | WITHOUT ANY WARRANTY; without even the implied warranty of           |
// | MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU    |
// | Lesser General Public License for more details.                      |
// |                                                                      |
// | You should have received a copy of the GNU Lesser General Public     |
// | License along with this library; if not, write to the Free Software  |
// | Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307 |
// | USA.                                                                 |
// +----------------------------------------------------------------------+
//

// }}}
require_once 'Net/IDNA2/Exception.php';
require_once 'Net/IDNA2/Exception/Nameprep.php';

/**
 * Encode/decode Internationalized Domain Names.
 *
 * The class allows to convert internationalized domain names
 * (see RFC 3490 for details) as they can be used with various registries worldwide
 * to be translated between their original (localized) form and their encoded form
 * as it will be used in the DNS (Domain Name System).
 *
 * The class provides two public methods, encode() and decode(), which do exactly
 * what you would expect them to do. You are allowed to use complete domain names,
 * simple strings and complete email addresses as well. That means, that you might
 * use any of the following notations:
 *
 * - www.n�rgler.com
 * - xn--nrgler-wxa
 * - xn--brse-5qa.xn--knrz-1ra.info
 *
 * Unicode input might be given as either UTF-8 string, UCS-4 string or UCS-4
 * array. Unicode output is available in the same formats.
 * You can select your preferred format via {@link set_paramter()}.
 *
 * ACE input and output is always expected to be ASCII.
 *
 * @package Net
 * @author  Markus Nix <mnix@docuverse.de>
 * @author  Matthias Sommerfeld <mso@phlylabs.de>
 * @author  Stefan Neufeind <pear.neufeind@speedpartner.de>
 * @version $Id: IDNA2.php 305344 2010-11-14 23:52:42Z neufeind $
 */
class Net_IDNA2
{
    // {{{ npdata
    /**
     * These Unicode codepoints are
     * mapped to nothing, See RFC3454 for details
     *
     * @static
     * @var array
     * @access private
     */
    private static $_np_map_nothing = array(
        0xAD,
        0x34F,
        0x1806,
        0x180B,
        0x180C,
        0x180D,
        0x200B,
        0x200C,
        0x200D,
        0x2060,
        0xFE00,
        0xFE01,
        0xFE02,
        0xFE03,
        0xFE04,
        0xFE05,
        0xFE06,
        0xFE07,
        0xFE08,
        0xFE09,
        0xFE0A,
        0xFE0B,
        0xFE0C,
        0xFE0D,
        0xFE0E,
        0xFE0F,
        0xFEFF
    );

    /**
     * Prohibited codepints
     *
     * @static
     * @var array
     * @access private
     */
    private static $_general_prohibited = array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0xA,
        0xB,
        0xC,
        0xD,
        0xE,
        0xF,
        0x10,
        0x11,
        0x12,
        0x13,
        0x14,
        0x15,
        0x16,
        0x17,
        0x18,
        0x19,
        0x1A,
        0x1B,
        0x1C,
        0x1D,
        0x1E,
        0x1F,
        0x20,
        0x21,
        0x22,
        0x23,
        0x24,
        0x25,
        0x26,
        0x27,
        0x28,
        0x29,
        0x2A,
        0x2B,
        0x2C,
        0x2F,
        0x3B,
        0x3C,
        0x3D,
        0x3E,
        0x3F,
        0x40,
        0x5B,
        0x5C,
        0x5D,
        0x5E,
        0x5F,
        0x60,
        0x7B,
        0x7C,
        0x7D,
        0x7E,
        0x7F,
        0x3002
    );

    /**
     * Codepints prohibited by Nameprep
     * @static
     * @var array
     * @access private
     */
    private static $_np_prohibit = array(
        0xA0,
        0x1680,
        0x2000,
        0x2001,
        0x2002,
        0x2003,
        0x2004,
        0x2005,
        0x2006,
        0x2007,
        0x2008,
        0x2009,
        0x200A,
        0x200B,
        0x202F,
        0x205F,
        0x3000,
        0x6DD,
        0x70F,
        0x180E,
        0x200C,
        0x200D,
        0x2028,
        0x2029,
        0xFEFF,
        0xFFF9,
        0xFFFA,
        0xFFFB,
        0xFFFC,
        0xFFFE,
        0xFFFF,
        0x1FFFE,
        0x1FFFF,
        0x2FFFE,
        0x2FFFF,
        0x3FFFE,
        0x3FFFF,
        0x4FFFE,
        0x4FFFF,
        0x5FFFE,
        0x5FFFF,
        0x6FFFE,
        0x6FFFF,
        0x7FFFE,
        0x7FFFF,
        0x8FFFE,
        0x8FFFF,
        0x9FFFE,
        0x9FFFF,
        0xAFFFE,
        0xAFFFF,
        0xBFFFE,
        0xBFFFF,
        0xCFFFE,
        0xCFFFF,
        0xDFFFE,
        0xDFFFF,
        0xEFFFE,
        0xEFFFF,
        0xFFFFE,
        0xFFFFF,
        0x10FFFE,
        0x10FFFF,
        0xFFF9,
        0xFFFA,
        0xFFFB,
        0xFFFC,
        0xFFFD,
        0x340,
        0x341,
        0x200E,
        0x200F,
        0x202A,
        0x202B,
        0x202C,
        0x202D,
        0x202E,
        0x206A,
        0x206B,
        0x206C,
        0x206D,
        0x206E,
        0x206F,
        0xE0001
    );

    /**
     * Codepoint ranges prohibited by nameprep
     *
     * @static
     * @var array
     * @access private
     */
    private static $_np_prohibit_ranges = array(
        array(0x80,     0x9F    ),
        array(0x2060,   0x206F  ),
        array(0x1D173,  0x1D17A ),
        array(0xE000,   0xF8FF  ),
        array(0xF0000,  0xFFFFD ),
        array(0x100000, 0x10FFFD),
        array(0xFDD0,   0xFDEF  ),
        array(0xD800,   0xDFFF  ),
        array(0x2FF0,   0x2FFB  ),
        array(0xE0020,  0xE007F )
    );

    /**
     * Replacement mappings (casemapping, replacement sequences, ...)
     *
     * @static
     * @var array
     * @access private
     */
    private static $_np_replacemaps = array(
        0x41    => array(0x61),
        0x42    => array(0x62),
        0x43    => array(0x63),
        0x44    => array(0x64),
        0x45    => array(0x65),
        0x46    => array(0x66),
        0x47    => array(0x67),
        0x48    => array(0x68),
        0x49    => array(0x69),
        0x4A    => array(0x6A),
        0x4B    => array(0x6B),
        0x4C    => array(0x6C),
        0x4D    => array(0x6D),
        0x4E    => array(0x6E),
        0x4F    => array(0x6F),
        0x50    => array(0x70),
        0x51    => array(0x71),
        0x52    => array(0x72),
        0x53    => array(0x73),
        0x54    => array(0x74),
        0x55    => array(0x75),
        0x56    => array(0x76),
        0x57    => array(0x77),
        0x58    => array(0x78),
        0x59    => array(0x79),
        0x5A    => array(0x7A),
        0xB5    => array(0x3BC),
        0xC0    => array(0xE0),
        0xC1    => array(0xE1),
        0xC2    => array(0xE2),
        0xC3    => array(0xE3),
        0xC4    => array(0xE4),
        0xC5    => array(0xE5),
        0xC6    => array(0xE6),
        0xC7    => array(0xE7),
        0xC8    => array(0xE8),
        0xC9    => array(0xE9),
        0xCA    => array(0xEA),
        0xCB    => array(0xEB),
        0xCC    => array(0xEC),
        0xCD    => array(0xED),
        0xCE    => array(0xEE),
        0xCF    => array(0xEF),
        0xD0    => array(0xF0),
        0xD1    => array(0xF1),
        0xD2    => array(0xF2),
        0xD3    => array(0xF3),
        0xD4    => array(0xF4),
        0xD5    => array(0xF5),
        0xD6    => array(0xF6),
        0xD8    => array(0xF8),
        0xD9    => array(0xF9),
        0xDA    => array(0xFA),
        0xDB    => array(0xFB),
        0xDC    => array(0xFC),
        0xDD    => array(0xFD),
        0xDE    => array(0xFE),
        0xDF    => array(0x73, 0x73),
        0x100   => array(0x101),
        0x102   => array(0x103),
        0x104   => array(0x105),
        0x106   => array(0x107),
        0x108   => array(0x109),
        0x10A   => array(0x10B),
        0x10C   => array(0x10D),
        0x10E   => array(0x10F),
        0x110   => array(0x111),
        0x112   => array(0x113),
        0x114   => array(0x115),
        0x116   => array(0x117),
        0x118   => array(0x119),
        0x11A   => array(0x11B),
        0x11C   => array(0x11D),
        0x11E   => array(0x11F),
        0x120   => array(0x121),
        0x122   => array(0x123),
        0x124   => array(0x125),
        0x126   => array(0x127),
        0x128   => array(0x129),
        0x12A   => array(0x12B),
        0x12C   => array(0x12D),
        0x12E   => array(0x12F),
        0x130   => array(0x69, 0x307),
        0x132   => array(0x133),
        0x134   => array(0x135),
        0x136   => array(0x137),
        0x139   => array(0x13A),
        0x13B   => array(0x13C),
        0x13D   => array(0x13E),
        0x13F   => array(0x140),
        0x141   => array(0x142),
        0x143   => array(0x144),
        0x145   => array(0x146),
        0x147   => array(0x148),
        0x149   => array(0x2BC, 0x6E),
        0x14A   => array(0x14B),
        0x14C   => array(0x14D),
        0x14E   => array(0x14F),
        0x150   => array(0x151),
        0x152   => array(0x153),
        0x154   => array(0x155),
        0x156   => array(0x157),
        0x158   => array(0x159),
        0x15A   => array(0x15B),
        0x15C   => array(0x15D),
        0x15E   => array(0x15F),
        0x160   => array(0x161),
        0x162   => array(0x163),
        0x164   => array(0x165),
        0x166   => array(0x167),
        0x168   => array(0x169),
        0x16A   => array(0x16B),
        0x16C   => array(0x16D),
        0x16E   => array(0x16F),
        0x170   => array(0x171),
        0x172   => array(0x173),
        0x174   => array(0x175),
        0x176   => array(0x177),
        0x178   => array(0xFF),
        0x179   => array(0x17A),
        0x17B   => array(0x17C),
        0x17D   => array(0x17E),
        0x17F   => array(0x73),
        0x181   => array(0x253),
        0x182   => array(0x183),
        0x184   => array(0x185),
        0x186   => array(0x254),
        0x187   => array(0x188),
        0x189   => array(0x256),
        0x18A   => array(0x257),
        0x18B   => array(0x18C),
        0x18E   => array(0x1DD),
        0x18F   => array(0x259),
        0x190   => array(0x25B),
        0x191   => array(0x192),
        0x193   => array(0x260),
        0x194   => array(0x263),
        0x196   => array(0x269),
        0x197   => array(0x268),
        0x198   => array(0x199),
        0x19C   => array(0x26F),
        0x19D   => array(0x272),
        0x19F   => array(0x275),
        0x1A0   => array(0x1A1),
        0x1A2   => array(0x1A3),
        0x1A4   => array(0x1A5),
        0x1A6   => array(0x280),
        0x1A7   => array(0x1A8),
        0x1A9   => array(0x283),
        0x1AC   => array(0x1AD),
        0x1AE   => array(0x288),
        0x1AF   => array(0x1B0),
        0x1B1   => array(0x28A),
        0x1B2   => array(0x28B),
        0x1B3   => array(0x1B4),
        0x1B5   => array(0x1B6),
        0x1B7   => array(0x292),
        0x1B8   => array(0x1B9),
        0x1BC   => array(0x1BD),
        0x1C4   => array(0x1C6),
        0x1C5   => array(0x1C6),
        0x1C7   => array(0x1C9),
        0x1C8   => array(0x1C9),
        0x1CA   => array(0x1CC),
        0x1CB   => array(0x1CC),
        0x1CD   => array(0x1CE),
        0x1CF   => array(0x1D0),
        0x1D1   => array(0x1D2),
        0x1D3   => array(0x1D4),
        0x1D5   => array(0x1D6),
        0x1D7   => array(0x1D8),
        0x1D9   => array(0x1DA),
        0x1DB   => array(0x1DC),
        0x1DE   => array(0x1DF),
        0x1E0   => array(0x1E1),
        0x1E2   => array(0x1E3),
        0x1E4   => array(0x1E5),
        0x1E6   => array(0x1E7),
        0x1E8   => array(0x1E9),
        0x1EA   => array(0x1EB),
        0x1EC   => array(0x1ED),
        0x1EE   => array(0x1EF),
        0x1F0   => array(0x6A, 0x30C),
        0x1F1   => array(0x1F3),
        0x1F2   => array(0x1F3),
        0x1F4   => array(0x1F5),
        0x1F6   => array(0x195),
        0x1F7   => array(0x1BF),
        0x1F8   => array(0x1F9),
        0x1FA   => array(0x1FB),
        0x1FC   => array(0x1FD),
        0x1FE   => array(0x1FF),
        0x200   => array(0x201),
        0x202   => array(0x203),
        0x204   => array(0x205),
        0x206   => array(0x207),
        0x208   => array(0x209),
        0x20A   => array(0x20B),
        0x20C   => array(0x20D),
        0x20E   => array(0x20F),
        0x210   => array(0x211),
        0x212   => array(0x213),
        0x214   => array(0x215),
        0x216   => array(0x217),
        0x218   => array(0x219),
        0x21A   => array(0x21B),
        0x21C   => array(0x21D),
        0x21E   => array(0x21F),
        0x220   => array(0x19E),
        0x222   => array(0x223),
        0x224   => array(0x225),
        0x226   => array(0x227),
        0x228   => array(0x229),
        0x22A   => array(0x22B),
        0x22C   => array(0x22D),
        0x22E   => array(0x22F),
        0x230   => array(0x231),
        0x232   => array(0x233),
        0x345   => array(0x3B9),
        0x37A   => array(0x20, 0x3B9),
        0x386   => array(0x3AC),
        0x388   => array(0x3AD),
        0x389   => array(0x3AE),
        0x38A   => array(0x3AF),
        0x38C   => array(0x3CC),
        0x38E   => array(0x3CD),
        0x38F   => array(0x3CE),
        0x390   => array(0x3B9, 0x308, 0x301),
        0x391   => array(0x3B1),
        0x392   => array(0x3B2),
        0x393   => array(0x3B3),
        0x394   => array(0x3B4),
        0x395   => array(0x3B5),
        0x396   => array(0x3B6),
        0x397   => array(0x3B7),
        0x398   => array(0x3B8),
        0x399   => array(0x3B9),
        0x39A   => array(0x3BA),
        0x39B   => array(0x3BB),
        0x39C   => array(0x3BC),
        0x39D   => array(0x3BD),
        0x39E   => array(0x3BE),
        0x39F   => array(0x3BF),
        0x3A0   => array(0x3C0),
        0x3A1   => array(0x3C1),
        0x3A3   => array(0x3C3),
        0x3A4   => array(0x3C4),
        0x3A5   => array(0x3C5),
        0x3A6   => array(0x3C6),
        0x3A7   => array(0x3C7),
        0x3A8   => array(0x3C8),
        0x3A9   => array(0x3C9),
        0x3AA   => array(0x3CA),
        0x3AB   => array(0x3CB),
        0x3B0   => array(0x3C5, 0x308, 0x301),
        0x3C2   => array(0x3C3),
        0x3D0   => array(0x3B2),
        0x3D1   => array(0x3B8),
        0x3D2   => array(0x3C5),
        0x3D3   => array(0x3CD),
        0x3D4   => array(0x3CB),
        0x3D5   => array(0x3C6),
        0x3D6   => array(0x3C0),
        0x3D8   => array(0x3D9),
        0x3DA   => array(0x3DB),
        0x3DC   => array(0x3DD),
        0x3DE   => array(0x3DF),
        0x3E0   => array(0x3E1),
        0x3E2   => array(0x3E3),
        0x3E4   => array(0x3E5),
        0x3E6   => array(0x3E7),
        0x3E8   => array(0x3E9),
        0x3EA   => array(0x3EB),
        0x3EC   => array(0x3ED),
        0x3EE   => array(0x3EF),
        0x3F0   => array(0x3BA),
        0x3F1   => array(0x3C1),
        0x3F2   => array(0x3C3),
        0x3F4   => array(0x3B8),
        0x3F5   => array(0x3B5),
        0x400   => array(0x450),
        0x401   => array(0x451),
        0x402   => array(0x452),
        0x403   => array(0x453),
        0x404   => array(0x454),
        0x405   => array(0x455),
        0x406   => array(0x456),
        0x407   => array(0x457),
        0x408   => array(0x458),
        0x409   => array(0x459),
        0x40A   => array(0x45A),
        0x40B   => array(0x45B),
        0x40C   => array(0x45C),
        0x40D   => array(0x45D),
        0x40E   => array(0x45E),
        0x40F   => array(0x45F),
        0x410   => array(0x430),
        0x411   => array(0x431),
        0x412   => array(0x432),
        0x413   => array(0x433),
        0x414   => array(0x434),
        0x415   => array(0x435),
        0x416   => array(0x436),
        0x417   => array(0x437),
        0x418   => array(0x438),
        0x419   => array(0x439),
        0x41A   => array(0x43A),
        0x41B   => array(0x43B),
        0x41C   => array(0x43C),
        0x41D   => array(0x43D),
        0x41E   => array(0x43E),
        0x41F   => array(0x43F),
        0x420   => array(0x440),
        0x421   => array(0x441),
        0x422   => array(0x442),
        0x423   => array(0x443),
        0x424   => array(0x444),
        0x425   => array(0x445),
        0x426   => array(0x446),
        0x427   => array(0x447),
        0x428   => array(0x448),
        0x429   => array(0x449),
        0x42A   => array(0x44A),
        0x42B   => array(0x44B),
        0x42C   => array(0x44C),
        0x42D   => array(0x44D),
        0x42E   => array(0x44E),
        0x42F   => array(0x44F),
        0x460   => array(0x461),
        0x462   => array(0x463),
        0x464   => array(0x465),
        0x466   => array(0x467),
        0x468   => array(0x469),
        0x46A   => array(0x46B),
        0x46C   => array(0x46D),
        0x46E   => array(0x46F),
        0x470   => array(0x471),
        0x472   => array(0x473),
        0x474   => array(0x475),
        0x476   => array(0x477),
        0x478   => array(0x479),
        0x47A   => array(0x47B),
        0x47C   => array(0x47D),
        0x47E   => array(0x47F),
        0x480   => array(0x481),
        0x48A   => array(0x48B),
        0x48C   => array(0x48D),
        0x48E   => array(0x48F),
        0x490   => array(0x491),
        0x492   => array(0x493),
        0x494   => array(0x495),
        0x496   => array(0x497),
        0x498   => array(0x499),
        0x49A   => array(0x49B),
        0x49C   => array(0x49D),
        0x49E   => array(0x49F),
        0x4A0   => array(0x4A1),
        0x4A2   => array(0x4A3),
        0x4A4   => array(0x4A5),
        0x4A6   => array(0x4A7),
        0x4A8   => array(0x4A9),
        0x4AA   => array(0x4AB),
        0x4AC   => array(0x4AD),
        0x4AE   => array(0x4AF),
        0x4B0   => array(0x4B1),
        0x4B2   => array(0x4B3),
        0x4B4   => array(0x4B5),
        0x4B6   => array(0x4B7),
        0x4B8   => array(0x4B9),
        0x4BA   => array(0x4BB),
        0x4BC   => array(0x4BD),
        0x4BE   => array(0x4BF),
        0x4C1   => array(0x4C2),
        0x4C3   => array(0x4C4),
        0x4C5   => array(0x4C6),
        0x4C7   => array(0x4C8),
        0x4C9   => array(0x4CA),
        0x4CB   => array(0x4CC),
        0x4CD   => array(0x4CE),
        0x4D0   => array(0x4D1),
        0x4D2   => array(0x4D3),
        0x4D4   => array(0x4D5),
        0x4D6   => array(0x4D7),
        0x4D8   => array(0x4D9),
        0x4DA   => array(0x4DB),
        0x4DC   => array(0x4DD),
        0x4DE   => array(0x4DF),
        0x4E0   => array(0x4E1),
        0x4E2   => array(0x4E3),
        0x4E4   => array(0x4E5),
        0x4E6   => array(0x4E7),
        0x4E8   => array(0x4E9),
        0x4EA   => array(0x4EB),
        0x4EC   => array(0x4ED),
        0x4EE   => array(0x4EF),
        0x4F0   => array(0x4F1),
        0x4F2   => array(0x4F3),
        0x4F4   => array(0x4F5),
        0x4F8   => array(0x4F9),
        0x500   => array(0x501),
        0x502   => array(0x503),
        0x504   => array(0x505),
        0x506   => array(0x507),
        0x508   => array(0x509),
        0x50A   => array(0x50B),
        0x50C   => array(0
<?php
/***************************************************************************
 *                                                                          *
 *   (c) 2004 Vladimir V. Kalynyak, Alexey V. Vinokurov, Ilya M. Shalnev    *
 *                                                                          *
 * This  is  commercial  software,  only  users  who have purchased a valid *
 * license  and  accept  to the terms of the  License Agreement can install *
 * and use this program.                                                    *
 *                                                                          *
 ****************************************************************************
 * PLEASE READ THE FULL TEXT  OF THE SOFTWARE  LICENSE   AGREEMENT  IN  THE *
 * "copyright.txt" FILE PROVIDED WITH THIS DISTRIBUTION PACKAGE.            *
 ****************************************************************************/

if (!defined('BOOTSTRAP')) { die('Access denied'); }

use Tygh\Enum\ImagePairTypes;
use Tygh\Enum\YesNo;
use Tygh\Providers\StorefrontProvider;
use Tygh\Storage;
use Tygh\Tools\Archivers\ArchiverException;
use Tygh\Addons\MobileApp\GoogleServicesConfig;

$storefront_id = !empty($_REQUEST['storefront_id']) && (int) $_REQUEST['storefront_id']
    ? (int) $_REQUEST['storefront_id']
    : StorefrontProvider::getStorefront()->storefront_id;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($mode === 'download_config') {
        fn_set_progress('set_scale', 10);
        fn_set_progress('title', __('mobile_app.preparing_config'));
        fn_set_progress('echo', __('mobile_app.preparing_config'));
        fn_set_progress('parts', 7);
        $settings = fn_mobile_app_get_mobile_app_settings($storefront_id);
        $images = fn_mobile_app_get_mobile_app_images($storefront_id);
        $working_dir = fn_mobile_app_get_working_dir();

        Storage::instance('custom_files')->deleteDir($working_dir);

        $files_schema = fn_get_schema('mobile_app', 'config_files');

        foreach ($files_schema as $file_schema) {
            Storage::instance('custom_files')->put(
                implode(DIRECTORY_SEPARATOR, [$working_dir, $file_schema['path']]),
                [
                    'contents'  => fn_mobile_app_generate_file_content_from_settings($file_schema, $settings),
                    'overwrite' => true,
                ]
            );
        }

        if (GoogleServicesConfig::isExist($storefront_id)) {
            $g_config_file_path = GoogleServicesConfig::getFilePath($storefront_id);
            Storage::instance('custom_files')->put(
                implode(DIRECTORY_SEPARATOR, [$working_dir, 'android', 'app', 'google-services.json']),
                [
                    'file'         => $g_config_file_path,
                    'keep_origins' => true,
                    'overwrite'    => true,
                ]
            );
        }

        $schema = fn_get_schema('mobile_app', 'app_settings');
        $crop_when_resize = isset($settings['app_settings']['images']['crop_when_resize'])
            ? YesNo::toBool($settings['app_settings']['images']['crop_when_resize'])
            : false;

        foreach ($schema['images'] as $key => $image_types_schema) {
            $name = $image_types_schema['image_params']['name'];
            $pair_data = fn_get_image_pairs($storefront_id, $image_types_schema['type'], ImagePairTypes::MAIN);

            if (empty($pair_data)) {
                // TODO: set error notification
                continue;
            }

            if (!empty($image_types_schema['image_params']['skip_resize'])) {
                fn_mobile_app_get_common_images($image_types_schema, $pair_data, $crop_when_resize);
            }

            if (isset($schema['image_sizes']['android'][$name])) {
                fn_set_progress('echo', __('mobile_app.preparing_android_images'));
                $image_sizes_schema = $schema['image_sizes']['android'][$name];

                fn_mobile_app_resize_android_images($image_types_schema, $image_sizes_schema, $pair_data, $crop_when_resize);
            }

            if (isset($schema['image_sizes']['ios'][$name])) {
                $image_sizes_schema = $schema['image_sizes']['ios'][$name];

                if ($name === 'icon') {
                    fn_set_progress('echo', __('mobile_app.preparing_ios_icons'));
                    fn_mobile_app_resize_ios_icons($image_types_schema, $image_sizes_schema, $pair_data, $crop_when_resize);
                } else {
                    fn_set_progress('echo', __('mobile_app.preparing_ios_images'));
                    fn_mobile_app_resize_ios_images($image_types_schema, $image_sizes_schema, $pair_data, $crop_when_resize);
                }
            }
        }

        $archive_path = fn_mobile_app_get_archive_full_path();

        $working_dir = fn_mobile_app_get_working_dir();
        $files_to_archive = Storage::instance('custom_files')->getAbsolutePath($working_dir);

        /** @var \Tygh\Tools\Archiver $archiver */
        $archiver = Tygh::$app['archiver'];

        try {
            fn_set_progress('echo', __('mobile_app.preparing_archive'));
            fn_rm($archive_path);
            $result = $archiver->compress($archive_path, array($files_to_archive));
        } catch (ArchiverException $e) {
            fn_set_notification('E', __('error'), $e->getMessage());
        }

        if (defined('AJAX_REQUEST') && !empty($result)) {
            Tygh::$app['ajax']->assign('force_redirection', fn_url('mobile_app.get_file'));
            exit;
        }

        return [CONTROLLER_STATUS_REDIRECT, 'addons.update&addon=mobile_app'];
    }

    if ($mode === 'delete_google_config_file') {
        GoogleServicesConfig::deleteFile($storefront_id);
        return [CONTROLLER_STATUS_REDIRECT, 'addons.update&addon=mobile_app&storefront_id=' . $storefront_id];
    }

    return [CONTROLLER_STATUS_OK];
}

if ($mode === 'get_file') {
    $archive_path = fn_mobile_app_get_archive_full_path();

    if (file_exists($archive_path)) {
        fn_get_file($archive_path, '', true);
    }
} elseif ($mode === 'get_google_config_file') {
    GoogleServicesConfig::getFile($storefront_id);
}

<?php

/**
 * Base class for elFinder volume.
 * Provide 2 layers:
 *  1. Public API (commands)
 *  2. abstract fs API
 * All abstract methods begin with "_"
 *
 * @author Dmitry (dio) Levashov
 * @author Troex Nevelin
 * @author Alexey Sukhotin
 * @method netmountPrepare(array $options)
 * @method postNetmount(array $options)
 */
abstract class elFinderVolumeDriver
{

    /**
     * Net mount key
     *
     * @var string
     **/
    public $netMountKey = '';

    /**
     * Request args
     * $_POST or $_GET values
     *
     * @var array
     */
    protected $ARGS = array();

    /**
     * Driver id
     * Must be started from letter and contains [a-z0-9]
     * Used as part of volume id
     *
     * @var string
     **/
    protected $driverId = 'a';

    /**
     * Volume id - used as prefix for files hashes
     *
     * @var string
     **/
    protected $id = '';

    /**
     * Flag - volume "mounted" and available
     *
     * @var bool
     **/
    protected $mounted = false;

    /**
     * Root directory path
     *
     * @var string
     **/
    protected $root = '';

    /**
     * Root basename | alias
     *
     * @var string
     **/
    protected $rootName = '';

    /**
     * Default directory to open
     *
     * @var string
     **/
    protected $startPath = '';

    /**
     * Base URL
     *
     * @var string
     **/
    protected $URL = '';

    /**
     * Path to temporary directory
     *
     * @var string
     */
    protected $tmp;

    /**
     * A file save destination path when a temporary content URL is required
     * on a network volume or the like
     * If not specified, it tries to use "Connector Path/../files/.tmb".
     *
     * @var string
     */
    protected $tmpLinkPath = '';

    /**
     * A file save destination URL when a temporary content URL is required
     * on a network volume or the like
     * If not specified, it tries to use "Connector URL/../files/.tmb".
     *
     * @var string
     */
    protected $tmpLinkUrl = '';

    /**
     * Thumbnails dir path
     *
     * @var string
     **/
    protected $tmbPath = '';

    /**
     * Is thumbnails dir writable
     *
     * @var bool
     **/
    protected $tmbPathWritable = false;

    /**
     * Thumbnails base URL
     *
     * @var string
     **/
    protected $tmbURL = '';

    /**
     * Thumbnails size in px
     *
     * @var int
     **/
    protected $tmbSize = 48;

    /**
     * Image manipulation lib name
     * auto|imagick|gd|convert
     *
     * @var string
     **/
    protected $imgLib = 'auto';

    /**
     * Video to Image converter
     *
     * @var array
     */
    protected $imgConverter = array();

    /**
     * Library to crypt files name
     *
     * @var string
     **/
    protected $cryptLib = '';

    /**
     * Archivers config
     *
     * @var array
     **/
    protected $archivers = array(
        'create' => array(),
        'extract' => array()
    );

    /**
     * Static var of $this->options['maxArcFilesSize']
     * 
     * @var int|string
     */
    protected static $maxArcFilesSize;

    /**
     * Server character encoding
     *
     * @var string or null
     **/
    protected $encoding = null;

    /**
     * How many subdirs levels return for tree
     *
     * @var int
     **/
    protected $treeDeep = 1;

    /**
     * Errors from last failed action
     *
     * @var array
     **/
    protected $error = array();

    /**
     * Today 24:00 timestamp
     *
     * @var int
     **/
    protected $today = 0;

    /**
     * Yesterday 24:00 timestamp
     *
     * @var int
     **/
    protected $yesterday = 0;

    /**
     * Force make dirctory on extract
     *
     * @var int
     **/
    protected $extractToNewdir = 'auto';

    /**
     * Object configuration
     *
     * @var array
     **/
    protected $options = array(
        // Driver ID (Prefix of volume ID), Normally, the value specified for each volume driver is used.
        'driverId' => '',
        // Id (Suffix of volume ID), Normally, the number incremented according to the specified number of volumes is used.
        'id' => '',
        // revision id of root directory that uses for caching control of root stat
        'rootRev' => '',
        // driver type it uses volume root's CSS class name. e.g. 'group' -> Adds 'elfinder-group' to CSS class name.
        'type' => '',
        // root directory path
        'path' => '',
        // Folder hash value on elFinder to be the parent of this volume
        'phash' => '',
        // Folder hash value on elFinder to trash bin of this volume, it require 'copyJoin' to true
        'trashHash' => '',
        // open this path on initial request instead of root path
        'startPath' => '',
        // how many subdirs levels return per request
        'treeDeep' => 1,
        // root url, not set to URL via the connector. If you want to hide the file URL, do not set this value. (replacement for old "fileURL" option)
        'URL' => '',
        // enable onetime URL to a file - (true, false, 'auto' (true if a temporary directory is available) or callable (A function that return onetime URL))
        'onetimeUrl' => 'auto',
        // directory link url to own manager url with folder hash (`true`, `false`, `'hide'`(No show) or default `'auto'`: URL is empty then `true` else `false`)
        'dirUrlOwn' => 'auto',
        // directory separator. required by client to show paths correctly
        'separator' => DIRECTORY_SEPARATOR,
        // Use '/' as directory separator when the path hash encode/decode on the Windows server too
        'winHashFix' => false,
        // Server character encoding (default is '': UTF-8)
        'encoding' => '',
        // for convert character encoding (default is '': Not change locale)
        'locale' => '',
        // URL of volume icon image
        'icon' => '',
        // CSS Class of volume root in tree
        'rootCssClass' => '',
        // Items to disable session caching
        'noSessionCache' => array(),
        // enable i18n folder name that convert name to elFinderInstance.messages['folder_'+name]
        'i18nFolderName' => false,
        // Search timeout (sec)
        'searchTimeout' => 30,
        // Search exclusion directory regex pattern (require demiliter e.g. '#/path/to/exclude_directory#i')
        'searchExDirReg' => '',
        // library to crypt/uncrypt files names (not implemented)
        'cryptLib' => '',
        // how to detect files mimetypes. (auto/internal/finfo/mime_content_type)
        'mimeDetect' => 'auto',
        // mime.types file path (for mimeDetect==internal)
        'mimefile' => '',
        // Static extension/MIME of general server side scripts to security issues
        'staticMineMap' => array(
            'php:*' => 'text/x-php',
            'pht:*' => 'text/x-php',
            'php3:*' => 'text/x-php',
            'php4:*' => 'text/x-php',
            'php5:*' => 'text/x-php',
            'php7:*' => 'text/x-php',
            'phtml:*' => 'text/x-php',
            'cgi:*' => 'text/x-httpd-cgi',
            'pl:*' => 'text/x-perl',
            'asp:*' => 'text/x-asap',
            'aspx:*' => 'text/x-asap',
            'py:*' => 'text/x-python',
            'rb:*' => 'text/x-ruby',
            'jsp:*' => 'text/x-jsp'
        ),
        // mime type normalize map : Array '[ext]:[detected mime type]' => '[normalized mime]'
        'mimeMap' => array(
            'md:application/x-genesis-rom' => 'text/x-markdown',
            'md:text/plain' => 'text/x-markdown',
            'markdown:text/plain' => 'text/x-markdown',
            'css:text/x-asm' => 'text/css',
            'css:text/plain' => 'text/css',
            'csv:text/plain' => 'text/csv',
            'java:text/x-c' => 'text/x-java-source',
            'json:text/plain' => 'application/json',
            'sql:text/plain' => 'text/x-sql',
            'rtf:text/rtf' => 'application/rtf',
            'rtfd:text/rtfd' => 'application/rtfd',
            'ico:image/vnd.microsoft.icon' => 'image/x-icon',
            'svg:text/plain' => 'image/svg+xml',
            'pxd:application/octet-stream' => 'image/x-pixlr-data',
            'dng:image/tiff' => 'image/x-adobe-dng',
            'sketch:application/zip' => 'image/x-sketch',
            'sketch:application/octet-stream' => 'image/x-sketch',
            'xcf:application/octet-stream' => 'image/x-xcf',
            'amr:application/octet-stream' => 'audio/amr',
            'm4a:video/mp4' => 'audio/mp4',
            'oga:application/ogg' => 'audio/ogg',
            'ogv:application/ogg' => 'video/ogg',
            'zip:application/x-zip' => 'application/zip',
            'm3u8:text/plain' => 'application/x-mpegURL',
            'mpd:text/plain' => 'application/dash+xml',
            'mpd:application/xml' => 'application/dash+xml',
            '*:application/x-dosexec' => 'application/x-executable',
            'doc:application/vnd.ms-office' => 'application/msword',
            'xls:application/vnd.ms-office' => 'application/vnd.ms-excel',
            'ppt:application/vnd.ms-office' => 'application/vnd.ms-powerpoint',
            'yml:text/plain' => 'text/x-yaml',
            'ai:application/pdf' => 'application/postscript',
            'cgm:text/plain' => 'image/cgm',
            'dxf:text/plain' => 'image/vnd.dxf',
            'dds:application/octet-stream' => 'image/vnd-ms.dds',
            'hpgl:text/plain' => 'application/vnd.hp-hpgl',
            'igs:text/plain' => 'model/iges',
            'iges:text/plain' => 'model/iges',
            'plt:application/octet-stream' => 'application/plt',
            'plt:text/plain' => 'application/plt',
            'sat:text/plain' => 'application/sat',
            'step:text/plain' => 'application/step',
            'stp:text/plain' => 'application/step'
        ),
        // An option to add MimeMap to the `mimeMap` option
        // Array '[ext]:[detected mime type]' => '[normalized mime]'
        'additionalMimeMap' => array(),
        // MIME-Type of filetype detected as unknown
        'mimeTypeUnknown' => 'application/octet-stream',
        // MIME regex of send HTTP header "Content-Disposition: inline" or allow preview in quicklook
        // '.' is allow inline of all of MIME types
        // '$^' is not allow inline of all of MIME types
        'dispInlineRegex' => '^(?:(?:video|audio)|image/(?!.+\+xml)|application/(?:ogg|x-mpegURL|dash\+xml)|(?:text/plain|application/pdf)$)',
        // temporary content URL's base path
        'tmpLinkPath' => '',
        // temporary content URL's base URL
        'tmpLinkUrl' => '',
        // directory for thumbnails
        'tmbPath' => '.tmb',
        // mode to create thumbnails dir
        'tmbPathMode' => 0777,
        // thumbnails dir URL. Set it if store thumbnails outside root directory
        'tmbURL' => '',
        // thumbnails size (px)
        'tmbSize' => 48,
        // thumbnails crop (true - crop, false - scale image to fit thumbnail size)
        'tmbCrop' => true,
        // thumbnail URL require custom data as the GET query
        'tmbReqCustomData' => false,
        // thumbnails background color (hex #rrggbb or 'transparent')
        'tmbBgColor' => 'transparent',
        // image rotate fallback background color (hex #rrggbb)
        'bgColorFb' => '#ffffff',
        // image manipulations library (imagick|gd|convert|auto|none, none - Does not check the image library at all.)
        'imgLib' => 'auto',
        // Fallback self image to thumbnail (nothing imgLib)
        'tmbFbSelf' => true,
        // Video to Image converters ['TYPE or MIME' => ['func' => function($file){ /* Converts $file to Image */ return true; }, 'maxlen' => (int)TransferLength]]
        'imgConverter' => array(),
        // Max length of transfer to image converter
        'tmbVideoConvLen' => 10000000,
        // Captre point seccond
        'tmbVideoConvSec' => 6,
        // Life time (hour) for thumbnail garbage collection ("0" means no GC)
        'tmbGcMaxlifeHour' => 0,
        // Percentage of garbage collection executed for thumbnail creation command ("1" means "1%")
        'tmbGcPercentage' => 1,
        // Resource path of fallback icon images defailt: php/resouces
        'resourcePath' => '',
        // Jpeg image saveing quality
        'jpgQuality' => 100,
        // Save as progressive JPEG on image editing
        'jpgProgressive' => true,
        // enable to get substitute image with command `dim`
        'substituteImg' => true,
        // on paste file -  if true - old file will be replaced with new one, if false new file get name - original_name-number.ext
        'copyOverwrite' => true,
        // if true - join new and old directories content on paste
        'copyJoin' => true,
        // on upload -  if true - old file will be replaced with new one, if false new file get name - original_name-number.ext
        'uploadOverwrite' => true,
        // mimetypes allowed to upload
        'uploadAllow' => array(),
        // mimetypes not allowed to upload
        'uploadDeny' => array(),
        // order to process uploadAllow and uploadDeny options
        'uploadOrder' => array('deny', 'allow'),
        // maximum upload file size. NOTE - this is size for every uploaded files
        'uploadMaxSize' => 0,
        // maximum number of chunked upload connection. `-1` to disable chunked upload
        'uploadMaxConn' => 3,
        // maximum get file size. NOTE - Maximum value is 50% of PHP memory_limit
        'getMaxSize' => 0,
        // files dates format
        'dateFormat' => 'j M Y H:i',
        // files time format
        'timeFormat' => 'H:i',
        // if true - every folder will be check for children folders, -1 - every folder will be check asynchronously, false -  all folders will be marked as having subfolders
        'checkSubfolders' => true, // true, false or -1
        // allow to copy from this volume to other ones?
        'copyFrom' => true,
        // allow to copy from other volumes to this one?
        'copyTo' => true,
        // cmd duplicate suffix format e.g. '_%s_' to without spaces
        'duplicateSuffix' => ' %s ',
        // unique name numbar format e.g. '(%d)' to (1), (2)...
        'uniqueNumFormat' => '%d',
        // list of commands disabled on this root
        'disabled' => array(),
        // enable file owner, group & mode info, `false` to inactivate "chmod" command.
        'statOwner' => false,
        // allow exec chmod of read-only files
        'allowChmodReadOnly' => false,
        // regexp or function name to validate new file name
        'acceptedName' => '/^[^\.].*/', // Notice: overwritten it in some volume drivers contractor
        // regexp or function name to validate new directory name
        'acceptedDirname' => '', // used `acceptedName` if empty value
        // function/class method to control files permissions
        'accessControl' => null,
        // some data required by access control
        'accessControlData' => null,
        // root stat that return without asking the system when mounted and not the current volume. Query to the system with false. array|false
        'rapidRootStat' => array(
            'read' => true,
            'write' => true,
            'locked' => false,
            'hidden' => false,
            'size' => 0,  // Unknown
            'ts' => 0,    // Unknown
            'dirs' => -1, // Check on demand for subdirectories
            'mime' => 'directory'
        ),
        // default permissions.
        'defaults' => array(
            'read' => true,
            'write' => true,
            'locked' => false,
            'hidden' => false
        ),
        // files attributes
        'attributes' => array(),
        // max allowed archive files size (0 - no limit)
        'maxArcFilesSize' => '2G',
        // Allowed archive's mimetypes to create. Leave empty for all available types.
        'archiveMimes' => array(),
        // Manual config for archivers. See example below. Leave empty for auto detect
        'archivers' => array(),
        // Use Archive function for remote volume
        'useRemoteArchive' => false,
        // plugin settings
        'plugin' => array(),
        // Is support parent directory time stamp update on add|remove|rename item
        // Default `null` is auto detection that is LocalFileSystem, FTP or Dropbox are `true`
        'syncChkAsTs' => null,
        // Long pooling sync checker function for syncChkAsTs is true
        // Calls with args (TARGET DIRCTORY PATH, STAND-BY(sec), OLD TIMESTAMP, VOLUME DRIVER INSTANCE, ELFINDER INSTANCE)
        // This function must return the following values. Changed: New Timestamp or Same: Old Timestamp or Error: false
        // Default `null` is try use elFinderVolumeLocalFileSystem::localFileSystemInotify() on LocalFileSystem driver
        // another driver use elFinder stat() checker
        'syncCheckFunc' => null,
        // Long polling sync stand-by time (sec)
        'plStandby' => 30,
        // Sleep time (sec) for elFinder stat() checker (syncChkAsTs is true)
        'tsPlSleep' => 10,
        // Sleep time (sec) for elFinder ls() checker (syncChkAsTs is false)
        'lsPlSleep' => 30,
        // Client side sync interval minimum (ms)
        // Default `null` is auto set to ('tsPlSleep' or 'lsPlSleep') * 1000
        // `0` to disable auto sync
        'syncMinMs' => null,
        // required to fix bug on macos
        // However, we recommend to use the Normalizer plugin instead this option
        'utf8fix' => false,
        //                           й                 ё              Й               Ё              Ø         Å
        'utf8patterns' => array("\u0438\u0306", "\u0435\u0308", "\u0418\u0306", "\u0415\u0308", "\u00d8A", "\u030a"),
        'utf8replace' => array("\u0439", "\u0451", "\u0419", "\u0401", "\u00d8", "\u00c5"),
        // cache control HTTP headers for commands `file` and  `get`
        'cacheHeaders' => array(
            'Cache-Control: max-age=3600',
            'Expires:',
            'Pragma:'
        ),
        // Header to use to accelerate sending local files to clients (e.g. 'X-Sendfile', 'X-Accel-Redirect')
        'xsendfile' => '',
        // Root path to xsendfile target. Probably, this is required for 'X-Accel-Redirect' on Nginx.
        'xsendfilePath' => ''
    );

    /**
     * Defaults permissions
     *
     * @var array
     **/
    protected $defaults = array(
        'read' => true,
        'write' => true,
        'locked' => false,
        'hidden' => false
    );

    /**
     * Access control function/class
     *
     * @var mixed
     **/
    protected $attributes = array();

    /**
     * Access control function/class
     *
     * @var mixed
     **/
    protected $access = null;

    /**
     * Mime types allowed to upload
     *
     * @var array
     **/
    protected $uploadAllow = array();

    /**
     * Mime types denied to upload
     *
     * @var array
     **/
    protected $uploadDeny = array();

    /**
     * Order to validate uploadAllow and uploadDeny
     *
     * @var array
     **/
    protected $uploadOrder = array();

    /**
     * Maximum allowed upload file size.
     * Set as number or string with unit - "10M", "500K", "1G"
     *
     * @var int|string
     **/
    protected $uploadMaxSize = 0;

    /**
     * Run time setting of overwrite items on upload
     *
     * @var string
     */
    protected $uploadOverwrite = true;

    /**
     * Maximum allowed get file size.
     * Set as number or string with unit - "10M", "500K", "1G"
     *
     * @var int|string
     **/
    protected $getMaxSize = -1;

    /**
     * Mimetype detect method
     *
     * @var string
     **/
    protected $mimeDetect = 'auto';

    /**
     * Flag - mimetypes from externail file was loaded
     *
     * @var bool
     **/
    private static $mimetypesLoaded = false
<?php
/***************************************************************************
*                                                                          *
*   (c) 2004 Vladimir V. Kalynyak, Alexey V. Vinokurov, Ilya M. Shalnev    *
*                                                                          *
* This  is  commercial  software,  only  users  who have purchased a valid *
* license  and  accept  to the terms of the  License Agreement can install *
* and use this program.                                                    *
*                                                                          *
****************************************************************************
* PLEASE READ THE FULL TEXT  OF THE SOFTWARE  LICENSE   AGREEMENT  IN  THE *
* "copyright.txt" FILE PROVIDED WITH THIS DISTRIBUTION PACKAGE.            *
****************************************************************************/

namespace Tygh\Backend\Storage;

use Aws\Credentials\Credentials;
use Aws\S3\S3Client;
use Aws\Exception\AwsException;
use Aws\S3\S3UriParser;
use Tygh\Storage;
use Tygh\Registry;

class Amazon extends ABackend
{
    const LOCATION = 'remote';

    /**
     * @var S3Client
     */
    private $_s3;
    private $_buckets;

    /**
     * Copy file outside the storage
     *
     * @param  string $src  file path in storage
     * @param  string $dest path to local file
     * @return bool
     */
    public function export($src, $dest)
    {
        if (!fn_mkdir(dirname($dest))) {
            return false;
        }

        try {
            $object_result = $this->s3()->getObject([
                'Bucket' => $this->getOption('bucket'),
                'Key' => $this->prefix($src),
                'SaveAs' => $dest
            ]);
        } catch (AwsException $e) {
            fn_set_notification('E', __('error'), (string) $e->getMessage());
        }

        if (!empty($object_result)) {
            return true;
        }

        return false;
    }

    /**
     * Put file to storage
     *
     * @param  string $file   file path in storage
     * @param  array  $params uploaded data and options
     * @return array  file size and file name, boolean false otherwise
     */
    public function put($file, $params)
    {
        if (empty($params['overwrite'])) {
            $file = $this->generateName($file); // check if name is unique and generate new if not
        }
        $file = $this->prefix($file);

        $s3 = $this->s3(); // get object to initialize class and get access to contstants below

        $data = []; // params to put object

        $data['acl'] = 'public-read';

        if (!empty($params['compress'])) {

            $data['content_encoding'] = 'gzip';
            $data['cache_control'] = 'private';

            if (!empty($params['contents'])) {
                $params['contents'] = gzencode($params['contents']);
            }
        }

        // File can not be accessible via direct link
        if ($this->getOption('secured')) {
            $data['content_disposition'] = 'attachment';
            $data['acl'] = 'private';
        }

        $data['content_type'] = fn_get_file_type($file);

        if (!empty($params['contents'])) {
            $data['body'] = $params['contents'];
        } else {
            $data['fileUpload'] = $params['file'];
        }

        try {
            $put_object_result = $s3->putObject([
                'Bucket' => $this->getOption('bucket'),
                'Key' => $file,
                'SourceFile' => $params['file'],
                'ACL' => $data['acl'],
                'Body' => !empty($data['body']) ? $data['body'] : '',
                'CacheControl' => !empty($data['cache_control']) ? $data['cache_control'] : '',
                'ContentDisposition' => !empty($data['content_disposition']) ? $data['content_disposition'] : '',
                'ContentEncoding' => !empty($data['content_encoding']) ? $data['content_encoding'] : '',
                'ContentType' => $data['content_type']
            ]);
        } catch (AwsException $e) {
            fn_set_notification('E', __('error'), (string) $e->getMessage());
        }

        if (!empty($put_object_result)) {

            if (!empty($params['caching'])) {
                Registry::set('s3_' . $this->getOption('bucket') . '.' . md5($file), true);
            }

            if (!empty($params['file'])) {
                $filesize = filesize($params['file']);

                if (empty($params['keep_origins'])) {
                    fn_rm($params['file']);
                }
            } else {
                $filesize = strlen($params['contents']);
            }

            return array($filesize, str_replace($this->prefix(), '', $file));
        }

        return false;
    }

    /**
     * Put directory to storage
     *
     * @param  string  $dir    directory to get files from
     * @param  array   $params additional parameters
     * @return boolean true of success, false on fail
     */
    public function putDir($dir, $params = array())
    {
        $s3 = $this->s3(); // get object to initialize class and get access to contstants below

        $files = fn_get_dir_contents($dir, false, true, '', '', true);
        fn_set_progress('step_scale', sizeof($files));

        $data = []; // params to put object

        foreach ($files as $source_file) {
            fn_set_progress('echo', '.');

            $data['acl'] = 'public-read';

            // File can not be accessible via direct link
            if ($this->getOption('secured')) {
                $data['content_disposition'] = 'attachment';
                $data['acl'] = 'private';
            }

            $data['contentType'] = fn_get_file_type($source_file);
            $data['fileUpload'] = $dir . '/' . $source_file;

            try {
                $put_object_result = $s3->putObject([
                    'Bucket' => $this->getOption('bucket'),
                    'Key' => fn_basename($dir) . '/' . $source_file,
                    'SourceFile' => $data['fileUpload'],
                    'ACL' => $data['acl'],
                    'Body' => !empty($data['body']) ? $data['body'] : '',
                    'CacheControl' => !empty($data['cache_control']) ? $data['cache_control'] : '',
                    'ContentDisposition' => !empty($data['content_disposition']) ? $data['content_disposition'] : '',
                    'ContentEncoding' => !empty($data['content_encoding']) ? $data['content_encoding'] : '',
                    'ContentType' => $data['content_type']
                ]);
            } catch (AwsException $e) {
                fn_set_notification('E', __('error'), (string) $e->getMessage());
            }

        }

        return true;
    }

    /**
     * Get file URL
     *
     * @param string $file     File to get URL
     * @param string $protocol Protocol (http, https or short)
     * @param string $url      Storefront URL
     *
     * @return string file URL
     */
    public function getUrl($file = '', $protocol = '', $url = '')
    {
        if (strpos($file, '://') !== false) {
            return $file;
        }

        if ($protocol == 'http') {
            $prefix = 'http://';
        } elseif ($protocol == 'https') {
            $prefix = 'https://';
        } elseif ($protocol == 'short') {
            $prefix = '//';
        } else {
            $prefix = defined('HTTPS') ? 'https://' : 'http://';
        }

        $host = $this->getOption('host');
        if (empty($host)) {
            $host = $this->getOption('region');
        }
        $host .= '/' . $this->getOption('bucket');

        return $prefix . $host . '/' . $this->prefix($file);
    }

    /**
     * Gets absolute path to file
     *
     * @param  string $file file to get path
     * @return string absolute path
     */
    public function getAbsolutePath($file)
    {
        return $this->getUrl($file);
    }

    /**
     * Push file contents to browser, link to file is active for one hour
     *
     * @param  string $file     file to push
     * @param  string $filename file name to be displayed in download dialog, not supported
     * @return void
     */
    public function get($file, $filename = '')
    {
        header('Location: ' . $this->s3()->getObjectUrl($this->getOption('bucket'), $this->prefix($file)));
    }

    /**
     * Deletes file
     *
     * @param  string  $file file to delete
     * @return boolean true if deleted successfully, false - otherwise
     */
    public function delete($file)
    {
        $file = $this->prefix($file);

        try {
            $delete_result = $this->s3()->deleteObject([
                'Bucket' => $this->getOption('bucket'),
                'Key' => $file
            ]);
        } catch (AwsException $e) {
            fn_set_notification('E', __('error'), (string) $e->getMessage());
        }

        if (!empty($delete_result)) {
            $cache_name = 's3_' . $this->getOption('bucket');
            Registry::registerCache($cache_name, array(), Registry::cacheLevel('static'), true);
            Registry::del($cache_name . '.' . md5($file));

            return true;
        }

        return false;
    }

    /**
     * Deletes directory and all it files
     *
     * @param  string  $dir directory to delete
     * @return boolean true if deleted successfully
     */
    public function deleteDir($dir = '')
    {
        $dir = rtrim($this->prefix($dir), '/') . '/';

        try {
            $this->s3()->deleteMatchingObjects($this->getOption('bucket'), $dir);
        } catch (AwsException $e) {
            fn_set_notification('E', __('error'), (string) $e->getMessage());
        }

        return true;
    }

    /**
     * Deletes files using glob pattern
     *
     * @param  string  $pattern glob-compatible pattern
     * @return boolean true if deleted successfully
     */
    public function deleteByPattern($pattern)
    {
        $p = preg_quote($this->prefix($pattern), '/');
        $p = preg_quote($pattern, '/');
        $p = str_replace('\*', '[^\/]*', $p);
        $p = str_replace('\?', '.', $p);

        try {
            $this->s3()->deleteMatchingObjects($this->getOption('bucket'), null, sprintf('/%s/i', $p));
        } catch (AwsException $e) {
            fn_set_notification('E', __('error'), (string) $e->getMessage());
        }

        return true;
    }

    /**
     * Checks if file exists
     *
     * @param  string  $file     file to check
     * @param  string  $in_cache indicates that file existance should be checked in cache only (useful for non-local storages)
     * @return boolean true if exists, false - otherwise
     */
    public function isExist($file, $in_cache = false)
    {
        $file = $this->prefix($file);

        $cache_name = 's3_' . $this->getOption('bucket');
        Registry::registerCache($cache_name, array(), Registry::cacheLevel('static'), true);
        $is_exist = Registry::get($cache_name . '.' . md5($file));

        if ($in_cache == false && $is_exist == false && $is_exist = $this->s3()->doesObjectExist($this->getOption('bucket'), $file)) {
            Registry::set($cache_name . '.' . md5($file), true);
        }

        return $is_exist;
    }

    /**
     * Copy files inside storage (FIXME: now supports max 1000 items to copy)
     *
     * @param  string  $src  source file/directory
     * @param  string  $dest destination file/directory
     * @return boolean true if copied successfully, false - otherwise
     */
    public function copy($src, $dest)
    {
        $src = $this->prefix($src);
        $dest = $this->prefix($dest);

        try {
            $result_copy_objects = $this->s3()->copyObject([
                'Bucket' => $this->getOption('bucket'),
                'Key' => $dest,
                'CopySource' => $this->getOption('bucket') . '/' .$src
            ]);
        } catch (AwsException $e) {
            fn_set_notification('E', __('error'), (string) $e->getMessage());
        }

        if (!empty($result_copy_objects)) {
            return true;
        }

        return false;
    }

    /**
     * Lists files
     * @param  string $prefix path prefix
     * @return array  files list
     */
    public function getList($prefix = '')
    {
        $prefix = $this->prefix($prefix);

        try {
            $result_list_objects = $this->s3()->listObjects([
                'Bucket' => $this->getOption('bucket'),
                'Prefix' => $prefix
            ]);
        } catch (AwsException $e) {
            fn_set_notification('E', __('error'), (string) $e->getMessage());
        }

        $object_list = [];
        if (!empty($result_list_objects)) {
            foreach ($result_list_objects->toArray()['Contents'] as $key => $value) {
                $object_list[] = $value['Key'];
            }
        }

        if (!empty($object_list)) {
            $prefix_len = strlen($prefix);
            foreach ($object_list as $item_key => $item) {
                $object_list[$item_key] = substr_replace($item, '', 0, $prefix_len);
            }
        }

        return $object_list;
    }

    /**
     * Adds prefix to file path
     *
     * @param  string $file file
     * @return string prefixed file path
     */
    protected function prefix($file = '')
    {
        $path = parent::prefix($file);

        fn_set_hook('storage_prefix', $path, $this->type);

        return $path;
    }

    /**
     * Tests storage settings
     *
     * @param  array $settings settings list
     * @return mixed boolean true if settings are correct, error message (string) otherwise
     */
    public function testSettings($settings)
    {
        $old_options = $this->options;

        $this->options = fn_array_merge($this->options, $settings);
        $this->_s3 = null;

        $result = $this->s3();

        $this->_s3 = null;
        $this->options = $old_options;

        if (is_object($result)) {
            return true;
        }

        return false;
    }

    /**
     * Gets s3 object
     *
     * @return S3Client s3 object
     */
    public function s3()
    {
        if (empty($this->_s3)) {

            $credentials = new Credentials($this->getOption('key'), $this->getOption('secret'));

            $parse_uri = (new S3UriParser())->parse('http://' . $this->getOption('region'));

            $this->_s3 = new S3Client([
                'region' => $parse_uri['region'],
                'version' => 'latest',
                'credentials' => $credentials
            ]);

            $bucket_list = [];
            foreach ($this->_s3->listBuckets()->toArray()['Buckets'] as $key => $value) {
                $bucket_list[] = $value['Name'];
            }
            $this->_buckets = fn_array_combine($bucket_list, true);
        }

        $bucket = $this->getOption('bucket');

        if (empty($this->_buckets[$bucket])) {

            try {
                $create_result = $this->_s3->createBucket([
                    'Bucket' => $bucket,
                ]);
            } catch (AwsException $e) {
                fn_set_notification('E', __('error'), (string) $e->getMessage());
            }

            if (!empty($create_result)) {
                try {
                    $result_put_bucket_cors = $this->_s3->putBucketCors([
                        'Bucket' => $bucket, // REQUIRED
                        'CORSConfiguration' => [ // REQUIRED
                            'CORSRules' => [ // REQUIRED
                                [
                                    'AllowedMethods' => ['GET'], // REQUIRED
                                    'AllowedOrigins' => ['*'] // REQUIRED
                                ],
                            ],
                        ]
                    ]);
                } catch (AwsException $e) {
                    fn_set_notification('E', __('error'), (string) $e->getMessage());
                }

                if (!empty($result_put_bucket_cors)) {
                    $this->_buckets[$bucket] = true;
                }
            }
        }

        return $this->_s3;
    }
}
<?php
namespace Aws\S3;

use Aws\CommandInterface;
use Aws\ResultInterface;
use Psr\Http\Message\RequestInterface;

/**
 * Injects ObjectURL into the result of the PutObject operation.
 *
 * @internal
 */
class PutObjectUrlMiddleware
{
    /** @var callable  */
    private $nextHandler;

    /**
     * Create a middleware wrapper function.
     *
     * @return callable
     */
    public static function wrap()
    {
        return function (callable $handler) {
            return new self($handler);
        };
    }

    /**
     * @param callable $nextHandler Next handler to invoke.
     */
    public function __construct(callable $nextHandler)
    {
        $this->nextHandler = $nextHandler;
    }

    public function __invoke(CommandInterface $command, RequestInterface $request = null)
    {
        $next = $this->nextHandler;
        return $next($command, $request)->then(
            function (ResultInterface $result) use ($command) {
                $name = $command->getName();
                switch ($name) {
                    case 'PutObject':
                    case 'CopyObject':
                        $result['ObjectURL'] = $result['@metadata']['effectiveUri'];
                        break;
                    case 'CompleteMultipartUpload':
                        $result['ObjectURL'] = $result['Location'];
                        break;
                }
                return $result;
            }
        );
    }
}

https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:f028b58b-ecf4-47a8-8aa4-50994aa42cb9

RFC 6585
Proposed Standard


Internet Engineering Task Force (IETF)                     M. Nottingham
Request for Comments: 6585                                     Rackspace
Updates: 2616                                                R. Fielding
Category: Standards Track                                          Adobe
ISSN: 2070-1721                                               April 2012


                      Additional HTTP Status Codes

Abstract

   This document specifies additional HyperText Transfer Protocol (HTTP)
   status codes for a variety of common situations.

Status of This Memo

   This is an Internet Standards Track document.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Further information on
   Internet Standards is available in Section 2 of RFC 5741.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   http://www.rfc-editor.org/info/rfc6585.

Copyright Notice

   Copyright (c) 2012 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (http://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.









Nottingham & Fielding        Standards Track                    [Page 1]

RFC 6585              Additional HTTP Status Codes            April 2012


Table of Contents

   1. Introduction ....................................................2
   2. Requirements ....................................................2
   3. 428 Precondition Required .......................................2
   4. 429 Too Many Requests ...........................................3
   5. 431 Request Header Fields Too Large .............................4
   6. 511 Network Authentication Required .............................4
   7. Security Considerations .........................................6
   8. IANA Considerations .............................................7
   9. References ......................................................7
   Appendix A. Acknowledgements .......................................9
   Appendix B. Issues Raised by Captive Portals .......................9

1.  Introduction

   This document specifies additional HTTP [RFC2616] status codes for a
   variety of common situations, to improve interoperability and avoid
   confusion when other, less precise status codes are used.

   Note that these status codes are optional; servers cannot be required
   to support them.  However, because clients will treat unknown status
   codes as a generic error of the same class (e.g., 499 is treated as
   400 if it is not recognized), they can be safely deployed by existing
   servers (see [RFC2616] Section 6.1.1 for more information).

2.  Requirements

   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
   document are to be interpreted as described in [RFC2119].

3.  428 Precondition Required

   The 428 status code indicates that the origin server requires the
   request to be conditional.

   Its typical use is to avoid the "lost update" problem, where a client
   GETs a resource's state, modifies it, and PUTs it back to the server,
   when meanwhile a third party has modified the state on the server,
   leading to a conflict.  By requiring requests to be conditional, the
   server can assure that clients are working with the correct copies.

   Responses using this status code SHOULD explain how to resubmit the
   request successfully.  For example:

   HTTP/1.1 428 Precondition Required
   Content-Type: text/html



Nottingham & Fielding        Standards Track                    [Page 2]

RFC 6585              Additional HTTP Status Codes            April 2012


   <html>
      <head>
         <title>Precondition Required</title>
      </head>
      <body>
         <h1>Precondition Required</h1>
         <p>This request is required to be conditional;
         try using "If-Match".</p>
      </body>
   </html>

   Responses with the 428 status code MUST NOT be stored by a cache.

4.  429 Too Many Requests

   The 429 status code indicates that the user has sent too many
   requests in a given amount of time ("rate limiting").

   The response representations SHOULD include details explaining the
   condition, and MAY include a Retry-After header indicating how long
   to wait before making a new request.

   For example:

   HTTP/1.1 429 Too Many Requests
   Content-Type: text/html
   Retry-After: 3600

   <html>
      <head>
         <title>Too Many Requests</title>
      </head>
      <body>
         <h1>Too Many Requests</h1>
         <p>I only allow 50 requests per hour to this Web site per
            logged in user.  Try again soon.</p>
      </body>
   </html>

   Note that this specification does not define how the origin server
   identifies the user, nor how it counts requests.  For example, an
   origin server that is limiting request rates can do so based upon
   counts of requests on a per-resource basis, across the entire server,
   or even among a set of servers.  Likewise, it might identify the user
   by its authentication credentials, or a stateful cookie.

   Responses with the 429 status code MUST NOT be stored by a cache.




Nottingham & Fielding        Standards Track                    [Page 3]

RFC 6585              Additional HTTP Status Codes            April 2012


5.  431 Request Header Fields Too Large

   The 431 status code indicates that the server is unwilling to process
   the request because its header fields are too large.  The request MAY
   be resubmitted after reducing the size of the request header fields.

   It can be used both when the set of request header fields in total is
   too large, and when a single header field is at fault.  In the latter
   case, the response representation SHOULD specify which header field
   was too large.

   For example:

   HTTP/1.1 431 Request Header Fields Too Large
   Content-Type: text/html

   <html>
      <head>
         <title>Request Header Fields Too Large</title>
      </head>
      <body>
         <h1>Request Header Fields Too Large</h1>
         <p>The "Example" header was too large.</p>
      </body>
   </html>

   Responses with the 431 status code MUST NOT be stored by a cache.

6.  511 Network Authentication Required

   The 511 status code indicates that the client needs to authenticate
   to gain network access.

   The response representation SHOULD contain a link to a resource that
   allows the user to submit credentials (e.g., with an HTML form).

   Note that the 511 response SHOULD NOT contain a challenge or the
   login interface itself, because browsers would show the login
   interface as being associated with the originally requested URL,
   which may cause confusion.

   The 511 status SHOULD NOT be generated by origin servers; it is
   intended for use by intercepting proxies that are interposed as a
   means of controlling access to the network.

   Responses with the 511 status code MUST NOT be stored by a cache.





Nottingham & Fielding        Standards Track                    [Page 4]

RFC 6585              Additional HTTP Status Codes            April 2012


6.1.  The 511 Status Code and Captive Portals

   The 511 status code is designed to mitigate problems caused by
   "captive portals" to software (especially non-browser agents) that is
   expecting a response from the server that a request was made to, not
   the intervening network infrastructure.  It is not intended to
   encourage deployment of captive portals -- only to limit the damage
   caused by them.

   A network operator wishing to require some authentication, acceptance
   of terms, or other user interaction before granting access usually
   does so by identifying clients who have not done so ("unknown
   clients") using their Media Access Control (MAC) addresses.

   Unknown clients then have all traffic blocked, except for that on TCP
   port 80, which is sent to an HTTP server (the "login server")
   dedicated to "logging in" unknown clients, and of course traffic to
   the login server itself.

   For example, a user agent might connect to a network and make the
   following HTTP request on TCP port 80:

   GET /index.htm HTTP/1.1
   Host: www.example.com

   Upon receiving such a request, the login server would generate a 511
   response:

   HTTP/1.1 511 Network Authentication Required
   Content-Type: text/html

   <html>
      <head>
         <title>Network Authentication Required</title>
         <meta http-equiv="refresh"
               content="0; url=https://login.example.net/">
      </head>
      <body>
         <p>You need to <a href="https://login.example.net/">
         authenticate with the local network</a> in order to gain
         access.</p>
      </body>
   </html>

   Here, the 511 status code assures that non-browser clients will not
   interpret the response as being from the origin server, and the META
   HTML element redirects the user agent to the login server.




Nottingham & Fielding        Standards Track                    [Page 5]

RFC 6585              Additional HTTP Status Codes            April 2012


7.  Security Considerations

7.1.  428 Precondition Required

   The 428 status code is optional; clients cannot rely upon its use to
   prevent "lost update" conflicts.

7.2.  429 Too Many Requests

   When a server is under attack or just receiving a very large number
   of requests from a single party, responding to each with a 429 status
   code will consume resources.

   Therefore, servers are not required to use the 429 status code; when
   limiting resource usage, it may be more appropriate to just drop
   connections, or take other steps.

7.3.  431 Request Header Fields Too Large

   Servers are not required to use the 431 status code; when under
   attack, it may be more appropriate to just drop connections, or take
   other steps.

7.4.  511 Network Authentication Required

   In common use, a response carrying the 511 status code will not come
   from the origin server indicated in the request's URL.  This presents
   many security issues; e.g., an attacking intermediary may be
   inserting cookies into the original domain's name space, may be
   observing cookies or HTTP authentication credentials sent from the
   user agent, and so on.

   However, these risks are not unique to the 511 status code; in other
   words, a captive portal that is not using this status code introduces
   the same issues.

   Also, note that captive portals using this status code on a Secure
   Socket Layer (SSL) or Transport Layer Security (TLS) connection
   (commonly, port 443) will generate a certificate error on the client.












Nottingham & Fielding        Standards Track                    [Page 6]

RFC 6585              Additional HTTP Status Codes            April 2012


8.  IANA Considerations

   The HTTP Status Codes registry has been updated with the following
   entries:

      Value: 428
      Description: Precondition Required
      Reference: [RFC6585]

      Value: 429
      Description: Too Many Requests
      Reference: [RFC6585]

      Value: 431
      Description: Request Header Fields Too Large
      Reference: [RFC6585]

      Value: 511
      Description: Network Authentication Required
      Reference: [RFC6585]

9.  References

9.1.  Normative References

   [RFC2119]   Bradner, S., "Key words for use in RFCs to Indicate
               Requirement Levels", BCP 14, RFC 2119, March 1997.

   [RFC2616]   Fielding, R., Gettys, J., Mogul, J., Frystyk, H.,
               Masinter, L., Leach, P., and T. Berners-Lee, "Hypertext
               Transfer Protocol -- HTTP/1.1", RFC 2616, June 1999.

9.2.  Informative References

   [CORS]      van Kesteren, A., Ed., "Cross-Origin Resource Sharing",
               W3C Working Draft WD-cors-20100727, July 2010,
               <http://www.w3.org/TR/cors/>.

   [Favicon]   Wikipedia, "Favicon", March 2012,
               <http://en.wikipedia.org/w/
               index.php?title=Favicon&oldid=484627550>.

   [OAuth2.0]  Hammer-Lahav, E., Ed., Recordon, D., and D. Hardt, "The
               OAuth 2.0 Authorization Protocol", Work in Progress,
               March 2012.






Nottingham & Fielding        Standards Track                    [Page 7]

RFC 6585              Additional HTTP Status Codes            April 2012


   [P3P]       Marchiori, M., Ed., "The Platform for Privacy Preferences
               1.0 (P3P1.0) Specification", W3C Recommendation
               REC-P3P-20020416, April 2002,
               <http://www.w3.org/TR/P3P/>.

   [RFC4791]   Daboo, C., Desruisseaux, B., and L. Dusseault,
               "Calendaring Extensions to WebDAV (CalDAV)", RFC 4791,
               March 2007.

   [RFC4918]   Dusseault, L., Ed., "HTTP Extensions for Web Distributed
               Authoring and Versioning (WebDAV)", RFC 4918, June 2007.

   [WIDGETS]   Caceres, M., Ed., "Widget Packaging and XML
               Configuration", W3C Recommendation REC-widgets-20110927,
               September 2011, <http://www.w3.org/TR/widgets/>.

   [WebFinger] WebFinger Project, "WebFingerProtocol (Draft)",
               January 2010, <http://code.google.com/p/webfinger/wiki/
               WebFingerProtocol>.
































Nottingham & Fielding        Standards Track                    [Page 8]

RFC 6585              Additional HTTP Status Codes            April 2012


Appendix A.  Acknowledgements

   Thanks to Jan Algermissen and Julian Reschke for their suggestions
   and feedback.

Appendix B.  Issues Raised by Captive Portals

   Since clients cannot differentiate between a portal's response and
   that of the HTTP server that they intended to communicate with, a
   number of issues arise.  The 511 status code is intended to help
   mitigate some of them.

   One example is the "favicon.ico" [Favicon] commonly used by browsers
   to identify the site being accessed.  If the favicon for a given site
   is fetched from a captive portal instead of the intended site (e.g.,
   because the user is unauthenticated), it will often "stick" in the
   browser's cache (most implementations cache favicons aggressively)
   beyond the portal session, so that it seems as if the portal's
   favicon has "taken over" the legitimate site.

   Another browser-based issue comes about when the Platform for Privacy
   Preferences [P3P] is supported.  Depending on how it is implemented,
   it's possible a browser might interpret a portal's response for the
   p3p.xml file as the server's, resulting in the privacy policy (or
   lack thereof) advertised by the portal being interpreted as applying
   to the intended site.  Other Web-based protocols such as WebFinger
   [WebFinger], Cross-Origin Resource Sharing [CORS], and Open
   Authorization [OAuth2.0] may also be vulnerable to such issues.

   Although HTTP is most widely used with Web browsers, a growing number
   of non-browsing applications use it as a substrate protocol.  For
   example, Web Distributed Authoring and Versioning (WebDAV) [RFC4918]
   and Calendaring Extensions to WebDAV (CalDAV) [RFC4791] both use HTTP
   as the basis (for remote authoring and calendaring, respectively).
   Using these applications from behind a captive portal can result in
   spurious errors being presented to the user, and might result in
   content corruption, in extreme cases.

   Similarly, other non-browser applications using HTTP can be affected
   as well, e.g., widgets [WIDGETS], software updates, and other
   specialized software such as Twitter clients and the iTunes Music
   Store.

   It should be noted that it's sometimes believed that using HTTP
   redirection to direct traffic to the portal addresses these issues.
   However, since many of these uses "follow" redirects, this is not a
   good solution.




Nottingham & Fielding        Standards Track                    [Page 9]

RFC 6585              Additional HTTP Status Codes            April 2012


Authors' Addresses

   Mark Nottingham
   Rackspace

   EMail: mnot@mnot.net
   URI:   http://www.mnot.net/


   Roy T. Fielding
   Adobe Systems Incorporated
   345 Park Ave.
   San Jose, CA  95110
   USA

   EMail: fielding@gbiv.com
   URI:   http://roy.gbiv.com/


































Nottingham & Fielding        Standards Track                   [Page 10]
RFC 6585
RFC - Proposed Standard




Document type
RFC - Proposed Standard
April 2012
 
Updates RFC 2616
Was draft-nottingham-http-new-status (individual in app area)
Select version
04
RFC 6585
Compare versions

draft-nottingham-http-new-status-04

RFC 6585
 
Authors
Roy T. Fielding , Mark Nottingham 
RFC stream
IETF Logo
Other formats
   

<?php

// File generated from our OpenAPI spec

namespace Stripe;

/**
 * A Quote is a way to model prices that you'd like to provide to a customer. Once
 * accepted, it will automatically create an invoice, subscription or subscription
 * schedule.
 *
 * @property string $id Unique identifier for the object.
 * @property string $object String representing the object's type. Objects of the same type share the same value.
 * @property int $amount_subtotal Total before any discounts or taxes are applied.
 * @property int $amount_total Total after discounts and taxes are applied.
 * @property null|int $application_fee_amount The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Only applicable if there are no line items with recurring prices on the quote.
 * @property null|float $application_fee_percent A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. Only applicable if there are line items with recurring prices on the quote.
 * @property \Stripe\StripeObject $automatic_tax
 * @property string $collection_method Either <code>charge_automatically</code>, or <code>send_invoice</code>. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or on finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to <code>charge_automatically</code>.
 * @property \Stripe\StripeObject $computed
 * @property int $created Time at which the object was created. Measured in seconds since the Unix epoch.
 * @property null|string $currency Three-letter <a href="https://www.iso.org/iso-4217-currency-codes.html">ISO currency code</a>, in lowercase. Must be a <a href="https://stripe.com/docs/currencies">supported currency</a>.
 * @property null|string|\Stripe\Customer $customer The customer which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
 * @property (string|\Stripe\TaxRate)[] $default_tax_rates The tax rates applied to this quote.
 * @property null|string $description A description that will be displayed on the quote PDF.
 * @property (string|\Stripe\Discount)[] $discounts The discounts applied to this quote.
 * @property int $expires_at The date on which the quote will be canceled if in <code>open</code> or <code>draft</code> status. Measured in seconds since the Unix epoch.
 * @property null|string $footer A footer that will be displayed on the quote PDF.
 * @property null|\Stripe\StripeObject $from_quote Details of the quote that was cloned. See the <a href="https://stripe.com/docs/quotes/clone">cloning documentation</a> for more details.
 * @property null|string $header A header that will be displayed on the quote PDF.
 * @property null|string|\Stripe\Invoice $invoice The invoice that was created from this quote.
 * @property null|\Stripe\StripeObject $invoice_settings All invoices will be billed using the specified settings.
 * @property \Stripe\Collection $line_items A list of items the customer is being quoted for.
 * @property bool $livemode Has the value <code>true</code> if the object exists in live mode or the value <code>false</code> if the object exists in test mode.
 * @property \Stripe\StripeObject $metadata Set of <a href="https://stripe.com/docs/api/metadata">key-value pairs</a> that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 * @property null|string $number A unique number that identifies this particular quote. This number is assigned once the quote is <a href="https://stripe.com/docs/quotes/overview#finalize">finalized</a>.
 * @property null|string|\Stripe\Account $on_behalf_of The account on behalf of which to charge. See the <a href="https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts">Connect documentation</a> for details.
 * @property string $status The status of the quote.
 * @property \Stripe\StripeObject $status_transitions
 * @property null|string|\Stripe\Subscription $subscription The subscription that was created or updated from this quote.
 * @property \Stripe\StripeObject $subscription_data
 * @property null|string|\Stripe\SubscriptionSchedule $subscription_schedule The subscription schedule that was created or updated from this quote.
 * @property \Stripe\StripeObject $total_details
 * @property null|\Stripe\StripeObject $transfer_data The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices.
 */
class Quote extends ApiResource
{
    const OBJECT_NAME = 'quote';

    use ApiOperations\All;
    use ApiOperations\Create;
    use ApiOperations\Retrieve;
    use ApiOperations\Update;

    const COLLECTION_METHOD_CHARGE_AUTOMATICALLY = 'charge_automatically';
    const COLLECTION_METHOD_SEND_INVOICE = 'send_invoice';

    const STATUS_ACCEPTED = 'accepted';
    const STATUS_CANCELED = 'canceled';
    const STATUS_DRAFT = 'draft';
    const STATUS_OPEN = 'open';

    /**
     * @param callable $readBodyChunkCallable
     * @param null|array $params
     * @param null|array|string $opts
     *
     * @throws \Stripe\Exception\ApiErrorException if the request fails
     */
    public function pdf($readBodyChunkCallable, $params = null, $opts = null)
    {
        $opts = \Stripe\Util\RequestOptions::parse($opts);
        if (null === $opts->apiBase) {
            $opts->apiBase = Stripe::$apiUploadBase;
        }

        $url = $this->instanceUrl() . '/pdf';
        $this->_requestStream('get', $url, $readBodyChunkCallable, $params, $opts);
    }

    /**
     * @param null|array $params
     * @param null|array|string $opts
     *
     * @throws \Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \Stripe\Quote the accepted quote
     */
    public function accept($params = null, $opts = null)
    {
        $url = $this->instanceUrl() . '/accept';
        list($response, $opts) = $this->_request('post', $url, $params, $opts);
        $this->refreshFrom($response, $opts);

        return $this;
    }

    /**
     * @param null|array $params
     * @param null|array|string $opts
     *
     * @throws \Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \Stripe\Quote the canceled quote
     */
    public function cancel($params = null, $opts = null)
    {
        $url = $this->instanceUrl() . '/cancel';
        list($response, $opts) = $this->_request('post', $url, $params, $opts);
        $this->refreshFrom($response, $opts);

        return $this;
    }

    /**
     * @param null|array $params
     * @param null|array|string $opts
     *
     * @throws \Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \Stripe\Quote the finalized quote
     */
    public function finalizeQuote($params = null, $opts = null)
    {
        $url = $this->instanceUrl() . '/finalize';
        list($response, $opts) = $this->_request('post', $url, $params, $opts);
        $this->refreshFrom($response, $opts);

        return $this;
    }

    /**
     * @param null|array $params
     * @param null|array|string $opts
     * @param mixed $id
     *
     * @throws \Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \Stripe\Collection list of LineItems
     */
    public static function allComputedUpfrontLineItems($id, $params = null, $opts = null)
    {
        $url = static::resourceUrl($id) . '/computed_upfront_line_items';
        list($response, $opts) = static::_staticRequest('get', $url, $params, $opts);
        $obj = \Stripe\Util\Util::convertToStripeObject($response->json, $opts);
        $obj->setLastResponse($response);

        return $obj;
    }

    /**
     * @param null|array $params
     * @param null|array|string $opts
     * @param mixed $id
     *
     * @throws \Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \Stripe\Collection list of LineItems
     */
    public static function allLineItems($id, $params = null, $opts = null)
    {
        $url = static::resourceUrl($id) . '/line_items';
        list($response, $opts) = static::_staticRequest('get', $url, $params, $opts);
        $obj = \Stripe\Util\Util::convertToStripeObject($response->json, $opts);
        $obj->setLastResponse($response);

        return $obj;
    }
}
# Apache License
Version 2.0, January 2004

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

## 1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1
through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the
License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled
by, or are under common control with that entity. For the purposes of this definition, "control" means
(i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract
or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial
ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software
source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form,
including but not limited to compiled object code, generated documentation, and conversions to other media
types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License,
as indicated by a copyright notice that is included in or attached to the work (an example is provided in the
Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from)
the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent,
as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not
include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work
and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any
modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to
Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to
submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of
electronic, verbal, or written communication sent to the Licensor or its representatives, including but not
limited to communication on electronic mailing lists, source code control systems, and issue tracking systems
that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but
excluding communication that is conspicuously marked or otherwise designated in writing by the copyright
owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been
received by Licensor and subsequently incorporated within the Work.

## 2. Grant of Copyright License.

Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual,
worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare
Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such
Derivative Works in Source or Object form.

## 3. Grant of Patent License.

Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual,
worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent
license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such
license applies only to those patent claims licensable by such Contributor that are necessarily infringed by
their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such
Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim
or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work
constitutes direct or contributory patent infringement, then any patent licenses granted to You under this
License for that Work shall terminate as of the date such litigation is filed.

## 4. Redistribution.

You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without
modifications, and in Source or Object form, provided that You meet the following conditions:

   1. You must give any other recipients of the Work or Derivative Works a copy of this License; and

   2. You must cause any modified files to carry prominent notices stating that You changed the files; and

   3. You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent,
	  trademark, and attribution notices from the Source form of the Work, excluding those notices that do
	  not pertain to any part of the Derivative Works; and

   4. If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that
	  You distribute must include a readable copy of the attribution notices contained within such NOTICE
	  file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one
	  of the following places: within a NOTICE text file distributed as part of the Derivative Works; within
	  the Source form or documentation, if provided along with the Derivative Works; or, within a display
	  generated by the Derivative Works, if and wherever such third-party notices normally appear. The
	  contents of the NOTICE file are for informational purposes only and do not modify the License. You may
	  add Your own attribution notices within Derivative Works that You distribute, alongside or as an
	  addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be
	  construed as modifying the License.

You may add Your own copyright statement to Your modifications and may provide additional or different license
terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative
Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the
conditions stated in this License.

## 5. Submission of Contributions.

Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by
You to the Licensor shall be under the terms and conditions of this License, without any additional terms or
conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate
license agreement you may have executed with Licensor regarding such Contributions.

## 6. Trademarks.

This License does not grant permission to use the trade names, trademarks, service marks, or product names of
the Licensor, except as required for reasonable and customary use in describing the origin of the Work and
reproducing the content of the NOTICE file.

## 7. Disclaimer of Warranty.

Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor
provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT,
MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the
appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of
permissions under this License.

## 8. Limitation of Liability.

In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless
required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any
Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential
damages of any character arising as a result of this License or out of the use or inability to use the Work
(including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or
any and all other commercial damages or losses), even if such Contributor has been advised of the possibility
of such damages.

## 9. Accepting Warranty or Additional Liability.

While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for,
acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this
License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole
responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold
each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason
of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS

https://www.sandbox.paypal.com/myaccount/money/flow/cards/CC-LCJMGYP2XEXHL?flow=cmV0dXJuVXJsPS9mdW5kc21hbmFnZW1lbnQvbW9uZXkmY2FuY2VsVXJsPS9mdW5kc21hbmFnZW1lbnQvbW9uZXk%3D

# Prereleases

> Warning! Prereleases are very complicated! Using them requires a thorough understanding of all parts of npm publishes. Mistakes can lead to repository and publish states that are very hard to fix.

> Warning: If you decide to do prereleases from the default branch of your repository, without having a branch for your last stable release without the prerelease changes, you will block other changes until you are ready to exit prerelease mode. We thoroughly recommend only running prereleases from a branch other than the default branch.

You might want to release a version of your packages before you do an actual release, Changesets lets you do this but there are some caveats because of the complexity that monorepos add that are important to understand.

When you want to do a prerelease, you need to enter prerelease mode. You can do that with the `pre enter <tag>`. The tag that you need to pass is used in versions(e.g. `1.0.0-beta.0`) and for the npm dist tag.

A prerelease workflow might look something like this:

```bash
yarn changeset pre enter next
yarn changeset version
git add .
git commit -m "Enter prerelease mode and version packages"
yarn changeset publish
git push --follow-tags
```

Let's go through what's happening here. For this example, let's say you have a repo that looks like this:

```
packages/
  pkg-a@1.0.0 has dep on pkg-b@^2.0.0
  pkg-b@2.0.0 has no deps
  pkg-c@3.0.0 has no deps
.changeset/
  pkg-b@minor
```

```
yarn changeset pre enter next
```

This command changes Changesets into prerelease mode which creates a `pre.json` file in the `.changeset` directory which stores information about the state the prerelease is in. For the specific data stored in the `pre.json` file, see the type definition of `PreState` in [`@changesets/types`](../packages/types).

```
yarn changeset version
```

This command will version packages as you would normally expect but append `-next.0`. An important note is that this will bump dependent packages that wouldn't be bumped in normal releases because prerelease versions are not satisfied by most semver ranges.(e.g. `^5.0.0` is not satisfied by `5.1.0-next.0`)

The repo would now look like this:

```
packages/
  pkg-a@1.0.1-next.0 has dep on pkg-b@^2.0.1
  pkg-b@2.1.0-next.0 has no deps
  pkg-c@3.0.0 has no deps
.changeset/
```

```
yarn changeset publish
```

This command will publish to npm as the publish command normally does though it will set the dist tag to the tag you specified when running the prerelease command.

When you want to do another prerelease, your workflow would look something like this:

```bash
yarn changeset version
git add .
git commit -m "Version packages"
yarn changeset publish
git push --follow-tags
```

Let's say we add some changesets and a new package so our repo looks like this

```
packages/
  pkg-a@1.0.1-next.0 has dep on pkg-b@^2.0.1
  pkg-b@2.1.0-next.0 has no deps
  pkg-c@3.0.0 has no deps
  pkg-d@0.0.0 has no deps

.changeset/
  pkg-a@minor
  pkg-c@patch
  pkg-d@major
```

```
yarn changeset version
```

The version command will behave just like it does for the first versioning of a prerelease except the number at the end will be updated. The repo would now look like this:

```
packages/
  pkg-a@1.1.0-next.1 has dep on pkg-b@^2.0.1
  pkg-b@2.1.0-next.0 has no deps
  pkg-c@3.0.1-next.0 has no deps
  pkg-d@1.0.0-next.0 has no deps
```

```
yarn changeset publish
```

This command will publish to npm just like it does for the first prerelease except because we're adding a new package(we need to define this, is it new to the repo or new to npm? I'm thinking new to npm), the new package will be published with the `latest` dist tag rather than the `next` tag because it's the first time it's being published which means it will be on `latest` anyway. For future publishes until pkg-d is out of prerelease, it will also be published to `latest`.

When you're ready to do the final release, your workflow would look something like this:

```bash
yarn changeset pre exit
yarn changeset version
git add .
git commit -m "Exit prerelease mode and version packages"
yarn changeset publish
git push --follow-tags
```

```
yarn changeset pre exit
```

This command will set an intent to exit prerelease mode in the `pre.json` file though it won't do any actual versioning.

```
yarn changeset version
```

The version command will apply any changesets currently in the repo and then remove the prerelease tag from the versions. The repo would now look like this:

```
packages/
  pkg-a@1.1.0 has dep on pkg-b@^2.0.1
  pkg-b@2.1.0 has no deps
  pkg-c@3.0.1 has no deps
  pkg-d@1.0.0 has no deps
```

```
yarn changeset publish
```

The publish command will publish everything to the `latest` dist tag as normal.


www.unrealircd.com


[![CI](https://github.com/sindresorhus/boxen/actions/workflows/main.yml/badge.svg)](https://github.com/sindresorhus/boxen/actions/workflows/main.yml)
# cli-boxes [![Build Status](https://travis-ci.org/sindresorhus/cli-boxes.svg?branch=master)](https://travis-ci.org/sindresorhus/cli-boxes)

> Boxes for use in the terminal

The list of boxes is just a [JSON file](boxes.json) and can be used wherever.


## Install

```
$ npm install --save cli-boxes
```


## Usage

```js
const cliBoxes = require('cli-boxes');

console.log(cliBoxes.single);
/*
{
    "topLeft": "┌",
    "topRight": "┐",
    "bottomRight": "┘",
    "bottomLeft": "└",
    "vertical": "│",
    "horizontal": "─"
}
*/
```


## API

### cliBoxes

#### `single`

```
┌────┐
│    │
└────┘
```

#### `double`

```
╔════╗
║    ║
╚════╝
```

#### `round`

```
╭────╮
│    │
╰────╯
```

#### `single-double`

```
╓────╖
║    ║
╙────╜
```

#### `double-single`

```
╒════╕
│    │
╘════╛
```

#### `classic`

```
+----+
|    |
+----+
```


## Related

- [boxen](https://github.com/sindresorhus/boxen) - Create boxes in the terminal


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
d41b45afb922d3bd828d168ef2c1e380  ./dists/jammy/main/binary-amd64/Release
2bc7d436cca143b52d9f5d443a8b3948  ./dists/jammy/main/binary-amd64/Packages.gz
d3b3df717bf7edcb5b6b9299e4c8011a  ./dists/jammy/main/binary-i386/Release
9f074e34eec2a8b7c83ce9f91ec83483  ./dists/jammy/main/binary-i386/Packages.gz
2defb55afa90da001df097444c643168  ./dists/jammy/restricted/binary-amd64/Release
c8e68a496102c21eee2b83b25c830aa1  ./dists/jammy/restricted/binary-amd64/Packages.gz
78cac51d29a8aec91041203d0ddf84e2  ./dists/jammy/restricted/binary-i386/Release
d3a5fd04509d8e2d4a08c065d8176cfb  ./dists/jammy/restricted/binary-i386/Packages.gz
e829ba9353486ba10d7fa42fc7dd4707  ./dists/jammy/Release
e0e2a6d744baa3d1175535897084ebd9  ./dists/jammy/Release.gpg
09cf15d52112039999d154656ff2dd20  ./.disk/info
d41d8cd98f00b204e9800998ecf8427e  ./.disk/base_installable
728cb968a88534e0c50a9d99621f13eb  ./.disk/cd_type
74d81afc388869f5b57ae429be357d50  ./.disk/casper-uuid-generic
bf018e84cc21132f2d4e5af6b1133a1d  ./.disk/release_notes_url
24ec176894c781355f9ccb08ba69919e  ./preseed/ubuntu.seed
28ac846131c7faec8c04368b33532d82  ./pool/main/b/b43-fwcutter/b43-fwcutter_019-7build2_amd64.deb
4c918bf30978c418aab781cad9f3201d  ./pool/main/b/binutils/binutils_2.38-4ubuntu2.1_amd64.deb
cf2112209cc1dd3231cbcd370c944f7f  ./pool/main/b/binutils/binutils-common_2.38-4ubuntu2.1_amd64.deb
90bedfe02e48ce3a90303b42c50fa303  ./pool/main/b/binutils/binutils-x86-64-linux-gnu_2.38-4ubuntu2.1_amd64.deb
66cb7fa865112e535463b8e4a996cef0  ./pool/main/b/binutils/libbinutils_2.38-4ubuntu2.1_amd64.deb
eca037c232e0544d807a9daee91fd8e3  ./pool/main/b/binutils/libctf-nobfd0_2.38-4ubuntu2.1_amd64.deb
8f682dbc75baf180bcfb6be22e8b1bb9  ./pool/main/b/binutils/libctf0_2.38-4ubuntu2.1_amd64.deb
8f82837be1c86fc816b51ac9b519268a  ./pool/main/b/build-essential/build-essential_12.9ubuntu3_amd64.deb
53b3f2c651831d72289718e1d58c22c1  ./pool/main/g/gcc-12/cpp-12_12.1.0-2ubuntu1~22.04_amd64.deb
64ea32c29e17294c10dc46dce7ecb81b  ./pool/main/g/gcc-12/gcc-12_12.1.0-2ubuntu1~22.04_amd64.deb
a98e54b4ae5c08f3c09de87be415b995  ./pool/main/g/gcc-12/libasan8_12.1.0-2ubuntu1~22.04_amd64.deb
ae35af3fcdf53c62ecb7a29aca818074  ./pool/main/g/gcc-12/libcc1-0_12.1.0-2ubuntu1~22.04_amd64.deb
05c8b9b18e92a32175325725b9749c83  ./pool/main/g/gcc-12/libgcc-12-dev_12.1.0-2ubuntu1~22.04_amd64.deb
34fa800740b3bba7d65ed93ec38e8ddd  ./pool/main/g/gcc-12/libitm1_12.1.0-2ubuntu1~22.04_amd64.deb
721b4d6dcb5fb99238e0f25beb635c31  ./pool/main/g/gcc-12/liblsan0_12.1.0-2ubuntu1~22.04_amd64.deb
af86cb57c3d583e00b588be5ee361128  ./pool/main/g/gcc-12/libquadmath0_12.1.0-2ubuntu1~22.04_amd64.deb
6757b812a2364f88a2d833e92d4c99e8  ./pool/main/g/gcc-12/libtsan2_12.1.0-2ubuntu1~22.04_amd64.deb
ea10e18b936947a1ad0a1a5af03504cd  ./pool/main/g/gcc-12/libubsan1_12.1.0-2ubuntu1~22.04_amd64.deb
fe807b4b6040af061a4761364d2794a7  ./pool/main/g/gcc-12/libatomic1_12.1.0-2ubuntu1~22.04_i386.deb
881f17083443b3667ae3683d3d8a4b99  ./pool/main/g/gcc-12/libgcc-s1_12.1.0-2ubuntu1~22.04_i386.deb
b9e46855bb546280a0d34dc5ef3e7061  ./pool/main/g/gcc-12/libstdc++6_12.1.0-2ubuntu1~22.04_i386.deb
127337edec010d07a97edc6e40d99fee  ./pool/main/g/gcc-defaults/g++_11.2.0-1ubuntu1_amd64.deb
5cc3273b99ad19d1e7029c7411873c6f  ./pool/main/g/gcc-defaults/gcc_11.2.0-1ubuntu1_amd64.deb
9fa73a5a6f9bcdaa370163ccdb34c974  ./pool/main/g/gcc-11/g++-11_11.3.0-1ubuntu1~22.04_amd64.deb
5f59a0abaaffc29df8b6320980ff6ad9  ./pool/main/g/gcc-11/gcc-11_11.3.0-1ubuntu1~22.04_amd64.deb
99c1cdd557f54f304440b8a36ed5b6f4  ./pool/main/g/gcc-11/libasan6_11.3.0-1ubuntu1~22.04_amd64.deb
773742a97e3f66f0076969fa7a22765b  ./pool/main/g/gcc-11/libgcc-11-dev_11.3.0-1ubuntu1~22.04_amd64.deb
436ad3a164818ac66b13e0e3041e6884  ./pool/main/g/gcc-11/libstdc++-11-dev_11.3.0-1ubuntu1~22.04_amd64.deb
6246a40ed12f229adfba6ec862d60cf4  ./pool/main/g/gcc-11/libtsan0_11.3.0-1ubuntu1~22.04_amd64.deb
5279427cede1f4b52f910e7ab2112b89  ./pool/main/g/glibc/libc-dev-bin_2.35-0ubuntu3.1_amd64.deb
b6f18e8a711e1bf18098fc54369b7886  ./pool/main/g/glibc/libc-devtools_2.35-0ubuntu3.1_amd64.deb
f5508cac37288c248c4a7e0091041e9d  ./pool/main/g/glibc/libc6-dev_2.35-0ubuntu3.1_amd64.deb
b7b27dbe1f2686081ebb08f631b56a0b  ./pool/main/g/glibc/libc6_2.35-0ubuntu3.1_i386.deb
57cccd914c6fa8aa9b662b6ce9346e36  ./pool/main/d/dkms/dkms_2.8.7-2ubuntu2.1_all.deb
f7d3f6a995b31ddd6f053a7e1760c947  ./pool/main/d/dpkg/dpkg-dev_1.21.1ubuntu2.1_all.deb
49e045c42c4ef4b79714950f97dee147  ./pool/main/f/fakeroot/fakeroot_1.28-1ubuntu1_amd64.deb
03efa85abe062b573c3a5f25e10005be  ./pool/main/f/fakeroot/libfakeroot_1.28-1ubuntu1_amd64.deb
40c9245c939e970765c140f16d609cce  ./pool/main/liba/libalgorithm-diff-perl/libalgorithm-diff-perl_1.201-1_all.deb
9d669ded29afd1b59e708fd4179e9ac1  ./pool/main/liba/libalgorithm-diff-xs-perl/libalgorithm-diff-xs-perl_0.04-6build3_amd64.deb
6b456963b6629af0514be1b8ccbaa7fc  ./pool/main/liba/libalgorithm-merge-perl/libalgorithm-merge-perl_0.08-3_all.deb
eccd44cb5f1fc684bd6e91b9aa8d8abb  ./pool/main/libx/libxcrypt/libcrypt-dev_4.4.27-1_amd64.deb
fe2ab6097e31bbfcca7ba224dc6fc416  ./pool/main/libx/libxcrypt/libcrypt1_4.4.27-1_i386.deb
982bd3c4ed5a790b5366698a2df2ffdf  ./pool/main/libx/libx11/libx11-6_1.7.5-1_i386.deb
d6943ab72864a71bf184779fbc66d28a  ./pool/main/libx/libx11/libx11-xcb1_1.7.5-1_i386.deb
ac00b5fc0c7bc42923ac7f65d6c9595c  ./pool/main/libx/libxau/libxau6_1.0.9-1build5_i386.deb
b8dfc71f61ce058efb590a3d8b875aad  ./pool/main/libx/libxcb/libxcb-dri2-0_1.14-3ubuntu3_i386.deb
cba04cb658d62257a87e28c864cf6495  ./pool/main/libx/libxcb/libxcb-dri3-0_1.14-3ubuntu3_i386.deb
9b1bbb41e14f33aaf9647cfc1401605a  ./pool/main/libx/libxcb/libxcb-glx0_1.14-3ubuntu3_i386.deb
9e6e197101d604c5d88ade9d89c178e1  ./pool/main/libx/libxcb/libxcb-present0_1.14-3ubuntu3_i386.deb
815c3a06ffabd2e1388fa880acabbb44  ./pool/main/libx/libxcb/libxcb-randr0_1.14-3ubuntu3_i386.deb
7d66a0f8bf36f8346fa3907def7a43c9  ./pool/main/libx/libxcb/libxcb-sync1_1.14-3ubuntu3_i386.deb
67c5137e18405060363d67979ee83f5b  ./pool/main/libx/libxcb/libxcb1_1.14-3ubuntu3_i386.deb
1ebc11f8086b2ede690cc9f8aa3832b9  ./pool/main/libx/libxdamage/libxdamage1_1.1.5-2build2_i386.deb
94a45d6cf278c4831fe58ade7a8b002c  ./pool/main/libx/libxdmcp/libxdmcp6_1.1.3-0ubuntu5_i386.deb
3163ca779590215d5cd669333bc32f2c  ./pool/main/libx/libxext/libxext6_1.3.4-1build1_i386.deb
9ca227d8d714ddd948151b3a09b5fada  ./pool/main/libx/libxfixes/libxfixes3_6.0.0-1_i386.deb
81df58909e70498228f20645d2768915  ./pool/main/libx/libxshmfence/libxshmfence1_1.3-1build4_i386.deb
6abd6c753073bc77432794efad3fbc11  ./pool/main/libx/libxxf86vm/libxxf86vm1_1.1.4-1build3_i386.deb
bf379058877e9da94b4d531ad94ad684  ./pool/main/libn/libnsl/libnsl-dev_1.3.0-2build2_amd64.deb
906a51fe8698b35d2efc86b7de9251e0  ./pool/main/e/egl-wayland/libnvidia-egl-wayland1_1.1.9-1.1_amd64.deb
d083bd62efcb3c668c6aacb65d91ceb6  ./pool/main/e/elfutils/libelf1_0.186-1build1_i386.deb
030488fed3b804ab1e034bf64144f539  ./pool/main/e/expat/libexpat1_2.4.7-1ubuntu0.2_i386.deb
18636c4ecacf072e62939af827218e60  ./pool/main/libt/libtirpc/libtirpc-dev_1.3.2-2ubuntu0.1_amd64.deb
38c83b83b91e4607902ee7711094df74  ./pool/main/libv/libvdpau/libvdpau1_1.4-3build2_amd64.deb
e54f390df3741532b2670a7e9600f627  ./pool/main/libv/libvdpau/vdpau-driver-all_1.4-3build2_amd64.deb
fa961966b93955425ecadcaacaf9eef1  ./pool/main/n/nvidia-settings/libxnvctrl0_510.47.03-0ubuntu1_amd64.deb
be78ee720de6a3d0168d2dcf36f345ce  ./pool/main/n/nvidia-settings/nvidia-settings_510.47.03-0ubuntu1_amd64.deb
8a1101736d40cac7c967448d90dfc606  ./pool/main/n/nvidia-prime/nvidia-prime_0.8.17.1_all.deb
7239e7d8d4db3982d7072aae0f26a600  ./pool/main/n/ncurses/libtinfo6_6.3-2_i386.deb
16d0bd66d675c1f83dd79d64c641c587  ./pool/main/l/linux-oem-5.17/linux-headers-5.17.0-1027-oem_5.17.0-1027.28_amd64.deb
8bd8ec9ca3c9d8baa4fdb39f433bbf25  ./pool/main/l/linux-oem-5.17/linux-modules-5.17.0-1027-oem_5.17.0-1027.28_amd64.deb
a7c0bf1c83d5de7c087eb905365762ee  ./pool/main/l/linux-oem-5.17/linux-oem-5.17-headers-5.17.0-1027_5.17.0-1027.28_all.deb
e713c3910244917ed0e65fed39b8dff8  ./pool/main/l/linux-meta-oem-5.17/linux-headers-oem-22.04_5.17.0.1027.25_amd64.deb
01eea176f36f02829c742277e13cd7a1  ./pool/main/l/linux-meta-oem-5.17/linux-image-oem-22.04_5.17.0.1027.25_amd64.deb
14d6e0272eb852aff442448c11cae08c  ./pool/main/l/linux-meta-oem-5.17/linux-oem-22.04_5.17.0.1027.25_amd64.deb
ece7da5fe9d4d2b59f6773f1f1b1de84  ./pool/main/l/linux-signed-oem-5.17/linux-image-5.17.0-1027-oem_5.17.0-1027.28_amd64.deb
5f822fbcf8fbc61a716508dea320376c  ./pool/main/l/linux-signed-hwe-5.19/linux-image-5.19.0-32-generic_5.19.0-32.33~22.04.1_amd64.deb
90ab83846685dc56e9dd3965b45926f0  ./pool/main/l/linux/linux-libc-dev_5.15.0-60.66_amd64.deb
a905b3ea9ef5b373e27ccb0ab3bc5283  ./pool/main/l/linux-hwe-5.19/linux-modules-5.19.0-32-generic_5.19.0-32.33~22.04.1_amd64.deb
00ac46ac818bce8b504ade0df73e953a  ./pool/main/l/lto-disabled-list/lto-disabled-list_24_all.deb
d667e81210309f6478879bb17d0f3c59  ./pool/main/l/lm-sensors/libsensors5_3.6.0-7ubuntu1_i386.deb
397d7a60ce270e4da241d50fc1c41680  ./pool/main/m/make-dfsg/make_4.3-4.1build1_amd64.deb
dd2fed06f8f97f57fb9b6194d7eff626  ./pool/main/m/manpages/manpages-dev_5.10-1ubuntu1_all.deb
ef3f7c60c9908e3157a5a3d4cdd346b6  ./pool/main/m/mesa/mesa-vdpau-drivers_22.2.5-0ubuntu0.1~22.04.1_amd64.deb
f6915080f8f0749f758eb783c45df133  ./pool/main/m/mesa/libgl1-mesa-dri_22.2.5-0ubuntu0.1~22.04.1_i386.deb
265225746ce029330c359a72fb8fffdf  ./pool/main/m/mesa/libglapi-mesa_22.2.5-0ubuntu0.1~22.04.1_i386.deb
62d0e98171198f016f4eaf1d24ebdf48  ./pool/main/m/mesa/libglx-mesa0_22.2.5-0ubuntu0.1~22.04.1_i386.deb
374e3e403d489cab4e57e56bfd759ede  ./pool/main/m/mesa/mesa-vulkan-drivers_22.2.5-0ubuntu0.1~22.04.1_i386.deb
bce244312ffd20a04fecdc454d390ed2  ./pool/main/u/ubiquity/oem-config_22.04.19_all.deb
32f31211c6e71267cf9468af5e146695  ./pool/main/u/ubiquity/oem-config-gtk_22.04.19_all.deb
1288ecc0e564e24a142264612cb935d5  ./pool/main/u/ubiquity-slideshow-ubuntu/oem-config-slideshow-ubuntu_181.1_all.deb
82cc99789d1dd22c9d0670293f5b42de  ./pool/main/u/ubuntu-keyring/ubuntu-oem-keyring_2021.03.26_all.deb
e4b0b6bc109c0de4c2010136db01a187  ./pool/main/o/oem-qemu-meta/oem-qemu-meta_20.04~ubuntu5_all.deb
54c21fc5081342a1cf2713bf5337c7fe  ./pool/main/o/oem-somerville-tentacool-meta/oem-somerville-tentacool-meta_22.04~ubuntu1_all.deb
3ccacb92b7b4791ae8989556152e17d8  ./pool/main/o/oem-sutton-balin-meta/oem-sutton-balin-meta_22.04~ubuntu1_all.deb
c05aba72ecdb44cadba5443fdcc81ae9  ./pool/main/o/oem-sutton-balint-meta/oem-sutton-balint-meta_22.04~ubuntu1_all.deb
f61b471d92faf0a71d315eb303c57a42  ./pool/main/o/oem-sutton-bambina-meta/oem-sutton-bambina-meta_22.04~ubuntu1_all.deb
6b14984e1e38a679728db714ecf37f73  ./pool/main/o/oem-sutton-cailean-meta/oem-sutton-cailean-meta_22.04~ubuntu1_all.deb
9fa8a773119b1f6106691d6a7ecde0b1  ./pool/main/o/oem-sutton-cailyn-meta/oem-sutton-cailyn-meta_22.04~ubuntu1_all.deb
10ab97c1aa35f8cb64f6f36021d46b30  ./pool/main/p/pkg-config/pkg-config_0.29.2-1ubuntu3_amd64.deb
5136bea13e8705cfd7da44d621e9a1e2  ./pool/main/r/rpcsvc-proto/rpcsvc-proto_1.4.2-0ubuntu6_amd64.deb
0193d088e917a42858a3b8d12c067061  ./pool/main/s/screen-resolution-extra/screen-resolution-extra_0.18.2_all.deb
4131d533f5549e0ce3553ea70112ec48  ./pool/main/s/setserial/setserial_2.17-53build2_amd64.deb
0861a7c148c3baa63bec9f4e047e4010  ./pool/main/libb/libbsd/libbsd0_0.11.5-1_i386.deb
512bcd1f7cadc1f79b6c6fde40052ab2  ./pool/main/libd/libdrm/libdrm-amdgpu1_2.4.113-2~ubuntu0.22.04.1_i386.deb
a1428b11eb229003f4c176c70fe5d0ad  ./pool/main/libd/libdrm/libdrm-intel1_2.4.113-2~ubuntu0.22.04.1_i386.deb
346720f6ffd43afbce86950bbeef2e6f  ./pool/main/libd/libdrm/libdrm-nouveau2_2.4.113-2~ubuntu0.22.04.1_i386.deb
678398f9bb0f4af3ca6da3af6bfa5087  ./pool/main/libd/libdrm/libdrm-radeon1_2.4.113-2~ubuntu0.22.04.1_i386.deb
c0b74554441fe7e1dfe00431e31eab4b  ./pool/main/libd/libdrm/libdrm2_2.4.113-2~ubuntu0.22.04.1_i386.deb
1f8ccdf00ab8c28e1dcce5271007d9a6  ./pool/main/libe/libedit/libedit2_3.1-20210910-1build1_i386.deb
62997f738efa43c3ab09a19bcd1b9552  ./pool/main/libg/libglvnd/libgl1_1.4.0-1_i386.deb
7246e4039d0dccf5d39d71052573837e  ./pool/main/libg/libglvnd/libglvnd0_1.4.0-1_i386.deb
684413cbeb92c266bfc6b7fe80977479  ./pool/main/libg/libglvnd/libglx0_1.4.0-1_i386.deb
f11849277ab014467a0ae29cb8fd3332  ./pool/main/libi/libidn2/libidn2-0_2.3.2-2build1_i386.deb
ee1216949b79cde35549056e9cc22f6a  ./pool/main/libp/libpciaccess/libpciaccess0_0.16-3_i386.deb
6f271a619d8e831b265bfee0ebf4ccc6  ./pool/main/libu/libunistring/libunistring2_1.0-1_i386.deb
25f376e6286fe2531dda64c3704ce8a0  ./pool/main/v/vulkan-loader/libvulkan1_1.3.204.1-2_i386.deb
7e4fa9525709a42543a4402edbdd0f61  ./pool/main/w/wayland/libwayland-client0_1.20.0-1ubuntu0.1_i386.deb
2195a9b09ff1fc244c2bf3fa4c763689  ./pool/main/libz/libzstd/libzstd1_1.4.8+dfsg-3build1_i386.deb
8cb8b6e2ca26252a55cc4af321269e78  ./pool/main/z/zlib/zlib1g_1.2.11.dfsg-2ubuntu9.2_i386.deb
75e1e65413f2d12b84e47455f42eac57  ./pool/restricted/b/bcmwl/bcmwl-kernel-source_6.30.223.271+bdcom-0ubuntu10~22.04.1_amd64.deb
729d428722aa2fc7f54852685d92625f  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-cfg1-390_390.157-0ubuntu0.22.04.1_amd64.deb
c58adea9ca6ed813fa882791de93eef5  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-common-390_390.157-0ubuntu0.22.04.1_all.deb
cedfbc2bc8121fc2916246d0fe2f50d8  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-compute-390_390.157-0ubuntu0.22.04.1_amd64.deb
73c32b03a09c316e58cd41032182155c  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-decode-390_390.157-0ubuntu0.22.04.1_amd64.deb
f5ad3364533a13d581759cb34db5dfd0  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-encode-390_390.157-0ubuntu0.22.04.1_amd64.deb
6313dd7e86b6008a598a2d7cb08b4b96  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-fbc1-390_390.157-0ubuntu0.22.04.1_amd64.deb
623125a8c30b6ae29d466d996cbd8673  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-gl-390_390.157-0ubuntu0.22.04.1_amd64.deb
93d90b832856d76144b791dd0e442a47  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-ifr1-390_390.157-0ubuntu0.22.04.1_amd64.deb
f4e200f20a2065e93ba8997600fd9048  ./pool/restricted/n/nvidia-graphics-drivers-390/nvidia-compute-utils-390_390.157-0ubuntu0.22.04.1_amd64.deb
132098476f43927fefe4703f43736d7a  ./pool/restricted/n/nvidia-graphics-drivers-390/nvidia-driver-390_390.157-0ubuntu0.22.04.1_amd64.deb
8c81d8dd23b8261ad60384e3a8740d0f  ./pool/restricted/n/nvidia-graphics-drivers-390/nvidia-kernel-common-390_390.157-0ubuntu0.22.04.1_amd64.deb
5d77844e961ade79a70b9028c812bc9f  ./pool/restricted/n/nvidia-graphics-drivers-390/nvidia-kernel-source-390_390.157-0ubuntu0.22.04.1_amd64.deb
643aa91792088853fcdf7e208dd13f4a  ./pool/restricted/n/nvidia-graphics-drivers-390/nvidia-utils-390_390.157-0ubuntu0.22.04.1_amd64.deb
3e0ae632efb4cdd734a60556de09b9a1  ./pool/restricted/n/nvidia-graphics-drivers-390/xserver-xorg-video-nvidia-390_390.157-0ubuntu0.22.04.1_amd64.deb
b937aa4a5e03f84b1ea68400d78c6886  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-compute-390_390.157-0ubuntu0.22.04.1_i386.deb
c355eeac6e18709ffab6db31bd349ac2  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-decode-390_390.157-0ubuntu0.22.04.1_i386.deb
794baf70d2abd38720d982672c70f4e9  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-encode-390_390.157-0ubuntu0.22.04.1_i386.deb
71c2f5ad8620ea6ebbb1bac8e1df2e22  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-fbc1-390_390.157-0ubuntu0.22.04.1_i386.deb
423dd43d5c7145f39191da6f5ad89f9b  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-gl-390_390.157-0ubuntu0.22.04.1_i386.deb
afde93f86d681577ff1f78c362988028  ./pool/restricted/n/nvidia-graphics-drivers-390/libnvidia-ifr1-390_390.157-0ubuntu0.22.04.1_i386.deb
9f045668ffd8e022ca82075bd57089eb  ./pool/restricted/n/nvidia-graphics-drivers-470/libnvidia-cfg1-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
da5786cd8fcb45b0d2a4fe2abae750b6  ./pool/restricted/n/nvidia-graphics-drivers-470/libnvidia-common-470_470.161.03-0ubuntu0.22.04.1_all.deb
6a75f17878273c9c8d82102d060d896f  ./pool/restricted/n/nvidia-graphics-drivers-470/libnvidia-compute-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
1718f5c1d75bd83e141b51f576c6fa5f  ./pool/restricted/n/nvidia-graphics-drivers-470/libnvidia-decode-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
f8b8d56ec6f9de10206f76c707effdf4  ./pool/restricted/n/nvidia-graphics-drivers-470/libnvidia-encode-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
67bc1518c1a7571943ea78bc2babb52d  ./pool/restricted/n/nvidia-graphics-drivers-470/libnvidia-extra-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
81d1ce1e669c9ffd4864d8f51aebdf1b  ./pool/restricted/n/nvidia-graphics-drivers-470/libnvidia-fbc1-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
8c6ab716e812999f4417a832e96ecf41  ./pool/restricted/n/nvidia-graphics-drivers-470/libnvidia-gl-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
bda61cf4d04f8b1dedb5158fa15078d1  ./pool/restricted/n/nvidia-graphics-drivers-470/libnvidia-ifr1-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
eeec18c55222ff10c3b17517e8b6f7e1  ./pool/restricted/n/nvidia-graphics-drivers-470/nvidia-compute-utils-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
b61a662402966a4e919990f5c08aaa9d  ./pool/restricted/n/nvidia-graphics-drivers-470/nvidia-driver-460_470.161.03-0ubuntu0.22.04.1_amd64.deb
23b1f19528bc186db58d99c4b7bd9f23  ./pool/restricted/n/nvidia-graphics-drivers-470/nvidia-driver-465_470.161.03-0ubuntu0.22.04.1_amd64.deb
2657de0454767cc8e170a2c057761042  ./pool/restricted/n/nvidia-graphics-drivers-470/nvidia-driver-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
920714549390aab39329944369b08ae5  ./pool/restricted/n/nvidia-graphics-drivers-470/nvidia-kernel-common-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
204cb09e6183c257b215631a3e5b62e7  ./pool/restricted/n/nvidia-graphics-drivers-470/nvidia-kernel-source-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
1f1d6a17876fc60ef1a0d34e741a953f  ./pool/restricted/n/nvidia-graphics-drivers-470/nvidia-utils-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
566585b5fd909ee46fd1d7f3d01e59d1  ./pool/restricted/n/nvidia-graphics-drivers-470/xserver-xorg-video-nvidia-470_470.161.03-0ubuntu0.22.04.1_amd64.deb
2ab47c5c004427ff06730e9016145751  ./pool/restricted/n/nvidia-graphics-drivers-510/libnvidia-cfg1-510_510.108.03-0ubuntu0.22.04.1_amd64.deb
f2307da20af827b20e2a009b0de493be  ./pool/restricted/n/nvidia-graphics-drivers-510/libnvidia-common-510_510.108.03-0ubuntu0.22.04.1_all.deb
94012c7de7b7ef0c78c22284d3686cec  ./pool/restricted/n/nvidia-graphics-drivers-510/libnvidia-compute-510_510.108.03-0ubuntu0.22.04.1_amd64.deb
64c49dca0e327dc5c5556f98cdae14b4  ./pool/restricted/n/nvidia-graphics-drivers-510/libnvidia-decode-510_510.108.03-0ubuntu0.22.04.1_amd64.deb
ee369f39ac2c8fe1d88d25087f2a3679  ./pool/restricted/n/nvidia-graphics-drivers-510/libnvidia-encode-510_510.108.03-0ubuntu0.22.04.1_amd64.deb
42444efaee7a69f72711c496cea5c79c  ./pool/restricted/n/nvidia-graphics-drivers-510/libnvidia-extra-510_510.108.03-0ubuntu0.22.04.1_amd64.deb
122722b3860ea41e9ee5edb0f3131dc9  ./pool/restricted/n/nvidia-graphics-drivers-510/libnvidia-fbc1-510_510.108.03-0ubuntu0.22.04.1_amd64.deb
6afe86c800affa1dd7303f3538b457be  ./pool/restricted/n/nvidia-graphics-drivers-510/libnvidia-gl-510_510.108.03-0ubuntu0.22.04.1_amd64.deb
e55bf10061cc05acff46dacc9f441e15  ./pool/restricted/n/nvidia-graphics-drivers-510/nvidia-compute-utils-510_510.108.03-0ubuntu0.22.04.1_amd64.deb
5ef7aee947e45ace5126c77b3623d44a  ./pool/restricted/n/nvidia-graphics-drivers-510/nvidia-driver-495_510.108.03-0ubuntu0.22.04.1_amd64.deb
69eac8c8520d3de2a89571e33df6cf19  ./pool/restricted/n/nvidia-graphics-drivers-510/nvidia-driver-510_510.108.03-0ubuntu0.22.04.1_amd64.deb
84d692ed26992ff899a392bee845d142  ./pool/restricted/n/nvidia-graphics-drivers-510/nvidia-kernel-common-510_510.108.03-0ubuntu0.22.04.1_amd64.deb
a371f887a74e60e047ba3f487163c3c8  ./pool/restricted/n/nvidia-graphics-drivers-510/nvi
2023-12-22T14:52:02.0519665Z ##[group]Run rojopolis/spellcheck-github-actions@0.29.0
2023-12-22T14:52:02.0520166Z with:
2023-12-22T14:52:02.0520480Z ##[endgroup]
2023-12-22T14:52:02.0717567Z ##[command]/usr/bin/docker run --name jonasbngithubactionspellcheck0290_55119f --label 15b597 --workdir /github/workspace --rm -e "INPUT_CONFIG_PATH" -e "INPUT_SOURCE_FILES" -e "INPUT_TASK_NAME" -e "INPUT_OUTPUT_FILE" -e "HOME" -e "GITHUB_JOB" -e "GITHUB_REF" -e "GITHUB_SHA" -e "GITHUB_REPOSITORY" -e "GITHUB_REPOSITORY_OWNER" -e "GITHUB_REPOSITORY_OWNER_ID" -e "GITHUB_RUN_ID" -e "GITHUB_RUN_NUMBER" -e "GITHUB_RETENTION_DAYS" -e "GITHUB_RUN_ATTEMPT" -e "GITHUB_REPOSITORY_ID" -e "GITHUB_ACTOR_ID" -e "GITHUB_ACTOR" -e "GITHUB_TRIGGERING_ACTOR" -e "GITHUB_WORKFLOW" -e "GITHUB_HEAD_REF" -e "GITHUB_BASE_REF" -e "GITHUB_EVENT_NAME" -e "GITHUB_SERVER_URL" -e "GITHUB_API_URL" -e "GITHUB_GRAPHQL_URL" -e "GITHUB_REF_NAME" -e "GITHUB_REF_PROTECTED" -e "GITHUB_REF_TYPE" -e "GITHUB_WORKFLOW_REF" -e "GITHUB_WORKFLOW_SHA" -e "GITHUB_WORKSPACE" -e "GITHUB_ACTION" -e "GITHUB_EVENT_PATH" -e "GITHUB_ACTION_REPOSITORY" -e "GITHUB_ACTION_REF" -e "GITHUB_PATH" -e "GITHUB_ENV" -e "GITHUB_STEP_SUMMARY" -e "GITHUB_STATE" -e "GITHUB_OUTPUT" -e "RUNNER_OS" -e "RUNNER_ARCH" -e "RUNNER_NAME" -e "RUNNER_ENVIRONMENT" -e "RUNNER_TOOL_CACHE" -e "RUNNER_TEMP" -e "RUNNER_WORKSPACE" -e "ACTIONS_RUNTIME_URL" -e "ACTIONS_RUNTIME_TOKEN" -e "ACTIONS_CACHE_URL" -e "ACTIONS_RESULTS_URL" -e GITHUB_ACTIONS=true -e CI=true -v "/var/run/docker.sock":"/var/run/docker.sock" -v "/home/runner/work/_temp/_github_home":"/github/home" -v "/home/runner/work/_temp/_github_workflow":"/github/workflow" -v "/home/runner/work/_temp/_runner_file_commands":"/github/file_commands" -v "/home/runner/work/execution-apis/execution-apis":"/github/workspace" jonasbn/github-action-spellcheck:0.29.0
2023-12-22T14:52:02.3495894Z 
2023-12-22T14:52:02.3497001Z Using pyspelling on configuration outlined in >spellcheck.yaml<
2023-12-22T14:52:02.3500783Z Checking files matching specified outlined in >spellcheck.yaml<
2023-12-22T14:52:02.3502123Z ----------------------------------------------------------------
2023-12-22T14:52:05.7544475Z Spelling check passed :)
# Security Policy

This documentation was last updated December 2019. The latest version can
always be found at: 
https://github.com/atheme/atheme/blob/master/SECURITY.md

## Supported Versions

Currently, the latest minor release will receive security and bugfix
updates as new point releases. This is currently the 7.2 release series,
with 7.2.10-r2 being the currently supported stable release.

For the lifetime of the upcoming 7.3 release series, we are planning to keep
supporting the 7.2 series with security updates as needed.

Older releases are not officially supported. We may provide updates for
severe security vulnerabilities affecting them on a best-effort basis,
however we cannot recommend relying on this and strongly urge users to
update to an officially supported release instead.

If you are using Atheme as distributed by a third party (such as an OS
package repository), they may have backported security fixes to an earlier
release. In such a case, please consult your distributor's packaging
policy for details.

## Reporting a Vulnerability

Our security contacts are, in alphabetical order:

| GitHub username | freenode account name |
| --------------- | --------------------- |
| @aaronmdjones   | `amdj`                |
| @ilbelkyr       | `ilbelkyr`            |

If circumstances permit, you can contact us via IRC by sending us a private
message on the freenode IRC network. Please double-check you are actually
talking to the right people; we are generally opped in the `#atheme` channel.

Otherwise, you may prefer to contact us via email at `security@atheme.org`
instead. If you use PGP, please encrypt your mail for *all* of these keys:

- [`6E7C348A716E59FAC9E6D1A04B3896ABA96B3085`][pgp-ilbelkyr]
- [`97D58E607188C8C986481CB76A2F898000519052`][pgp-amdj]

We will look into the issue as quickly as possible. To avoid us having to
request further clarification, please try to include all relevant details,
especially whether the vulnerability has already been disclosed to third
parties.

## Vulnerability Disclosure

We aim to ensure the security of Atheme installations and their users. To
this end, we follow a coordinated disclosure model under which we provide
administrators of major Atheme installations with advance notice of security
vulnerabilities and their corresponding fixes before sharing the details
with the general public. Where possible, we will also publish mitigation
instructions before releasing the details. Outside extraordinary circumstances,
we will release full details at most two weeks after learning about the
vulnerability.

Security-related announcements will be found in our Git repository's
`NEWS.md` file, as well as in the release notes for applicable releases.

[pgp-ilbelkyr]: https://keys.openpgp.org/vks/v1/by-fingerprint/6E7C348A716E59FAC9E6D1A04B3896ABA96B3085
[pgp-amdj]: https://keys.openpgp.org/vks/v1/by-fingerprint/97D58E607188C8C986481CB76A2F898000519052
## Atheme IRC Services

Atheme is a set of services for IRC networks designed for large IRC networks
with high scalability requirements. It is relatively mature software, with
some code and design derived from another package called Shrike.

Atheme's behavior is tunable using modules and a highly detailed configuration
file. Almost all behavior can be changed at deployment time just by editing
the configuration.



## Obtaining Atheme

If you have a modern version of Git (1.6.5 or newer), you can recursively
clone the repository:

    $ git clone --branch 'release/7.2' --recursive 'https://github.com/atheme/atheme/' atheme-devel
    $ cd atheme-devel

If you have an older version of Git, you must clone the repository, and then
fetch its submodules:

    $ git clone 'https://github.com/atheme/atheme/' atheme-devel
    $ cd atheme-devel
    $ git checkout release/7.2
    $ git submodule init
    $ git submodule update

If you don't have Git, you can download a package archive from our website at
<https://atheme.github.io/>.

If you are browsing our GitHub repository, please do NOT click the "Download
ZIP" button or the "Source code" links there, as they will give you an archive
that lacks the required submodules. There are proper `.tar.bz2` or `.tar.xz`
archives attached to each release under "Assets", which is what the "Download"
button on our website will take you to.



## Basic build instructions for the impatient

Obtain the source code repository and change into its directory (using the
commands given above).

If you are building Atheme on a GNU/Linux system, or something which can
sufficiently emulate that (like WSL 2 on Windows 10), execute the following
commands:

    $ ./configure
    $ make
    $ make install

If you are building Atheme on an OpenBSD (or similar) system, execute the
following commands instead:

    # pkg_add gmake
    $ ./configure
    $ gmake
    $ gmake install



## Getting More Help

If you're still lost, read the [INSTALL](INSTALL) file or check out our wiki
for more hints.

- [Our Website](https://atheme.github.io/)
- [Our GitHub Repository](https://github.com/atheme/atheme/)
- [The Atheme Wiki](https://github.com/atheme/atheme/wiki/)
- [The #atheme channel on freenode](ircs://chat.freenode.net:6697/#atheme)
Downloading the Git repository
------------------------------

Atheme's Git repository is available at the following address:
<https://github.com/atheme/atheme/>

If you have a modern version of Git (1.6.5 or newer), you can recursively
clone the repository:

    $ git clone --branch 'release/7.2' --recursive 'https://github.com/atheme/atheme/' atheme-devel
    $ cd atheme-devel

If you have an older version of Git, you must clone the repository, and then
fetch its submodules:

    $ git clone 'https://github.com/atheme/atheme/' atheme-devel
    $ cd atheme-devel
    $ git checkout release/7.2
    $ git submodule init
    $ git submodule update



Building from the Git repository
--------------------------------

If you have already checked out the Atheme Git repository, but you have
been instructed to read this file when configuring Atheme, then you did not
follow the advice above. Use the following commands to resolve the error:

    $ git submodule init
    $ git submodule update



Building from release tarballs
------------------------------

If you did not obtain this software via Git, but received the GIT-Access.txt
error when configuring Atheme anyway, this means you downloaded the wrong
source archive.

When downloading releases from GitHub, you MUST use the *attached* archive:

    atheme-7.x.x.tar.bz2    (or .tar.xz)

DO NOT use the "Download ZIP" button or the "Source code" links, as they are
missing the required submodules.
#include "atheme.h"

int main(int argc, const char *argv)
{
        char b64[] = "Q2hyaXNUZXN0AENocmlzVGVzdABwbXpqZ3VseGF5ZWJjcGJ3cXFkaA==";
        char b64out[BUFSIZE];
        char b64pristine[] = "ChrisTest\0ChrisTest\0pmzjgulxayebcpbwqqdh";
        int rc;

        rc = base64_decode(b64, b64out, BUFSIZE);

        printf("decode: %d sz: %zu\n", rc, sizeof(b64pristine));
        printf("b64pri: %s:%s:%s\n", b64pristine, b64pristine + 10, b64pristine + 20);
        printf("b64out: %s:%s:%s\n", b64out, b64out + 10, b64out + 20);

        if (memcmp(b64out, b64pristine, sizeof(b64pristine)))
        {
                printf("FAIL.\n");
        }
        else
        {
                printf("PASS.\n");
        }
}/*
 * Copyright (c) 2012 William Pitcock <nenolod@dereferenced.org>.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

#include "atheme.h"
#include "libathemecore.h"

static unsigned int verify_entity_uids(void)
{
        unsigned int errcnt = 0;
        mowgli_patricia_t *known = mowgli_patricia_create(strcasecanon);
        myentity_iteration_state_t state;
        myentity_t *mt;

        MYENTITY_FOREACH_T(mt, &state, ENT_ANY)
        {
                myentity_t *mt2;

                if ((mt2 = mowgli_patricia_retrieve(known, mt->id)) != NULL)
                {
                        mowgli_strlcpy(mt->id, myentity_alloc_uid(), sizeof mt->id);

                        slog(LG_INFO, "*** phase 4: entity '%s' has duplicate EID '%s' (belonging to '%s'); regenerating as '%s'",
                                        mt->name, mt2->id, mt2->name, mt->id);

                        errcnt++;
                        continue;
                }

                mowgli_patricia_add(known, mt->id, mt);
        }

        mowgli_patricia_destroy(known, NULL, NULL);
        return errcnt;
}

static void verify_channel_registrations(void)
{
        mowgli_patricia_iteration_state_t state;
        mychan_t *mc;

        MOWGLI_PATRICIA_FOREACH(mc, &state, mclist)
        {
                mowgli_node_t *n, *tn;
                mowgli_patricia_t *known = mowgli_patricia_create(strcasecanon);

                slog(LG_INFO, "*** phase 3: checking %s for consistency", mc->name);

                MOWGLI_ITER_FOREACH_SAFE(n, tn, mc->chanacs.head)
                {
                        chanacs_t *ca = n->data, *ca2;
                        stringref key = ca->entity != NULL ? ca->entity->name : ca->host;

                        if (key == NULL)
                        {
                                slog(LG_INFO, "*** phase 3: %s: chanacs entry %p is dangling; unlinking from object store", mc->name, ca);
                                mowgli_node_delete(&ca->cnode, &mc->chanacs);
                                continue;
                        }

                        if ((ca2 = mowgli_patricia_retrieve(known, key)) != NULL)
                        {
                                slog(LG_INFO, "*** phase 3: %s: chanacs entry '%s' (%p) duplicates chanacs entry %p", mc->name, ca->entity != NULL ? ca->entity->name : ca->host, ca, ca2);
                                mowgli_node_delete(&ca->cnode, &mc->chanacs);
                                continue;
                        }

                        if ((ca->level & CA_AKICK) && ca->level != CA_AKICK)
                        {
                                unsigned int flags = ca->level & ~CA_AKICK;

                                ca->level = CA_AKICK;
                                slog(LG_INFO, "*** phase 3: %s: chanacs entry '%s' (%p) is an AKICK but has other flags -- removing %s from it",
                                     mc->name, ca->entity != NULL ? ca->entity->name : ca->host, ca, bitmask_to_flags(flags));
                        }

                        mowgli_patricia_add(known, key, ca);
                }

                mowgli_patricia_destroy(known, NULL, NULL);
        }
}

static void handle_mdep(database_handle_t *db, const char *type)
{
        const char *modname = db_sread_word(db);

        module_load(modname);
}

int main(int argc, char *argv[])
{
        atheme_bootstrap();
        atheme_init(argv[0], LOGDIR "/dbverify.log");
        atheme_setup();
        module_t *m;
        unsigned int errcnt;
        char *filename = argv[1] ? argv[1] : "services.db";

        runflags = RF_LIVE;
        datadir = DATADIR;
        strict_mode = false;
        offline_mode = true;

        slog(LG_INFO, "dbverify is operating on %s", filename);

        m = module_load("backend/opensex");

        db_unregister_type_handler("MDEP");
        db_register_type_handler("MDEP", handle_mdep);

        slog(LG_INFO, "*** phase 1: demarshaling objects from opensex datastore");

        runflags &= ~RF_LIVE;
        db_load(filename);
        runflags |= RF_LIVE;

        slog(LG_INFO, "*** phase 2: doing basic atheme database consistency check");

        db_check();

        slog(LG_INFO, "*** phase 3: verifying channel registration integrity");

        verify_channel_registrations();

        slog(LG_INFO, "*** phase 4: verifying entity UID integrity");

        while ((errcnt = verify_entity_uids()) != 0)
                slog(LG_INFO, "*** phase 4: %u error(s) were found; running another pass", errcnt);

        slog(LG_INFO, "*** phase 5: writing  state to object store");

        db_save(filename);

        return EXIT_SUCCESS;
}/*
 * Copyright (c) 2013 William Pitcock <nenolod@dereferenced.org>.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

#include "atheme.h"
#include "libathemecore.h"

#if defined HAVE_OPENSSL && defined HAVE_OPENSSL_EC_H

#include <openssl/ec.h>
#include <openssl/ecdsa.h>
#include <openssl/evp.h>
#include <openssl/rand.h>
#include <openssl/sha.h>

int main(int argc, const char **argv)
{
        BIO *in;
        EC_KEY *eckey;
        char challenge[BUFSIZE];
        const unsigned char *workbuf_p;
        unsigned char *sig_buf, *sig_buf_p;
        size_t len;
        unsigned int buf_len, i;

        if (argv[1] == NULL || argv[2] == NULL)
        {
                fprintf(stderr, "usage: %s [keyfile] [base64challenge]\n", argv[0]);
                return EXIT_FAILURE;
        }

        in = BIO_new(BIO_s_file());
        BIO_read_filename(in, argv[1]);
        eckey = PEM_read_bio_ECPrivateKey(in, NULL, NULL, NULL);
        BIO_free(in);

        if (!EC_KEY_check_key(eckey))
        {
                fprintf(stderr, "Key data for %s is inconsistent.\n", argv[1]);
                return EXIT_FAILURE;
        }

        memset(challenge, '\0', sizeof challenge);
        len = base64_decode(argv[2], challenge, BUFSIZE);
        workbuf_p = (unsigned char *) challenge;

        buf_len = ECDSA_size(eckey);
        sig_buf = mowgli_alloc(buf_len);
        sig_buf_p = sig_buf;

        if (!ECDSA_sign(0, challenge, len, sig_buf_p, &buf_len, eckey))
        {
                fprintf(stderr, "Failed to sign challenge!\n");
                return EXIT_FAILURE;
        }

        base64_encode(sig_buf, buf_len, challenge, BUFSIZE);
        printf("%s\n", challenge);

        mowgli_free(sig_buf);

        return EXIT_SUCCESS;
}

#else

int main(int argc, const char **argv)
{
        printf("I'm sorry, you didn't compile Atheme with OpenSSL support.\n");
        return EXIT_SUCCESS;
}

#endif
"        index : doc        

main

FreeBSD documentation tree        
aboutsummaryrefslogtreecommitdiff        

log msg

path: root/documentation/content/en/books/faq/_index.adoc
blob: 7ca37afd5b2f26203c69e46603350bc5372aaa08 (plain) (blame)
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
397
398
399
400
401
402
403
404
405
406
407
408
409
410
411
412
413
414
415
416
417
418
419
420
421
422
423
424
425
426
427
428
429
430
431
432
433
434
435
436
437
438
439
440
441
442
443
444
445
446
447
448
449
450
451
452
453
454
455
456
457
458
459
460
461
462
463
464
465
466
467
468
469
470
471
472
473
474
475
476
477
478
479
480
481
482
483
484
485
486
487
488
489
490
491
492
493
494
495
496
497
498
499
500
501
502
503
504
505
506
507
508
509
510
511
512
513
514
515
516
517
518
519
520
521
522
523
524
525
526
527
528
529
530
531
532
533
534
535
536
537
538
---
title: Frequently Asked Questions for FreeBSD
authors:
  - author: The FreeBSD Documentation Project
copyright: 1995-2023 The FreeBSD Documentation Project
description: Frequently Asked Questions for FreeBSD
trademarks: ["freebsd", "ieee", "linux", "microsoft", "openbsd", "netbsd", "general"]
bookOrder: 5
tags: ["FAQ", "FreeBSD FAQ"]
layout: single
---

= Frequently Asked Questions for FreeBSD
:doctype: book
:toc: macro
:toclevels: 1
:icons: font
:sectnums:
:sectnumlevels: 6
:partnums:
:source-highlighter: rouge
:experimental:
:images-path: books/faq/

ifdef::env-beastie[]
ifdef::backend-html5[]
include::shared/authors.adoc[]
include::shared/mirrors.adoc[]
include::shared/releases.adoc[]
include::shared/attributes/attributes-{{% lang %}}.adoc[]
include::shared/{{% lang %}}/teams.adoc[]
include::shared/{{% lang %}}/mailing-lists.adoc[]
include::shared/{{% lang %}}/urls.adoc[]
endif::[]
ifdef::backend-pdf,backend-epub3[]
include::../../../../../shared/asciidoctor.adoc[]
endif::[]
endif::[]

ifndef::env-beastie[]
include::../../../../../shared/asciidoctor.adoc[]
endif::[]

[.abstract-title]
Abstract

This is the Frequently Asked Questions (FAQ) for FreeBSD.
Every effort has been made to make this FAQ as informative as possible.

'''

toc::[]

[[introduction]]
== Introduction

Welcome to the world of FreeBSD!
In this section, we provide a comprehensive overview of what FreeBSD is, its origins, goals, use cases, and the community behind it.

Discover the reasons behind its name, learn how to contribute to this project, and explore the rich ecosystem of FreeBSD within the context of open-source operating systems.

[[what-is-FreeBSD]]
=== What is FreeBSD?

FreeBSD is a versatile and open-source UNIX(R)-like operating system known for its exceptional stability, security, and performance.
Developed by a dedicated community of volunteers, i
Skip site navigation (1)Skip section navigation (2)
FreeBSD
Donate to FreeBSD
Search
   
Home
About
Get FreeBSD
Documentation
Community
Developers
Support
Foundation

FreeBSD Manual Pages
   
ed
 man apropos
 
   
1 - General Commands
 
FreeBSD 14.3-RELEASE and Ports
 
All Architectures
 
html

home | help
ED(1)			    General Commands Manual			 ED(1)

NAME
       ed, red -- text editor

SYNOPSIS
       ed [-] [-s] [-p string] [file]
       red [-] [-s] [-p	string]	[file]

DESCRIPTION
       The  ed	utility	is a line-oriented text	editor.	 It is used to create,
       display,	modify and otherwise manipulate	text files.  When  invoked  as
       red, the	editor runs in "restricted" mode, in which the only difference
       is  that	the editor restricts the use of	filenames which	start with `!'
       (interpreted as shell commands by ed) or	 contain  a  `/'.   Note  that
       editing outside of the current directory	is only	prohibited if the user
       does  not  have	write  access to the current directory.	 If a user has
       write access to the current directory, then symbolic links can be  cre-
       ated in the current directory, in which case red	will not stop the user
       from editing the	file that the symbolic link points to.

       If  invoked  with a file	argument, then a copy of file is read into the
       editor's	buffer.	 Changes are made to this copy	and  not  directly  to
       file itself.  Upon quitting ed, any changes not explicitly saved	with a
       w command are lost.

       Editing	is  done in two	distinct modes:	command	and input.  When first
       invoked,	ed is in command mode.	In this	mode commands  are  read  from
       the  standard input and executed	to manipulate the contents of the edi-
       tor buffer.  A typical command might look like:

       ,s/old/new/g

       which replaces all occurrences of the string old	with new.

       When an input command, such as a	(append), i (insert) or	c (change), is
       given, ed enters	input mode.  This is the primary means of adding  text
       to a file.  In this mode, no commands are available; instead, the stan-
       dard  input is written directly to the editor buffer.  Lines consist of
       text up to and including	a newline character.  Input mode is terminated
       by entering a single period (.) on a line.

       All ed commands operate on whole	lines or ranges	of lines; e.g.,	the  d
       command	deletes	 lines;	 the  m	command	moves lines, and so on.	 It is
       possible	to modify only a portion of a line by means of replacement, as
       in the example above.  However even here, the s command is  applied  to
       whole lines at a	time.

       In  general,  ed	 commands consist of zero or more line addresses, fol-
       lowed by	a single character command and possibly	additional parameters;
       i.e., commands have the structure:

       [address[,address]]command[parameters]

       The address(es) indicate	the line or range of lines to be  affected  by
       the  command.   If  fewer addresses are given than the command accepts,
       then default addresses are supplied.

OPTIONS
       The following options are available:

       -s      Suppress	diagnostics.  This should be used if ed's standard in-
	       put is from a script.

       -p string
	       Specify a command prompt.  This may be toggled on and off  with
	       the P command.

       file    Specify the name	of a file to read.  If file is prefixed	with a
	       bang  (!),  then	it is interpreted as a shell command.  In this
	       case, what is read is the standard output of file executed  via
	       sh(1).	To  read  a file whose name begins with	a bang,	prefix
	       the name	with a backslash (\).  The default filename is set  to
	       file only if it is not prefixed with a bang.

LINE ADDRESSING
       An address represents the number	of a line in the buffer.  The ed util-
       ity maintains a current address which is	typically supplied to commands
       as  the	default	 address when none is specified.  When a file is first
       read, the current address is set	to the last line of the	file.  In gen-
       eral, the current address is set	to the last line affected  by  a  com-
       mand.

       A  line address is constructed from one of the bases in the list	below,
       optionally followed by a	numeric	offset.	 The offset  may  include  any
       combination  of	digits,	 operators  (i.e., +, -	and ^) and whitespace.
       Addresses are read from left to right, and their	 values	 are  computed
       relative	to the current address.

       One  exception to the rule that addresses represent line	numbers	is the
       address 0 (zero).  This means "before the first	line,"	and  is	 legal
       wherever	it makes sense.

       An  address range is two	addresses separated either by a	comma or semi-
       colon.  The value of the	first address in a  range  cannot  exceed  the
       value of	the second.  If	only one address is given in a range, then the
       second address is set to	the given address.  If an n-tuple of addresses
       is given	where n	> 2, then the corresponding range is determined	by the
       last  two  addresses  in	the n-tuple.  If only one address is expected,
       then the	last address is	used.

       Each address in a comma-delimited range is interpreted relative to  the
       current address.	 In a semi-colon-delimited range, the first address is
       used  to	set the	current	address, and the second	address	is interpreted
       relative	to the first.

       The following address symbols are recognized:

       .       The current line	(address) in the buffer.

       $       The last	line in	the buffer.

       n       The nth line in the buffer where	n is a	number	in  the	 range
	       [0,$].

       - or ^  The  previous  line.   This  is equivalent to -1	and may	be re-
	       peated with cumulative effect.

       -n or ^n
	       The nth previous	line, where n is a non-negative	number.

       +       The next	line.  This is equivalent to +1	and  may  be  repeated
	       with cumulative effect.

       +n      The nth next line, where	n is a non-negative number.

       , or %  The first through last lines in the buffer.  This is equivalent
	       to the address range 1,$.

       ;       The  current through last lines in the buffer.  This is equiva-
	       lent to the address range .,$.

       /re/    The next	line containing	the regular expression re.  The	search
	       wraps to	the beginning of the buffer and	continues down to  the
	       current line, if	necessary.  // repeats the last	search.

       ?re?    The  previous  line  containing the regular expression re.  The
	       search wraps to the end of the buffer and continues up  to  the
	       current line, if	necessary.  ?? repeats the last	search.

       'lc     The line	previously marked by a k (mark)	command, where lc is a
	       lower case letter.

REGULAR	EXPRESSIONS
       Regular	expressions are	patterns used in selecting text.  For example,
       the command:

       g/string/

       prints all lines	containing string.  Regular expressions	are also  used
       by the s	command	for selecting old text to be replaced with new.

       In  addition  to	 a specifying string literals, regular expressions can
       represent classes of strings.  Strings thus represented are said	to  be
       matched by the corresponding regular expression.	 If it is possible for
       a regular expression to match several strings in	a line,	then the left-
       most longest match is the one selected.

       The following symbols are used in constructing regular expressions:

       c       Any character c not listed below, including `{',	`}', `(', `)',
	       `<' and `>', matches itself.

       \c      Any  backslash-escaped  character  c, except for	`{', `}', `(',
	       `)', `<'	and `>', matches itself.

       .       Match any single	character.

       [char-class]
	       Match any single	character in char-class.  To include a `]'  in
	       char-class, it must be the first	character.  A range of charac-
	       ters  may  be specified by separating the end characters	of the
	       range with a `-', e.g., `a-z' specifies the lower case  charac-
	       ters.   The  following  literal expressions can also be used in
	       char-class to specify sets of characters:

	       [:alnum:]    [:cntrl:]	 [:lower:]    [:space:]
	       [:alpha:]    [:digit:]	 [:print:]    [:upper:]
	       [:blank:]    [:graph:]	 [:punct:]    [:xdigit:]

	       If `-' appears as the first or last  character  of  char-class,
	       then  it	 matches  itself.   All	other characters in char-class
	       match themselves.

	       Patterns	in char-class of the form:

		 [.col-elm.] or,
		 [=col-elm=]

	       where col-elm is	a collating element are	interpreted  according
	       to  the current locale settings (not currently supported).  See
	       regex(3)	and re_format(7) for  an  explanation  of  these  con-
	       structs.

       [^char-class]
	       Match   any  single  character,	other  than  newline,  not  in
	       char-class.  Char-class is defined as above.

       ^       If ^ is the first character of a	regular	 expression,  then  it
	       anchors	the  regular  expression  to  the beginning of a line.
	       Otherwise, it matches itself.

       $       If $ is the last	character of a regular expression, it  anchors
	       the  regular  expression	 to  the end of	a line.	 Otherwise, it
	       matches itself.

       \<      Anchor the single character regular expression or subexpression
	       immediately following it	to the beginning of a word.  (This may
	       not be available)

       \>      Anchor the single character regular expression or subexpression
	       immediately following it	to the end of a	word.  (This  may  not
	       be available)

       \(re\)  Define  a  subexpression	 re.  Subexpressions may be nested.  A
	       subsequent backreference	of the form \n,	where n	is a number in
	       the range [1,9],	expands	to the text matched by the nth	subex-
	       pression.   For	example,  the  regular	expression  `\(.*\)\1'
	       matches any string consisting of	identical adjacent substrings.
	       Subexpressions are ordered relative to their left delimiter.

       *       Match the single	character regular expression or	 subexpression
	       immediately preceding it	zero or	more times.  If	* is the first
	       character  of  a	 regular  expression or	subexpression, then it
	       matches itself.	The * operator sometimes yields	unexpected re-
	       sults.  For example, the	regular	expression  `b*'  matches  the
	       beginning  of  the  string  `abbb' (as opposed to the substring
	       `bbb'), since a null match is the only left-most	match.

       \{n,m\} or \{n,\} or \{n\}
	       Match the single	character regular expression or	 subexpression
	       immediately  preceding it at least n and	at most	m times.  If m
	       is omitted, then	it matches at least n times.  If the comma  is
	       also omitted, then it matches exactly n times.

       Additional regular expression operators may be defined depending	on the
       particular regex(3) implementation.

COMMANDS
       All  ed	commands are single characters,	though some require additional
       parameters.  If a command's parameters extend over several lines,  then
       each line except	for the	last must be terminated	with a backslash (\).

       In  general,  at	 most  one command is allowed per line.	 However, most
       commands	accept a print suffix, which is	any of p (print), l (list), or
       n (enumerate), to print the last	line affected by the command.

       An interrupt (typically ^C) has the effect of aborting the current com-
       mand and	returning the editor to	command	mode.

       The ed utility recognizes the following	commands.   The	 commands  are
       shown  together	with  the default address or address range supplied if
       none is specified (in parenthesis).

       (.)a    Append text to the buffer after the addressed  line.   Text  is
	       entered in input	mode.  The current address is set to last line
	       entered.

       (.,.)c  Change  lines  in  the buffer.  The addressed lines are deleted
	       from the	buffer,	and text is appended in	their place.  Text  is
	       entered in input	mode.  The current address is set to last line
	       entered.

       (.,.)d  Delete the addressed lines from the buffer.  If there is	a line
	       after  the  deleted  range,  then the current address is	set to
	       this line.  Otherwise the current address is set	 to  the  line
	       before the deleted range.

       e file  Edit file, and sets the default filename.  If file is not spec-
	       ified,  then  the  default  filename is used.  Any lines	in the
	       buffer are deleted before the new file is  read.	  The  current
	       address is set to the last line read.

       e !command
	       Edit  the  standard  output  of !command, (see !command below).
	       The default filename is unchanged.  Any lines in	the buffer are
	       deleted before the output of command is read.  The current  ad-
	       dress is	set to the last	line read.

       E file  Edit  file  unconditionally.  This is similar to	the e command,
	       except that unwritten changes are  discarded  without  warning.
	       The current address is set to the last line read.

       f file  Set  the	 default  filename to file.  If	file is	not specified,
	       then the	default	unescaped filename is printed.

       (1,$)g/re/command-list
	       Apply command-list to each of the addressed  lines  matching  a
	       regular	expression re.	The current address is set to the line
	       currently matched before	command-list is	executed.  At the  end
	       of  the	g command, the current address is set to the last line
	       affected	by command-list.

	       Each command in command-list must be on a  separate  line,  and
	       every  line  except  for	the last must be terminated by a back-
	       slash (\).  Any commands	are allowed, except for	g, G,  v,  and
	       V.   A  newline alone in	command-list is	equivalent to a	p com-
	       mand.

       (1,$)G/re/
	       Interactively edit the addressed	lines matching a  regular  ex-
	       pression	 re.  For each matching	line, the line is printed, the
	       current address is set, and the user is	prompted  to  enter  a
	       command-list.  At the end of the	G command, the current address
	       is set to the last line affected	by (the	last) command-list.

	       The  format  of	command-list is	the same as that of the	g com-
	       mand.  A	newline	alone acts as a	null command list.   A	single
	       `&' repeats the last non-null command list.

       H       Toggle  the printing of error explanations.  By default,	expla-
	       nations are not printed.	 It is recommended that	ed scripts be-
	       gin with	this command to	aid in debugging.

       h       Print an	explanation of the last	error.

       (.)i    Insert text in the buffer before	the current line.  Text	is en-
	       tered in	input mode.  The current address is set	 to  the  last
	       line entered.

       (.,.+1)j
	       Join the	addressed lines.  The addressed	lines are deleted from
	       the  buffer  and	 replaced  by  a  single line containing their
	       joined text.  The current address is set	to the resultant line.

       (.)klc  Mark a line with	a lower	case letter lc.	 The line can then  be
	       addressed  as 'lc (i.e.,	a single quote followed	by lc) in sub-
	       sequent commands.  The mark is not cleared until	 the  line  is
	       deleted or otherwise modified.

       (.,.)l  Print  the  addressed  lines  unambiguously.   If a single line
	       fills more than one screen (as might be the case	when viewing a
	       binary file, for	instance), a "--More--"	prompt is  printed  on
	       the  last  line.	  The ed utility waits until the RETURN	key is
	       pressed before displaying the next screen.  The current address
	       is set to the last line printed.

       (.,.)m(.)
	       Move lines in the buffer.  The addressed	lines are moved	to af-
	       ter the right-hand destination address, which may  be  the  ad-
	       dress  0	 (zero).   The current address is set to the last line
	       moved.

       (.,.)n  Print the addressed lines along with their line	numbers.   The
	       current address is set to the last line printed.

       (.,.)p  Print  the  addressed lines.  The current address is set	to the
	       last line printed.

       P       Toggle the command prompt on and	 off.	Unless	a  prompt  was
	       specified  by  with  command-line option	-p string, the command
	       prompt is by default turned off.

       q       Quit ed.

       Q       Quit ed unconditionally.	 This is similar to the	q command, ex-
	       cept that unwritten changes are discarded without warning.

       ($)r file
	       Read file to after the addressed	line.  If file is  not	speci-
	       fied,  then  the	default	filename is used.  If there was	no de-
	       fault filename prior to the command, then the default  filename
	       is  set to file.	 Otherwise, the	default	filename is unchanged.
	       The current address is set to the last line read.

       ($)r !command
	       Read to	after  the  addressed  line  the  standard  output  of
	       !command,  (see	the  !command below).  The default filename is
	       unchanged.  The current address is set to the last line read.

       (.,.)s/re/replacement/

       (.,.)s/re/replacement/g

       (.,.)s/re/replacement/n
	       Replace text in the addressed lines matching a regular  expres-
	       sion  re	with replacement.  By default, only the	first match in
	       each line is replaced.  If the g	(global) suffix	is given, then
	       every match to be replaced.  The	n suffix, where	n is  a	 posi-
	       tive  number,  causes only the nth match	to be replaced.	 It is
	       an error	if no substitutions are	performed on any  of  the  ad-
	       dressed	lines.	 The  current address is set the last line af-
	       fected.

	       Re and replacement may be delimited by any character other than
	       space and newline (see the s command below).  If	one or two  of
	       the  last delimiters is omitted,	then the last line affected is
	       printed as though the print suffix p were specified.

	       An unescaped `&'	in replacement is replaced  by	the  currently
	       matched	text.	The character sequence \m, where m is a	number
	       in the range [1,9], is replaced by the m	th  backreference  ex-
	       pression	 of  the  matched  text.  If replacement consists of a
	       single `%', then	replacement  from  the	last  substitution  is
	       used.   Newlines	may be embedded	in replacement if they are es-
	       caped with a backslash (\).

       (.,.)s  Repeat the last substitution.  This form	of the s  command  ac-
	       cepts a count suffix n, or any combination of the characters r,
	       g,  and	p.   If	 a  count suffix n is given, then only the nth
	       match is	replaced.  The r suffix	causes the regular  expression
	       of  the	last search to be used instead of the that of the last
	       substitution.  The g suffix toggles the global  suffix  of  the
	       last  substitution.   The  p suffix toggles the print suffix of
	       the last	substitution The current address is set	 to  the  last
	       line affected.

       (.,.)t(.)
	       Copy  (i.e.,  transfer) the addressed lines to after the	right-
	       hand destination	address, which may be the  address  0  (zero).
	       The current address is set to the last line copied.

       u       Undo  the last command and restores the current address to what
	       it was before the command
Skip site navigation (1)Skip section navigation (2)
FreeBSD
Donate to FreeBSD
Search
   
Home
About
Get FreeBSD
Documentation
Community
Developers
Support
Foundation

FreeBSD Manual Pages
   
ftp
 man apropos
 
   
1 - General Commands
 
FreeBSD 15.0-RELEASE and Ports
 
All Architectures
 
html

home | help
FTP(1)			    General Commands Manual			FTP(1)

NAME
       ftp -- Internet file transfer program

SYNOPSIS
       ftp  [-46AadefginpRtVv]	[-N netrc] [-o output] [-P port] [-q quittime]
	   [-r retry] [-s  srcaddr]  [-T dir,max[,inc]]	 [[user@]host  [port]]
	   [[user@]host:[path][/]]				[file:///path]
	   [ftp://[user[:password]@]host[:port]/path[/][;type=X]]
	   [http://[user[:password]@]host[:port]/path] [...]
       ftp -u URL file [...]

DESCRIPTION
       ftp is the user interface to the	Internet standard File Transfer	Proto-
       col.  The program allows	a user to transfer files to and	from a	remote
       network site.

       The  last five arguments	will fetch a file using	the FTP	or HTTP	proto-
       cols, or	by direct copying, into	the current directory.	This is	 ideal
       for  scripts.   Refer  to "AUTO-FETCHING	FILES" below for more informa-
       tion.

       Options may be specified	at the command line, or	to the command	inter-
       preter.

       -4	   Forces ftp to only use IPv4 addresses.

       -6	   Forces ftp to only use IPv6 addresses.

       -A	   Force  active  mode	ftp.   By default, ftp will try	to use
		   passive mode	ftp and	fall back to active mode if passive is
		   not supported by the	server.	 This option causes ftp	to al-
		   ways	use an active connection.  It is only useful for  con-
		   necting  to	very old servers that do not implement passive
		   mode	properly.

       -a	   Causes ftp to bypass	normal login  procedure,  and  use  an
		   anonymous login instead.

       -d	   Enables debugging.

       -e	   Disables  command  line  editing.  This is useful for Emacs
		   ange-ftp mode.

       -f	   Forces a cache reload for transfers that go through the FTP
		   or HTTP proxies.

       -g	   Disables file name globbing.

       -i	   Turns off interactive prompting during multiple file	trans-
		   fers.

       -N netrc	   Use netrc instead of	~/.netrc.  Refer to "THE .netrc	 FILE"
		   for more information.

       -n	   Restrains  ftp  from	 attempting  "auto-login" upon initial
		   connection for non auto-fetch transfers.  If	auto-login  is
		   enabled,  ftp will check the	.netrc (see below) file	in the
		   user's home directory for an	entry describing an account on
		   the remote machine.	If no entry exists,  ftp  will	prompt
		   for	the  remote  machine  login  name (default is the user
		   identity on the local machine), and,	if  necessary,	prompt
		   for	a  password  and  an  account with which to login.  To
		   override the	auto-login for auto-fetch  transfers,  specify
		   the username	(and optionally, password) as appropriate.

       -o output   When	 auto-fetching	files,	save  the  contents in output.
		   output is parsed according to the "FILE NAMING CONVENTIONS"
		   below.  If output is	not `-'	or  doesn't  start  with  `|',
		   then	 only  the first file specified	will be	retrieved into
		   output; all other files will	be retrieved into the basename
		   of their remote name.

       -P port	   Sets	the port number	to port.

       -p	   Enable passive mode operation  for  use  behind  connection
		   filtering  firewalls.   This	 option	has been deprecated as
		   ftp now tries to use	passive	mode by	default, falling  back
		   to  active mode if the server does not support passive con-
		   nections.

       -q quittime
		   Quit	if the connection has stalled for quittime seconds.

       -R	   Restart all non-proxied auto-fetches.

       -r wait	   Retry the connection	attempt	if it failed, pausing for wait
		   seconds.

       -s srcaddr  Uses	srcaddr	as the local IP	address	for all	connections.

       -t	   Enables packet tracing.

       -T direction,maximum[,increment]
		   Set the maximum transfer  rate  for	direction  to  maximum
		   bytes/second,  and if specified, the	increment to increment
		   bytes/second.  Refer	to rate	for more information.

       -u URL file [...]
		   Upload files	on the command line to URL where URL is	one of
		   the ftp URL types as	supported by auto-fetch	(with  an  op-
		   tional  target  filename for	single file uploads), and file
		   is one or more local	files to be uploaded.

       -V	   Disable verbose and progress, overriding the	default	of en-
		   abled when output is	to a terminal.

       -v	   Enable verbose and progress.	 This is the default if	output
		   is to a terminal (and in the	case of	progress, ftp  is  the
		   foreground process).	 Forces	ftp to show all	responses from
		   the	remote server, as well as report on data transfer sta-
		   tistics.

       The client host with which ftp is to communicate	may  be	 specified  on
       the command line.  If this is done, ftp will immediately	attempt	to es-
       tablish a connection to an FTP server on	that host; otherwise, ftp will
       enter  its  command  interpreter	 and await instructions	from the user.
       When ftp	is awaiting commands from the user the prompt `ftp>'  is  pro-
       vided to	the user.  The following commands are recognized by ftp:

       ! [command [args]]
		   Invoke an interactive shell on the local machine.  If there
		   are	arguments,  the	first is taken to be a command to exe-
		   cute	directly, with the rest	of the arguments as its	 argu-
		   ments.

       $ macro-name [args]
		   Execute  the	 macro	macro-name  that  was defined with the
		   macdef command.  Arguments are  passed  to  the  macro  un-
		   globbed.

       account [passwd]
		   Supply  a supplemental password required by a remote	system
		   for access to resources once	a login	has been  successfully
		   completed.	If  no	argument is included, the user will be
		   prompted for	an account password  in	 a  non-echoing	 input
		   mode.

       append local-file [remote-file]
		   Append  a  local  file to a file on the remote machine.  If
		   remote-file is left unspecified, the	 local	file  name  is
		   used	 in  naming the	remote file after being	altered	by any
		   ntrans or nmap setting.  File  transfer  uses  the  current
		   settings for	type, format, mode, and	structure.

       ascii	   Set	the  file transfer type	to network ASCII.  This	is the
		   default type.

       bell	   Arrange that	a bell be sounded  after  each	file  transfer
		   command is completed.

       binary	   Set	the  file transfer type	to support binary image	trans-
		   fer.

       bye	   Terminate the FTP session with the remote server  and  exit
		   ftp.	  An  end  of file will	also terminate the session and
		   exit.

       case	   Toggle remote computer file name case mapping  during  get,
		   mget	 and mput commands.  When case is on (default is off),
		   remote computer file	names with all letters in  upper  case
		   are	written	in the local directory with the	letters	mapped
		   to lower case.

       cd remote-directory
		   Change the working  directory  on  the  remote  machine  to
		   remote-directory.

       cdup	   Change  the	remote machine working directory to the	parent
		   of the current remote machine working directory.

       chmod mode remote-file
		   Change the permission modes of the file remote-file on  the
		   remote system to mode.

       close	   Terminate  the  FTP session with the	remote server, and re-
		   turn	to the command interpreter.  Any  defined  macros  are
		   erased.

       cr	   Toggle carriage return stripping during ascii type file re-
		   trieval.  Records are denoted by a carriage return/linefeed
		   sequence  during  ascii  type file transfer.	 When cr is on
		   (the	default), carriage returns are stripped	from this  se-
		   quence  to conform with the Unix single linefeed record de-
		   limiter.  Records on	non-Unix remote	 systems  may  contain
		   single  linefeeds;  when  an	 ascii	type transfer is made,
		   these linefeeds may be distinguished	from a	record	delim-
		   iter	only when cr is	off.

       delete remote-file
		   Delete the file remote-file on the remote machine.

       dir [remote-path	[local-file]]
		   Print  a  listing of	the contents of	a directory on the re-
		   mote	machine.  The listing  includes	 any  system-dependent
		   information	that  the server chooses to include; for exam-
		   ple,	most Unix systems will produce output from the command
		   `ls -l'.  If	remote-path is left unspecified,  the  current
		   working directory is	used.  If interactive prompting	is on,
		   ftp	will  prompt the user to verify	that the last argument
		   is indeed the target	local file for receiving  dir  output.
		   If no local file is specified, or if	local-file is `-', the
		   output is sent to the terminal.

       disconnect  A synonym for close.

       edit	   Toggle  command line	editing, and context sensitive command
		   and file completion.	 This is automatically enabled if  in-
		   put is from a terminal, and disabled	otherwise.

       epsv epsv4 epsv6
		   Toggle  the	use  of	the extended EPSV and EPRT commands on
		   all IP, IPv4, and IPv6 connections respectively.  First try
		   EPSV	/ EPRT,	and then PASV /	PORT.  This is enabled by  de-
		   fault.   If an extended command fails then this option will
		   be temporarily disabled for the  duration  of  the  current
		   connection,	or  until  epsv,  epsv4,  or epsv6 is executed
		   again.

       exit	   A synonym for bye.

       features	   Display what	features the remote server supports (using the
		   FEAT	command).

       fget localfile
		   Retrieve the	files listed in	localfile, which has one  line
		   per filename.

       form format
		   Set	the  file  transfer  form to format.  The default (and
		   only	supported) format is "non-print".

       ftp host	[port]
		   A synonym for open.

       ftp_debug [ftp_debug-value]
		   Toggle debugging mode.  If an optional  ftp_debug-value  is
		   specified  it is used to set	the debugging level.  When de-
		   bugging is on, ftp prints each command sent to  the	remote
		   machine, preceded by	the string `-->'.

       gate [host [port]]
		   Toggle gate-ftp mode, which used to connect through the TIS
		   FWTK	 and Gauntlet ftp proxies.  This will not be permitted
		   if the gate-ftp server hasn't been set  (either  explicitly
		   by  the  user, or from the FTPSERVER	environment variable).
		   If host is given, then gate-ftp mode	will be	 enabled,  and
		   the	gate-ftp  server will be set to	host.  If port is also
		   given, that will be used as the port	to connect to  on  the
		   gate-ftp server.

       get remote-file [local-file]
		   Retrieve the	remote-file and	store it on the	local machine.
		   If  the  local  file	name is	not specified, it is given the
		   same	name it	has on the remote machine, subject  to	alter-
		   ation  by the current case, ntrans, and nmap	settings.  The
		   current settings for	type, form, mode,  and	structure  are
		   used	while transferring the file.

       glob	   Toggle  filename  expansion	for  mdelete,  mget, mput, and
		   mreget.  If globbing	is turned off with glob, the file name
		   arguments are taken literally and not  expanded.   Globbing
		   for	mput  is  done	as  in csh(1).	For mdelete, mget, and
		   mreget, each	remote file name is expanded separately	on the
		   remote machine and the lists	are not	merged.	 Expansion  of
		   a  directory	 name is likely	to be different	from expansion
		   of the name of an ordinary file: the	exact  result  depends
		   on  the foreign operating system and	ftp server, and	can be
		   previewed by	doing `mls remote-files	-'  Note:  mget,  mput
		   and	mreget are not meant to	transfer entire	directory sub-
		   trees of files.  That can be	done by	transferring a	tar(1)
		   archive of the subtree (in binary mode).

       hash [size]
		   Toggle  hash-sign (`#') printing for	each data block	trans-
		   ferred.  The	size of	a data block defaults to  1024	bytes.
		   This	 can be	changed	by specifying size in bytes.  Enabling
		   hash	disables progress.

       help [command]
		   Print an informative	message	about the meaning of  command.
		   If  no  argument  is	 given,	ftp prints a list of the known
		   commands.

       idle [seconds]
		   Set the inactivity timer on the remote  server  to  seconds
		   seconds.   If  seconds  is  omitted,	the current inactivity
		   timer is printed.

       image	   A synonym for binary.

       lcd [directory]
		   Change the working directory	on the local machine.	If  no
		   directory is	specified, the user's home directory is	used.

       less file   A synonym for page.

       lpage local-file
		   Display  local-file	with  the program specified by the set
		   pager option.

       lpwd	   Print the working directory on the local machine.

       ls [remote-path [local-file]]
		   A synonym for dir.

       macdef macro-name
		   Define a macro.  Subsequent lines are stored	as  the	 macro
		   macro-name;	a null line (consecutive newline characters in
		   a file or carriage returns from  the	 terminal)  terminates
		   macro  input	 mode.	There is a limit of 16 macros and 4096
		   total characters in all defined macros.  Macro names	can be
		   a maximum of	8 characters.  Macros are only	applicable  to
		   the	current	session	they are defined within	(or if defined
		   outside a session, to the session  invoked  with  the  next
		   open	 command), and remain defined until a close command is
		   executed.  To invoke	 a  macro,  use	 the  $	 command  (see
		   above).

		   The macro processor interprets `$' and `\' as special char-
		   acters.   A	`$'  followed  by a number (or numbers)	is re-
		   placed by the corresponding argument	on the	macro  invoca-
		   tion	 command  line.	  A `$'	followed by an `i' signals the
		   macro processor that	the executing macro is to  be  looped.
		   On the first	pass "$i" is replaced by the first argument on
		   the macro invocation	command	line, on the second pass it is
		   replaced by the second argument, and	so on.	A `\' followed
		   by  any  character  is replaced by that character.  Use the
		   `\' to prevent special treatment of the `$'.

       mdelete [remote-files]
		   Delete the remote-files on the remote machine.

       mdir remote-files local-file
		   Like	dir, except multiple remote files  may	be  specified.
		   If interactive prompting is on, ftp will prompt the user to
		   verify  that	 the  last argument is indeed the target local
		   file	for receiving mdir output.

       mget remote-files
		   Expand the remote-files on the remote machine and do	a  get
		   for	each file name thus produced.  See glob	for details on
		   the filename	expansion.  Resulting file names will then  be
		   processed  according	 to  case,  ntrans, and	nmap settings.
		   Files are transferred into  the  local  working  directory,
		   which can be	changed	with `lcd directory'; new local	direc-
		   tories can be created with `! mkdir directory'.

       mkdir directory-name
		   Make	a directory on the remote machine.

       mls remote-files	local-file
		   Like	ls, except multiple remote files may be	specified, and
		   the local-file must be specified.  If interactive prompting
		   is on, ftp will prompt the user to verify that the last ar-
		   gument  is  indeed  the target local	file for receiving mls
		   output.

       mlsd [remote-path]
		   Display the contents	of remote-path (which  should  default
		   to  the  current  directory	if  not	 given)	 in a machine-
		   parsable form, using	MLSD.  The format of  display  can  be
		   changed with	`remopts mlst ...'.

       mlst [remote-path]
		   Display the details about remote-path (which	should default
		   to  the  current  directory	if  not	 given)	 in a machine-
		   parsable form, using	MLST.  The format of  display  can  be
		   changed with	`remopts mlst ...'.

       mode mode-name
		   Set	the file transfer mode to mode-name.  The default (and
		   only	supported) mode	is "stream".

       modtime remote-file
		   Show	the last modification time of the file on  the	remote
		   machine, in RFC2822 format.

       more file   A synonym for page.

       mput local-files
		   Expand wild cards in	the list of local files	given as argu-
		   ments  and  do  a  put for each file	in the resulting list.
		   See glob for	details	of filename expansion.	Resulting file
		   names will then be processed	according to ntrans  and  nmap
		   settings.

       mreget remote-files
		   As per mget,	but performs a reget instead of	get.

       msend local-files
		   A synonym for mput.

       newer remote-file [local-file]
		   Get	the  file  only	if the modification time of the	remote
		   file	is more	recent that the	file on	 the  current  system.
		   If  the  file does not exist	on the current system, the re-
		   mote	file is	considered newer.  Otherwise, this command  is
		   identical to	get.

       nlist [remote-path [local-file]]
		   A synonym for ls.

       nmap [inpattern outpattern]
		   Set	or  unset the filename mapping mechanism.  If no argu-
		   ments are specified,	the filename mapping mechanism is  un-
		   set.	  If  arguments	 are  specified,  remote filenames are
		   mapped during mput commands and put commands	issued without
		   a specified remote target filename.	If arguments are spec-
		   ified, local	filenames are mapped during mget commands  and
		   get	commands issued	without	a specified local target file-
		   name.  This command is useful when connecting to a non-Unix
		   remote computer with	different file naming  conventions  or
		   practices.	 The   mapping	follows	 the  pattern  set  by
		   inpattern and outpattern.  [Inpattern] is  a	 template  for
		   incoming  filenames	(which may have	already	been processed
		   according to	the ntrans and case settings).	Variable  tem-
		   plating  is	accomplished  by including the sequences "$1",
		   "$2", ...  "$9" in inpattern.  Use `\' to prevent this spe-
		   cial	treatment of the `$' character.	 All other  characters
		   are	treated	 literally, and	are used to determine the nmap
		   [inpattern] variable	values.	 For example, given  inpattern
		   $1.$2 and the remote	file name "mydata.data", $1 would have
		   the	value  "mydata",  and  $2 would	have the value "data".
		   The outpattern determines the  resulting  mapped  filename.
		   The	sequences  "$1",  "$2",	 ...  "$9" are replaced	by any
		   value resulting from	the inpattern template.	 The  sequence
		   "$0"	 is  replaced by the original filename.	 Additionally,
		   the sequence	"[seq1,	seq2]" is replaced by [seq1]  if  seq1
		   is  not  a  null  string; otherwise it is replaced by seq2.
		   For example,	the command

			 nmap $1.$2.$3 [$1,$2].[$2,file]

		   would yield the output  filename  "myfile.data"  for	 input
		   filenames   "myfile.data"   and   "myfile.data.old",	  "my-
		   file.file" for the input filename "myfile", and "myfile.my-
		   file" for the input filename	".myfile".  Spaces may be  in-
		   cluded in outpattern, as in the example:
			 nmap $1 sed s/	 *$// >	$1
		   Use	the  `\' character to prevent special treatment	of the
		   `$',	`[', `]', and `,' characters.

       ntrans [inchars [outchars]]
		   Set or unset	the filename character translation  mechanism.
		   If  no  arguments  are  specified,  the  filename character
		   translation mechanism is unset.  If	arguments  are	speci-
		   fied,  characters in	remote filenames are translated	during
		   mput	commands and put commands issued without  a  specified
		   remote  target filename.  If	arguments are specified, char-
		   acters in local filenames are translated during  mget  com-
		   mands  and  get  commands  issued withou
gpg --keyserver hkps://keys.openpgp.org --recv-keys 5BE8A3F6C8A5C01D106C0AD820B1A390B168D356 # Antoine du Hamel
gpg --keyserver hkps://keys.openpgp.org --recv-keys DD792F5973C6DE52C432CBDAC77ABFA00DDBF2B7 # Juan José Arboleda
gpg --keyserver hkps://keys.openpgp.org --recv-keys CC68F5A3106FF448322E48ED27F5E38D5B0A215F # Marco Ippolito
gpg --keyserver hkps://keys.openpgp.org --recv-keys 8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600 # Michaël Zasso
gpg --keyserver hkps://keys.openpgp.org --recv-keys 890C08DB8579162FEE0DF9DB8BEAB4DFCF555EF4 # Rafael Gonzaga
gpg --keyserver hkps://keys.openpgp.org --recv-keys C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C # Richard Lau
gpg --keyserver hkps://keys.openpgp.org --recv-keys 108F52B48DB57BB0CC439B2997B01419BD92F80A # Ruy Adorno
gpg --keyserver hkps://keys.openpgp.org --recv-keys A363A499291CBBC940DD62E41F10027AF002F8B0 # Ulises Gascón
"use strict";(()=>{var K={"(":")","'":"'",'"':'"',"{":"}"};function G(e){if(typeof CSS<"u")return CSS.escape(e);if(arguments.length==0)throw new TypeError("`CSS.escape` requires an argument.");let r=String(e),n=r.length,o=-1,c="",i,u=r.charCodeAt(0);if(n==1&&u==45)return"\\"+r;for(;++o<n;){if(i=r.charCodeAt(o),i==0){c+="\uFFFD";continue}if(i>=1&&i<=31||i==127||o==0&&i>=48&&i<=57||o==1&&i>=48&&i<=57&&u==45){c+="\\"+i.toString(16)+" ";continue}if(i>=128||i==45||i==95||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122){c+=r.charAt(o);continue}c+="\\"+r.charAt(o)}return c}var ne=/^([+-]?(?:\d+(?:\.?\d+)?|\.\d+))x$/m;var De=/^(media|supports|page|font-face|keyframes|counter-style|font-feature-values|property|layer)(?=\||{|\(|$)/,ae=class{constructor(r,n,o){this.className=r;this.css=o;Object.assign(this,n);let{id:c,definition:i}=n,{analyze:u,transformValue:s,declare:y,transformValueComponents:f,create:h,layer:b,unit:p,colored:a}=i;this.layer=b,this.colored=!!a,i.unit||(i.unit=""),i.separators||(i.separators=[","]);let{scope:m,important:l,themeDriver:t}=o.config,{selectors:d,mediaQueries:v,stylesBy:x,animations:D}=o,g=x[r];h&&h.call(this,r),this.declarations=i.declarations;let R,C;if(b===-8)R=r.slice(c.length-1);else{let O;if(u)[O,C]=u.call(this,r);else{let k=r.indexOf(":");this.prefix=r.slice(0,k+1),O=r.slice(k+1)}this.valueComponents=[],R=O.slice(this.parseValue(this.valueComponents,0,O,p,"",void 0,!1,c==="animation"||c==="animation-name"?Object.keys(this.css.animations):[]))}R[0]==="!"&&(this.important=!0,R=R.slice(1)),this.stateToken=R;let N=(O,k)=>{let z=(S,j,V,E)=>{for(let[$,L]of j)if($.test(S)){for(let W of L)z(S.replace($,W),j,V,!0);return}E&&V.push(S)},P=S=>{let j=S.split(/(\\'(?:.*?)[^\\]\\')(?=[*_>~+,)])|(\[[^=]+='(?:.*?)[^\\]'\])/).map((L,W)=>W%3?L:L.replace(/(^|[^_])_(?!_)/g,"$1 ")).join(""),V=[],E="",$=0;for(let L=0;L<j.length;L++){let W=j[L];if(W==="\\"){E+=W+j[++L];continue}!$&&W===","?(V.push(E),E=""):(E+=W,$&&W===")"?$--:W==="("&&$++)}return E&&V.push(E),V},M=[];""in d?z(O,d[""],M,!0):M.push(O);let A={};for(let[S,j]of Object.entries(d)){if(!S)continue;let V=[];for(let E of M)z(E,j,V,!1);V.length&&(A[S]=V)}let B=(S,j)=>{let V=j.reduce((E,$)=>(E.push(...P($)),E),[]);S in k?k[S].push(...V):k[S]=V},I=Object.keys(A);if(I.length)for(let S of I)B(S,A[S]);else B("",M)};C?(this.vendorPrefixSelectors={},N(C,this.vendorPrefixSelectors)):this.vendorPrefixSelectors={"":[""]};let w=R.split("@"),q=w[0];if(q){this.vendorSuffixSelectors={},N(q,this.vendorSuffixSelectors);for(let O of Object.values(this.vendorSuffixSelectors))for(let k of O){this.hasWhere!==!1&&(this.hasWhere=k.includes(":where("));let z=[":disabled",":active",":focus",":hover"];for(let P=0;P<z.length;P++)if(k.includes(z[P])){(this.priority===-1||this.priority>P)&&(this.priority=P);break}}}else this.vendorSuffixSelectors={"":[""]};let X={},Ne=Object.prototype.hasOwnProperty.call(this.vendorPrefixSelectors,""),fe=Object.prototype.hasOwnProperty.call(this.vendorSuffixSelectors,"");if(Ne)X[""]=fe?[""]:Object.keys(this.vendorSuffixSelectors);else if(fe)for(let O in this.vendorPrefixSelectors)X[O]=[""];else for(let O in this.vendorPrefixSelectors){let k=X[O]=[];if(Object.prototype.hasOwnProperty.call(this.vendorSuffixSelectors,O))k.push(O);else for(let z in this.vendorSuffixSelectors)k.push(z)}for(let O=1;O<w.length;O++){let k=w[O];if(k)if(k==="rtl"||k==="ltr")this.direction=k;else{let z="",P,M=De.exec(k);if(M)z=M[1],P=k.slice(z.length);else{this.media={token:k,features:{}};let A=[],B=S=>{if(S==="all"||S==="print"||S==="screen"||S==="speech")this.media.type=S;else if(S==="\u{1F5A8}")this.media.type="print";else if(S==="landscape"||S==="portrait")A.push("(orientation:"+S+")");else if(S==="motion"||S==="reduced-motion")A.push("(prefers-reduced-motion:"+(S==="motion"?"no-preference":"reduce")+")");else{let j=v[S];if(j&&typeof j=="string")A.push(j);else{let V="",E="",$=0;S.startsWith("<=")?(E="<=",V="max-width"):S.startsWith(">=")||j?(E=">=",V="min-width"):S.startsWith(">")?(E=">",V="min-width",$=.02):S.startsWith("<")&&(E="<",V="max-width",$=-.02);let L=E?S.replace(E,""):S,W=v[L];switch(V){case"max-width":case"min-width":let U={};typeof W=="number"?U={type:"number",value:W+$,unit:"px"}:(U=this.parseValueComponent(L,"px"),U.type==="number"&&U.unit==="px"&&(U.value+=$)),this.media.features[V]=U,U.type==="number"?A.push("("+V+":"+(U.value+U.unit)+")"):A.push("("+V+":"+U.value+")");break}}}},I=k.includes("&");if(I){let S=k.split("&");for(let j of S)B(j)}else B(k);if(this.media.type&&(P=this.media.type),A.length&&(P=A.join(" and ")),P)z="media";else if(!I){this.theme=k;continue}}P&&(this.at[z]=(z in this.at?this.at[z]+" and ":"")+P.replace(/\|/g," "))}}let Z;this.valueComponents&&(f&&(this.valueComponents=f.call(this,this.valueComponents)),Z=this.resolveValue(this.valueComponents,p,[],!1),s&&(Z=s.call(this,Z)),y?this.declarations=y.call(this,Z):c&&(this.declarations={[c]:Z}));let oe=[];for(let O in this.declarations){let k=M=>{if(D&&(M.startsWith("animation")||M.startsWith("animation-name"))){let A=M.split(":")[1].split("!important")[0].split(" ").filter(B=>B in this.css.animations&&(!this.animationNames||!this.animationNames.includes(B)));A.length&&(this.animationNames||(this.animationNames=[]),this.animationNames=A)}oe.push(M+((this.important||l)&&!M.endsWith("!important")?"!important":""))},z=O+":",P=this.declarations[O];if(Array.isArray(P))for(let M of P)k(z+M.toString());else k(z+P.toString())}if(oe.length)for(let O in X)for(let k of X[O]){let z="";this.direction&&(z+="[dir="+this.direction+"] ");let P=this.vendorPrefixSelectors[O],M=this.vendorSuffixSelectors[k],A=P.map(S=>S+z),B=S=>A.map(j=>(this.theme&&t!=="media"?t==="host"?`:host(.${this.theme}) `:`.${this.theme} `:"")+(m?m+" ":"")+j).reduce((j,V)=>(j.push(M.reduce((E,$)=>(E.push(V+"."+G(S)+$),E),[]).join(",")),j),[]).join(","),I=B(r)+(g?g.reduce((S,j)=>S+","+B(j),""):"")+"{"+oe.join(";")+"}";for(let S of Object.keys(this.at).sort((j,V)=>V==="supports"?-1:1))I="@"+S+(S.includes(" ")?"":" ")+this.at[S]+"{"+I+"}";this.theme&&t==="media"&&(I=`@media(prefers-color-scheme:${this.theme}){`+I+"}"),this.natives.push({text:I})}}at={};priority=-1;natives=[];order=0;layer=0;stateToken;declarations;animationNames;variableNames;resolveValue=(r,n,o,c)=>{let{functions:i}=this.css.config,u="";for(let s of r)switch(s.type){case"function":let y=i&&i[s.name];if(y?.transform&&!s.bypassTransform){let h=y.transform.call(this,this.resolveValue(s.children,y.unit??n,o,c||s.name==="calc"),o);u+=typeof h=="string"?h:this.resolveValue(h,y?.unit??n,o,c)}else u+=s.name+s.symbol+this.resolveValue(s.children,y?.unit??n,o,c)+K[s.symbol];break;case"variable":let f=this.css.variables[s.name];if(f){let h=(b,p)=>{if(f.themes)if(this.theme){let a=f.themes[this.theme]??f;a?.value&&b(a)}else this.variableNames||(this.variableNames=[]),this.variableNames.includes(s.name)||this.variableNames.push(s.name),p();else b(f)};switch(f.type){case"string":h(p=>{let a=[];this.parseValue(a,0,p.value,n,"",void 0,c,[...o,s.name]),u+=this.resolveValue(a,n,[...o,s.name],c)},()=>{u+=`var(--${s.name})`});break;case"number":h(p=>{if(c)u+=p.value;else{let a=this.parseValueComponent(p.value,n);u+=a.value+(a.unit??"")}},()=>{u+=n?`calc(var(--${s.name}) / 16 * 1rem)`:`var(--${s.name})`});break;case"color":let b=s.alpha?"/"+s.alpha:"";h(p=>{u+=`${p.space}(${p.value}${b})`},()=>{u+=`${f.space}(var(--${s.name})${b})`});break}}else u+=`var(--${s.name}${s.fallback?","+s.fallback:""})`;break;case"separator":u+=s.text||s.value;break;case"number":u+=s.value+(s.unit||"");break;default:u+=s.value;break}return u};get text(){return this.natives.map(r=>r.text).join("")}parseValue=(r,n,o,c,i,u,s=!1,y=[])=>{let f=u===void 0,h=!f&&(u.endsWith("$")||u.endsWith("var")),p=(t=>t==="'"||t==='"')(i),a=[","];this.definition.separators?.length&&a.push(...this.definition.separators);let m="",l=()=>{if(m){let t=!1;if(!h||r.length){let d=(v,x)=>{let D=Object.prototype.hasOwnProperty.call(this.variables,v)?this.variables[v]:Object.prototype.hasOwnProperty.call(this.css.variables,v)?this.css.variables[v]:void 0;if(D){let g=D.name??v;if(!y.includes(g)){t=!0;let R={type:"variable",name:g,variable:this.css.variables[g]};x&&(R.alpha=x),r.push(R)}}};if(d(m),!t&&this.colored){let[v,x]=m.split("/");d(v,x)}}if(!t){if(!h){let d=ne.exec(m);d&&(m=(+d[1]*(this.css.config.baseUnit??1)).toString())}s?r.push({type:"string",value:m}):r.push(this.parseValueComponent(m,c))}m=""}};for(;n<o.length;n++){let t=o[n];if(t===i){if(p){let d=0;for(let v=m.length-1;m[v]==="\\";v--)d++;if(d%2){m+=t;continue}else l()}else l();return n}else if(!p&&t in K){let d=m,v={type:"function",name:d,symbol:t,children:[]};r.push(v),m="";let x=t==="("?this.css.config.functions?.[d]:void 0;!this.colored&&x?.colored&&(this.colored=!0),n=this.parseValue(v.children,++n,o,x?.unit??c,K[t],d||u||"",s||d==="calc")}else if((t==="|"||t===" ")&&i!=="}"&&(!p||u==="path"))l(),r.push({type:"separator",value:" "});else{if(!p){if(t===".")if(isNaN(+o[n+1])){if(f)break}else o[n-1]==="-"&&(m+="0");else if(a.includes(t)){l(),r.push({type:"separator",value:t,text:(t===","?"":" ")+t+(t===","?"":" ")});continue}else if(f&&(t==="#"&&(m||r.length&&r[r.length-1].type!=="separator")||["!","*",">","+","~",":","[","@","_"].includes(t)))break}m+=t}}return l(),n};parseValueComponent(r,n=this.definition.unit){let o=n??this.definition.unit,c="",i;if(typeof r=="number")return o&&!c?((o==="rem"||o==="em")&&(i=r/(this.css.config.rootSize||1)),c=o||""):i=r,{value:i,unit:c,type:"number"};if(o){if(/^\d+\/\d+/.test(r)){let[s,y]=r.split("/");return{value:+s/+y*100,unit:"%",type:"number"}}let u=r.match(/^([+-.]?\d+(\.?\d+)?)(%|cm|mm|q|in|pt|pc|px|em|rem|ex|rex|cap|rcap|ch|rch|ic|ric|lh|rlh|vw|svw|lvw|dvw|vh|svh|lvh|dvh|vi|svi|lvi|dvi|vb|svb|lvb|dvb|vmin|svmin|lvmin|dvmin|vmax|svmax|lvmax|dvmax|cqw|cqh|cqi|cqb|cqmin|cqmax|deg|grad|rad|turn|s|ms|hz|khz|dpi|dpcm|dppx|x|fr|db|st)?$/);if(u)return i=+u[1],c=u[3]||"",c||((o==="rem"||o==="em")&&(i=i/(this.css.config.rootSize||1)),c=o||""),{value:i,unit:c,type:"number"}}return{value:r,type:"string"}}};var we={"4xs":360,"3xs":480,"2xs":600,xs:768,sm:834,md:1024,lg:1280,xl:1440,"2xl":1600,"3xl":1920,"4xl":2560},ue=we;var ke={"::scrollbar":"::-webkit-scrollbar","::scrollbar-button":"::-webkit-scrollbar-button","::scrollbar-thumb":"::-webkit-scrollbar-thumb","::scrollbar-track":"::-webkit-scrollbar-track","::scrollbar-track-piece":"::-webkit-scrollbar-track-piece","::scrollbar-corner":"::-webkit-scrollbar-corner","::slider-thumb":["::-webkit-slider-thumb","::-moz-range-thumb"],"::slider-runnable-track":["::-webkit-slider-runnable-track","::-moz-range-track"],"::meter":"::-webkit-meter","::resizer":"::-webkit-resizer","::progress":"::-webkit-progress",":first":":first-child",":last":":last-child",":even":":nth-child(2n)",":odd":":nth-child(odd)",":nth(":":nth-child(",":only":":only-child"},de=ke;var Ve={square:{"aspect-ratio":"1/1"},video:{"aspect-ratio":"16/9"},rounded:{"border-radius":"1e9em"},round:{"border-radius":"50%"},hidden:{display:"none"},hide:{display:"none"},block:{display:"block"},table:{display:"table"},flex:{display:"flex"},grid:{display:"grid"},contents:{display:"contents"},inline:{display:"inline"},"inline-block":{display:"inline-block"},"inline-flex":{display:"inline-flex"},"inline-grid":{display:"inline-grid"},"inline-table":{display:"inline-table"},"table-cell":{display:"table-cell"},"table-caption":{display:"table-caption"},"flow-root":{display:"flow-root"},"list-item":{display:"list-item"},"table-row":{display:"table-row"},"table-column":{display:"table-column"},"table-row-group":{display:"table-row-group"},"table-column-group":{display:"table-column-group"},"table-header-group":{display:"table-header-group"},"table-footer-group":{display:"table-footer-group"},italic:{"font-style":"italic"},oblique:{"font-style":"oblique"},isolate:{isolation:"isolate"},overflowed:{overflow:"visible"},untouchable:{"pointer-events":"none"},static:{position:"static"},fixed:{position:"fixed"},abs:{position:"absolute"},rel:{position:"relative"},sticky:{position:"sticky"},uppercase:{"text-transform":"uppercase"},lowercase:{"text-transform":"lowercase"},capitalize:{"text-transform":"capitalize"},visible:{visibility:"visible"},invisible:{visibility:"hidden"},vw:{width:"100vw"},vh:{height:"100vh"},"max-vw":{"max-width":"100vw"},"max-vh":{"max-height":"100vh"},"min-vw":{"min-width":"100vw"},"min-vh":{"min-height":"100vh"},"center-content":{"justify-content":"center","align-items":"center"},"sr-only":{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)","white-space":"nowrap","border-width":"0"},full:{width:"100%",height:"100%"},center:{left:0,right:0,"margin-left":"auto","margin-right":"auto"},middle:{top:0,bottom:0,"margin-top":"auto","margin-bottom":"auto"},"break-spaces":{"white-space":"break-spaces"},"break-word":{"overflow-wrap":"break-word",overflow:"hidden"},"gradient-text":{"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","background-clip":"text"},fit:{width:"fit-content",height:"fit-content"}},he=Ve;var Oe={fade:{"0%":{opacity:0},to:{opacity:1}},flash:{"0%,50%,to":{opacity:1},"25%,75%":{opacity:0}},float:{"0%":{transform:"none"},"50%":{transform:"translateY(-1.25rem)"},to:{transform:"none"}},heart:{"0%":{transform:"scale(1)"},"14%":{transform:"scale(1.3)"},"28%":{transform:"scale(1)"},"42%":{transform:"scale(1.3)"},"70%":{transform:"scale(1)"}},jump:{"0%,to":{transform:"translateY(-25%)","animation-timing-function":"cubic-bezier(.8,0,1,1)"},"50%":{transform:"translateY(0)","animation-timing-function":"cubic-bezier(0,0,.2,1)"}},ping:{"75%,to":{transform:"scale(2)",opacity:0}},pulse:{"0%":{transform:"none"},"50%":{transform:"scale(1.05)"},to:{transform:"none"}},rotate:{"0%":{transform:"rotate(-360deg)"},to:{transform:"none"}},shake:{"0%":{transform:"none"},"6.5%":{transform:"translateX(-6px) rotateY(-9deg)"},"18.5%":{transform:"translateX(5px) rotateY(7deg)"},"31.5%":{transform:"translateX(-3px) rotateY(-5deg)"},"43.5%":{transform:"translateX(2px) rotateY(3deg)"},"50%":{transform:"none"}},zoom:{"0%":{transform:"scale(0)"},to:{transform:"none"}}},me=Oe;function Y(e){e.startsWith("#")&&(e=e.slice(1));let r,n,o,c;return e.length===3||e.length===4?(r=parseInt(e[0]+e[0],16),n=parseInt(e[1]+e[1],16),o=parseInt(e[2]+e[2],16),c=e.length===4?Math.round(parseInt(e[3]+e[3],16)/255*100)/100:1):(e.length===6||e.length===8)&&(r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),o=parseInt(e.slice(4,6),16),c=e.length===8?Math.round(parseInt(e.slice(6,8),16)/255*100)/100:1),[r,n,o,c]}function pe(e,r,n){return((1<<24)+(e<<16)+(r<<8)+n).toString(16).slice(1)}function T(e){typeof e=="string"&&(e={"":e});let r=""in e,n=!1;for(let o in e)if(o&&+o>=100){n=!0;break}if(!n&&(!r||Object.keys(e).length>1)){let o=0,c="0"in e?Y(e[0]):[0,0,0],i,u,s=[],y=()=>{let f=i-o,h=u.map((b,p)=>(b-c[p])/f);for(let b of s){let p=b-o,a=c.map((m,l)=>Math.round(m+h[l]*p));e[b]="#"+pe(a[0],a[1],a[2])}};for(let f=1;f<100;f++)f in e?(s.length?(i=f,u=Y(e[f]),y(),s.length=0,c=u):c=Y(e[f]),o=f):s.push(f);s.length&&(i=100,u="100"in e?Y(e[100]):[255,255,255],y())}return r||(e[""]=e[n?"500":"50"]),e}var je={"font-family":{mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas","Liberation Mono","Courier New","monospace"],sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],serif:["ui-serif","Georgia","Cambria","Times New Roman","Times","serif"]},"box-size":{"4xs":360,"3xs":480,"2xs":600,xs:768,sm:834,md:1024,lg:1280,xl:1440,"2xl":1600,"3xl":1920,"4xl":2560,full:"100%",fit:"fit-content",max:"max-content",min:"min-content"},"font-weight":{thin:100,extralight:200,light:300,regular:400,medium:500,semibold:600,bold:700,extrabold:800,heavy:900},"flex-direction":{col:"column","col-reverse":"column-reverse"},"box-sizing":{content:"content-box",border:"border-box"},position:{abs:"absolute",rel:"relative"},"transform-box":{content:"content-box",border:"border-box",padding:"padding-box",fill:"fill-box",stroke:"stroke-box",view:"view-box"},"animation-direction":{alt:"alternate","alt-reverse":"alternate-reverse"},"background-clip":{content:"content-box",border:"border-box",padding:"padding-box"},"background-origin":{content:"content-box",border:"border-box",padding:"padding-box"},order:{first:-999999,last:999999},"shape-outside":{content:"content-box",border:"border-box",padding:"padding-box",margin:"margin-box"},"clip-path":{content:"content-box",border:"border-box",padding:"padding-box",margin:"margin-box",fill:"fill-box",stroke:"stroke-box",view:"view-box",black:"#000000"},black:"#000000",white:"#ffffff",current:"currentColor",slate:T({5:"#141e2b",10:"#19212d",20:"#262f3e",30:"#323e52",40:"#41516b",50:"#616a84",55:"#6c7693",60:"#959db3",70:"#a3abbf",80:"#d7dae3",95:"#f6f7f8"}),gray:T({5:"#1e1d1f",10:"#212022",20:"#2f2e30",30:"#3e3d40",40:"#504f52",50:"#6b6a6d",55:"#777679",60:"#9e9da0",70:"#abaaae",80:"#dad9db",95:"#f5f4f7"}),brown:T({5:"#271b15",10:"#2b1e18",20:"#3c2b22",30:"#50382c",40:"#694839",50:"#8d604b",55:"#9d6b53",60:"#b79788",70:"#c1a598",80:"#efd5c9",95:"#faf2ef"}),orange:T({5:"#2e1907",10:"#331b07",20:"#47260b",30:"#5d320e",40:"#7a4111",50:"#a15717",55:"#b4611a",60:"#e38739",70:"#e79855",80:"#f7d4b5",95:"#fcf1e7"}),gold:T({5:"#281b00",10:"#2d1e01",20:"#3f2a00",30:"#543800",40:"#6d4900",50:"#906000",55:"#9c6d00",60:"#d09100",70:"#dca000",80:"#fbd67f",95:"#fff3d8"}),yellow:T({5:"#251d00",10:"#282000",20:"#3a2e01",30:"#4b3b00",40:"#624e00",50:"#806700",55:"#8e7200",60:"#be9900",70:"#d0a700",80:"#edda8f",95:"#fff5ca"}),grass:T({5:"#162106",10:"#182406",20:"#223308",30:"#2c4408",40:"#3a570b",50:"#4e750e",60:"#74ae15",70:"#7dbc17",80:"#bfe87c",95:"#ebfad4"}),green:T({5:"#042311",10:"#032611",20:"#023717",30:"#03481f",40:"#025d26",50:"#067b34",55:"#07883a",60:"#09b64d",70:"#0ac553",80:"#80f1a4",95:"#e0fae8"}),beryl:T({5:"#002319",10:"#00271c",20:"#003626",30:"#004732",40:"#005c41",50:"#007954",55:"#00875e",60:"#00b37c",70:"#00c387",80:"#72f0c5",95:"#d6fcef"}),teal:T({5:"#012220",10:"#012624",20:"#003532",30:"#004541",40:"#005a54",50:"#00776f",55:"#00857c",60:"#00b1a5",70:"#00bfb2",80:"#6aeee5",95:"#d4fcf8"}),cyan:T({5:"#00222b",10:"#00252e",20:"#013340",30:"#004457",40:"#00576f",50:"#007391",55:"#0080a1",60:"#00abd7",70:"#00b9e9",80:"#97e6fa",95:"#dff8ff"}),sky:T({5:"#031f34",10:"#032339",20:"#04314e",30:"#044169",40:"#065386",50:"#086eb3",55:"#097ac5",60:"#29a4f5",70:"#4db3f7",80:"#b3e0ff",95:"#eaf6fe"}),blue:T({5:"#07194a",10:"#081c53",20:"#0a2773",30:"#0e3496",40:"#1146b6",50:"#175fe9",55:"#2671ea",60:"#6b9ef1",70:"#81acf3",80:"#c6dbfe",95:"#edf4fe"}),indigo:T({5:"#1f1645",10:"#20174f",20:"#2b1f74",30:"#37289d",40:"#463fb1",50:"#5a5bd5",55:"#6464f1",60:"#9393f5",70:"#a1a5ee",80:"#d5d7fe",95:"#f1f2ff"}),violet:T({5:"#2b0a4e",10:"#2e0b57",20:"#3d1179",30:"#4e169f",40:"#5f2eba",50:"#7949e5",55:"#8755f5",60:"#ac8af8",70:"#b89bf9",80:"#e1d4fe",95:"#f5f1ff"}),purple:T({5:"#2e0c47",10:"#330c4e",20:"#460f6c",30:"#5b1390",40:"#7421b1",50:"#9832e4",55:"#a348e7",60:"#c184ef",70:"#ca96f1",80:"#ead1fe",95:"#f9f0ff"}),fuchsia:T({5:"#39092a",10:"#400932",20:"#560d4a",30:"#6f1165",40:"#8c158a",50:"#b61cbb",55:"#ca1fce",60:"#e66ee9",70:"#ea86ed",80:"#facbfb",95:"#feefff"}),pink:T({5:"#3d0722",10:"#430725",20:"#5d0933",30:"#790d44",40:"#9a1058",50:"#ca1473",55:"#e11681",60:"#f170b4",70:"#f388c0",80:"#fdcde6",95:"#fff0f8"}),crimson:T({5:"#430213",10:"#470314",20:"#62041c",30:"#800524",40:"#9f1036",50:"#ce1a4b",55:"#e8144c",60:"#f37596",70:"#f58ba7",80:"#fdceda",95:"#fff1f4"}),red:T({5:"#450001",10:"#490102",20:"#640304",30:"#800506",40:"#a11012",50:"#d11a1e",55:"#ed0a0e",60:"#f97476",70:"#fa8b8d",80:"#fdcfcf",95:"#fff1f1"})},ye=je;var _=["none","auto","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"],H=function(e){return e.length<2||e.find(n=>n.
<?php

/**
 * @file
 * HybridAuth
 * http://hybridauth.sourceforge.net | http://github.com/hybridauth/hybridauth
 * (c) 2009-2012, HybridAuth authors | http://hybridauth.sourceforge.net/licenses.html
 */

use PayPal\Api\OpenIdSession;
use PayPal\Api\OpenIdTokeninfo;
use PayPal\Api\OpenIdUserinfo;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Exception\PayPalConnectionException;
use PayPal\Rest\ApiContext;

/**
 * PayPal OAuth Class.
 *
 * @package  HybridAuth providers package
 * @version  1.0
 * @license  BSD License
 */

/**
 * Hybrid_Providers_Paypal - PayPal provider adapter based on OAuth2 protocol.
 */
class Hybrid_Providers_Paypal extends Hybrid_Provider_Model
{

    /**
     * The access privileges that you are requesting for
     * from the user. Pass empty array for all scopes.
     *
     * @var array $scope
     * @see https://developer.paypal.com/docs/integration/direct/identity/attributes
     */
    public $scope = array();

    /**
     * The provider api client
     *
     * @var ApiContext $api
     */
    public $api;

    /**
     * TRUE if sandbox mode is ON otherwise FALSE
     *
     * @var bool $sandbox
     */
    public $sandbox = true;

    /**
     * {@inheritdoc}
     */
    function initialize()
    {
        if (!$this->config["keys"]["id"] || !$this->config["keys"]["secret"]) {
            throw new Exception("Your application id and secret are required in order to connect to {$this->providerId}.", 4);
        }

        // Set scope from config.
        if (isset($this->config["scope"])) {
            $scope = $this->config["scope"];
            if (is_string($scope)) {
                $scope = explode(" ", $scope);
            }
            $scope = array_map("trim", $scope);
            $this->scope = $scope;
        }

        // Set sandbox from config.
        if (isset($this->config["sandbox"]) && is_bool($this->config["sandbox"])) {
            $this->sandbox = $this->config["sandbox"];
        }

        // Include 3rd-party SDK.
        $this->autoLoaderInit();

        // Set up ApiContext.
        $this->api = new ApiContext(
            new OAuthTokenCredential(
                $this->config["keys"]["id"],
                $this->config["keys"]["secret"]
            )
        );

        // Set up config.
        $this->api->setConfig(array(
            "log.LogEnabled" => Hybrid_Auth::$config["debug_mode"],
            "log.FileName" => Hybrid_Auth::$config["debug_file"],
            "log.LogLevel" => "DEBUG",
            "http.CURLOPT_SSLVERSION" => CURL_SSLVERSION_TLSv1,
            "mode" => $this->sandbox ? "sandbox" : "live",
        ));
    }

    /**
     * {@inheritdoc}
     */
    function loginBegin()
    {
        $url = OpenIdSession::getAuthorizationUrl(
            $this->endpoint,
            $this->scope,
            null,
            null,
            null,
            $this->api
        );
        // Redirect to PayPal.
        Hybrid_Auth::redirect($url);
    }

    /**
     * {@inheritdoc}
     */
    function loginFinish()
    {
        if (!isset($_GET["code"])) {
            throw new Exception("Authentication failed! User has canceled authentication!", 5);
        }

        $code = $_GET["code"];
        try {
            // Obtain Authorization Code from Code, Client ID and Client Secret
            $accessToken = OpenIdTokeninfo::createFromAuthorizationCode(array("code" => $code), null, null, $this->api);
            if ($accessToken) {
                $this->setUserConnected();

                // Store tokens.
                $this->token("id_token", $accessToken->getIdToken());
                $this->token("access_token", $accessToken->getAccessToken());
                $this->token("refresh_token", $accessToken->getRefreshToken());
            }
        } catch (PayPalConnectionException $e) {
            throw new Hybrid_Exception($e->getMessage(), $e->getCode(), $e);
        }
    }

    /**
     * {@inheritdoc}
     */
    function logout()
    {
        parent::logout();
        if ($idToken = $this->token("id_token")) {
            $url = OpenIdSession::getLogoutUrl(
                $this->params["hauth_return_to"],
                $idToken,
                $this->api
            );
            // Redirect to PayPal.
            Hybrid_Auth::redirect($url);
        }
    }

    /**
     * {@inheritdoc}
     */
    function getUserProfile()
    {
        try {
            $params = array("access_token" => $this->token("access_token"));
            $userInfo = OpenIdUserinfo::getUserinfo($params, $this->api);

            $profile = new Hybrid_User_Profile();

            $profile->identifier = $userInfo->getUserId();
            $profile->firstName = $userInfo->getGivenName();
            $profile->lastName = $userInfo->getFamilyName();
            $profile->displayName = $userInfo->getName();
            $profile->photoURL = $userInfo->getPicture();
            $profile->gender = $userInfo->getGender();
            $profile->email = $userInfo->getEmail();
            $profile->emailVerified = $userInfo->getEmailVerified();
            $profile->language = $userInfo->getLocale();
            $profile->phone = $userInfo->getPhoneNumber();
            if ($address = $userInfo->getAddress()) {
                $profile->address = $address->getStreetAddress();
                $profile->city = $address->getLocality();
                $profile->zip = $address->getPostalCode();
                $profile->country = $address->getCountry();
                $profile->region = $address->getRegion();
            }

            if ($birthdate = $userInfo->getBirthday()) {
                if (strpos($birthdate, "-") === FALSE) {
                    if ($birthdate !== "0000") {
                        $profile->birthYear = (int)$birthdate;
                    }
                } else {
                    list($birthday_year, $birthday_month, $birthday_day) = explode("-", $birthdate);

                    $profile->birthDay = (int) $birthday_day;
                    $profile->birthMonth = (int) $birthday_month;
                    if ($birthday_year !== "0000") {
                        $profile->birthYear = (int) $birthday_year;
                    }
                }
            }

            $this->user->profile = $profile;

            return $this->user->profile;
        } catch (Exception $e) {
            throw new Hybrid_Exception($e->getMessage(), $e->getCode(), $e);
        }
    }
}
/*
 * Elliptic-curve crypto module for PuTTY
 * Implements the three required curves, no optional curves
 *
 * NOTE: Only curves on prime field are handled by the maths functions
 *       in Weierstrass form using Jacobian co-ordinates.
 *
 *       Montgomery form curves are supported for DH. (Curve25519)
 *
 *       Edwards form curves are supported for DSA. (Ed25519)
 */

/*
 * References:
 *
 * Elliptic curves in SSH are specified in RFC 5656:
 *   http://tools.ietf.org/html/rfc5656
 *
 * That specification delegates details of public key formatting and a
 * lot of underlying mechanism to SEC 1:
 *   http://www.secg.org/sec1-v2.pdf
 *
 * Montgomery maths from:
 * Handbook of elliptic and hyperelliptic curve cryptography, Chapter 13
 *   http://cs.ucsb.edu/~koc/ccs130h/2013/EllipticHyperelliptic-CohenFrey.pdf
 *
 * Curve25519 spec from libssh (with reference to other things in the
 * libssh code):
 *   https://git.libssh.org/users/aris/libssh.git/tree/doc/curve25519-sha256@libssh.org.txt
 *
 * Edwards DSA:
 *   http://ed25519.cr.yp.to/ed25519-20110926.pdf
 */

#include <stdlib.h>
#include <assert.h>

#include "ssh.h"

/* ----------------------------------------------------------------------
 * Elliptic curve definitions
 */

static void initialise_wcurve(struct ec_curve *curve, int bits,
                              const unsigned char *p,
                              const unsigned char *a, const unsigned char *b,
                              const unsigned char *n, const unsigned char *Gx,
                              const unsigned char *Gy)
{
    int length = bits / 8;
    if (bits % 8) ++length;

    curve->type = EC_WEIERSTRASS;

    curve->fieldBits = bits;
    curve->p = bignum_from_bytes(p, length);

    /* Curve co-efficients */
    curve->w.a = bignum_from_bytes(a, length);
    curve->w.b = bignum_from_bytes(b, length);

    /* Group order and generator */
    curve->w.n = bignum_from_bytes(n, length);
    curve->w.G.x = bignum_from_bytes(Gx, length);
    curve->w.G.y = bignum_from_bytes(Gy, length);
    curve->w.G.curve = curve;
    curve->w.G.infinity = 0;
}

static void initialise_mcurve(struct ec_curve *curve, int bits,
                              const unsigned char *p,
                              const unsigned char *a, const unsigned char *b,
                              const unsigned char *Gx)
{
    int length = bits / 8;
    if (bits % 8) ++length;

    curve->type = EC_MONTGOMERY;

    curve->fieldBits = bits;
    curve->p = bignum_from_bytes(p, length);

    /* Curve co-efficients */
    curve->m.a = bignum_from_bytes(a, length);
    curve->m.b = bignum_from_bytes(b, length);

    /* Generator */
    curve->m.G.x = bignum_from_bytes(Gx, length);
    curve->m.G.y = NULL;
    curve->m.G.z = NULL;
    curve->m.G.curve = curve;
    curve->m.G.infinity = 0;
}

static void initialise_ecurve(struct ec_curve *curve, int bits,
                              const unsigned char *p,
                              const unsigned char *l, const unsigned char *d,
                              const unsigned char *Bx, const unsigned char *By)
{
    int length = bits / 8;
    if (bits % 8) ++length;

    curve->type = EC_EDWARDS;

    curve->fieldBits = bits;
    curve->p = bignum_from_bytes(p, length);

    /* Curve co-efficients */
    curve->e.l = bignum_from_bytes(l, length);
    curve->e.d = bignum_from_bytes(d, length);

    /* Group order and generator */
    curve->e.B.x = bignum_from_bytes(Bx, length);
    curve->e.B.y = bignum_from_bytes(By, length);
    curve->e.B.curve = curve;
    curve->e.B.infinity = 0;
}

static struct ec_curve *ec_p256(void)
{
    static struct ec_curve curve = { 0 };
    static unsigned char initialised = 0;

    if (!initialised)
    {
        static const unsigned char p[] = {
            0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x01,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff
        };
        static const unsigned char a[] = {
            0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x01,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfc
        };
        static const unsigned char b[] = {
            0x5a, 0xc6, 0x35, 0xd8, 0xaa, 0x3a, 0x93, 0xe7,
            0xb3, 0xeb, 0xbd, 0x55, 0x76, 0x98, 0x86, 0xbc,
            0x65, 0x1d, 0x06, 0xb0, 0xcc, 0x53, 0xb0, 0xf6,
            0x3b, 0xce, 0x3c, 0x3e, 0x27, 0xd2, 0x60, 0x4b
        };
        static const unsigned char n[] = {
            0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xbc, 0xe6, 0xfa, 0xad, 0xa7, 0x17, 0x9e, 0x84,
            0xf3, 0xb9, 0xca, 0xc2, 0xfc, 0x63, 0x25, 0x51
        };
        static const unsigned char Gx[] = {
            0x6b, 0x17, 0xd1, 0xf2, 0xe1, 0x2c, 0x42, 0x47,
            0xf8, 0xbc, 0xe6, 0xe5, 0x63, 0xa4, 0x40, 0xf2,
            0x77, 0x03, 0x7d, 0x81, 0x2d, 0xeb, 0x33, 0xa0,
            0xf4, 0xa1, 0x39, 0x45, 0xd8, 0x98, 0xc2, 0x96
        };
        static const unsigned char Gy[] = {
            0x4f, 0xe3, 0x42, 0xe2, 0xfe, 0x1a, 0x7f, 0x9b,
            0x8e, 0xe7, 0xeb, 0x4a, 0x7c, 0x0f, 0x9e, 0x16,
            0x2b, 0xce, 0x33, 0x57, 0x6b, 0x31, 0x5e, 0xce,
            0xcb, 0xb6, 0x40, 0x68, 0x37, 0xbf, 0x51, 0xf5
        };

        initialise_wcurve(&curve, 256, p, a, b, n, Gx, Gy);
        curve.textname = curve.name = "nistp256";

        /* Now initialised, no need to do it again */
        initialised = 1;
    }

    return &curve;
}

static struct ec_curve *ec_p384(void)
{
    static struct ec_curve curve = { 0 };
    static unsigned char initialised = 0;

    if (!initialised)
    {
        static const unsigned char p[] = {
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe,
            0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff
        };
        static const unsigned char a[] = {
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe,
            0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xfc
        };
        static const unsigned char b[] = {
            0xb3, 0x31, 0x2f, 0xa7, 0xe2, 0x3e, 0xe7, 0xe4,
            0x98, 0x8e, 0x05, 0x6b, 0xe3, 0xf8, 0x2d, 0x19,
            0x18, 0x1d, 0x9c, 0x6e, 0xfe, 0x81, 0x41, 0x12,
            0x03, 0x14, 0x08, 0x8f, 0x50, 0x13, 0x87, 0x5a,
            0xc6, 0x56, 0x39, 0x8d, 0x8a, 0x2e, 0xd1, 0x9d,
            0x2a, 0x85, 0xc8, 0xed, 0xd3, 0xec, 0x2a, 0xef
        };
        static const unsigned char n[] = {
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xc7, 0x63, 0x4d, 0x81, 0xf4, 0x37, 0x2d, 0xdf,
            0x58, 0x1a, 0x0d, 0xb2, 0x48, 0xb0, 0xa7, 0x7a,
            0xec, 0xec, 0x19, 0x6a, 0xcc, 0xc5, 0x29, 0x73
        };
        static const unsigned char Gx[] = {
            0xaa, 0x87, 0xca, 0x22, 0xbe, 0x8b, 0x05, 0x37,
            0x8e, 0xb1, 0xc7, 0x1e, 0xf3, 0x20, 0xad, 0x74,
            0x6e, 0x1d, 0x3b, 0x62, 0x8b, 0xa7, 0x9b, 0x98,
            0x59, 0xf7, 0x41, 0xe0, 0x82, 0x54, 0x2a, 0x38,
            0x55, 0x02, 0xf2, 0x5d, 0xbf, 0x55, 0x29, 0x6c,
            0x3a, 0x54, 0x5e, 0x38, 0x72, 0x76, 0x0a, 0xb7
        };
        static const unsigned char Gy[] = {
            0x36, 0x17, 0xde, 0x4a, 0x96, 0x26, 0x2c, 0x6f,
            0x5d, 0x9e, 0x98, 0xbf, 0x92, 0x92, 0xdc, 0x29,
            0xf8, 0xf4, 0x1d, 0xbd, 0x28, 0x9a, 0x14, 0x7c,
            0xe9, 0xda, 0x31, 0x13, 0xb5, 0xf0, 0xb8, 0xc0,
            0x0a, 0x60, 0xb1, 0xce, 0x1d, 0x7e, 0x81, 0x9d,
            0x7a, 0x43, 0x1d, 0x7c, 0x90, 0xea, 0x0e, 0x5f
        };

        initialise_wcurve(&curve, 384, p, a, b, n, Gx, Gy);
        curve.textname = curve.name = "nistp384";

        /* Now initialised, no need to do it again */
        initialised = 1;
    }

    return &curve;
}

static struct ec_curve *ec_p521(void)
{
    static struct ec_curve curve = { 0 };
    static unsigned char initialised = 0;

    if (!initialised)
    {
        static const unsigned char p[] = {
            0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff
        };
        static const unsigned char a[] = {
            0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xfc
        };
        static const unsigned char b[] = {
            0x00, 0x51, 0x95, 0x3e, 0xb9, 0x61, 0x8e, 0x1c,
            0x9a, 0x1f, 0x92, 0x9a, 0x21, 0xa0, 0xb6, 0x85,
            0x40, 0xee, 0xa2, 0xda, 0x72, 0x5b, 0x99, 0xb3,
            0x15, 0xf3, 0xb8, 0xb4, 0x89, 0x91, 0x8e, 0xf1,
            0x09, 0xe1, 0x56, 0x19, 0x39, 0x51, 0xec, 0x7e,
            0x93, 0x7b, 0x16, 0x52, 0xc0, 0xbd, 0x3b, 0xb1,
            0xbf, 0x07, 0x35, 0x73, 0xdf, 0x88, 0x3d, 0x2c,
            0x34, 0xf1, 0xef, 0x45, 0x1f, 0xd4, 0x6b, 0x50,
            0x3f, 0x00
        };
        static const unsigned char n[] = {
            0x01, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xfa, 0x51, 0x86, 0x87, 0x83, 0xbf, 0x2f,
            0x96, 0x6b, 0x7f, 0xcc, 0x01, 0x48, 0xf7, 0x09,
            0xa5, 0xd0, 0x3b, 0xb5, 0xc9, 0xb8, 0x89, 0x9c,
            0x47, 0xae, 0xbb, 0x6f, 0xb7, 0x1e, 0x91, 0x38,
            0x64, 0x09
        };
        static const unsigned char Gx[] = {
            0x00, 0xc6, 0x85, 0x8e, 0x06, 0xb7, 0x04, 0x04,
            0xe9, 0xcd, 0x9e, 0x3e, 0xcb, 0x66, 0x23, 0x95,
            0xb4, 0x42, 0x9c, 0x64, 0x81, 0x39, 0x05, 0x3f,
            0xb5, 0x21, 0xf8, 0x28, 0xaf, 0x60, 0x6b, 0x4d,
            0x3d, 0xba, 0xa1, 0x4b, 0x5e, 0x77, 0xef, 0xe7,
            0x59, 0x28, 0xfe, 0x1d, 0xc1, 0x27, 0xa2, 0xff,
            0xa8, 0xde, 0x33, 0x48, 0xb3, 0xc1, 0x85, 0x6a,
            0x42, 0x9b, 0xf9, 0x7e, 0x7e, 0x31, 0xc2, 0xe5,
            0xbd, 0x66
        };
        static const unsigned char Gy[] = {
            0x01, 0x18, 0x39, 0x29, 0x6a, 0x78, 0x9a, 0x3b,
            0xc0, 0x04, 0x5c, 0x8a, 0x5f, 0xb4, 0x2c, 0x7d,
            0x1b, 0xd9, 0x98, 0xf5, 0x44, 0x49, 0x57, 0x9b,
            0x44, 0x68, 0x17, 0xaf, 0xbd, 0x17, 0x27, 0x3e,
            0x66, 0x2c, 0x97, 0xee, 0x72, 0x99, 0x5e, 0xf4,
            0x26, 0x40, 0xc5, 0x50, 0xb9, 0x01, 0x3f, 0xad,
            0x07, 0x61, 0x35, 0x3c, 0x70, 0x86, 0xa2, 0x72,
            0xc2, 0x40, 0x88, 0xbe, 0x94, 0x76, 0x9f, 0xd1,
            0x66, 0x50
        };

        initialise_wcurve(&curve, 521, p, a, b, n, Gx, Gy);
        curve.textname = curve.name = "nistp521";

        /* Now initialised, no need to do it again */
        initialised = 1;
    }

    return &curve;
}

static struct ec_curve *ec_curve25519(void)
{
    static struct ec_curve curve = { 0 };
    static unsigned char initialised = 0;

    if (!initialised)
    {
        static const unsigned char p[] = {
            0x7f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xed
        };
        static const unsigned char a[] = {
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0x6d, 0x06
        };
        static const unsigned char b[] = {
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01
        };
        static const unsigned char gx[32] = {
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x09
        };

        initialise_mcurve(&curve, 256, p, a, b, gx);
        /* This curve doesn't need a name, because it's never used in
         * any format that embeds the curve name */
        curve.name = NULL;
        curve.textname = "Curve25519";

        /* Now initialised, no need to do it again */
        initialised = 1;
    }

    return &curve;
}

static struct ec_curve *ec_ed25519(void)
{
    static struct ec_curve curve = { 0 };
    static unsigned char initialised = 0;

    if (!initialised)
    {
        static const unsigned char q[] = {
            0x7f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xed
        };
        static const unsigned char l[32] = {
            0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x14, 0xde, 0xf9, 0xde, 0xa2, 0xf7, 0x9c, 0xd6,
            0x58, 0x12, 0x63, 0x1a, 0x5c, 0xf5, 0xd3, 0xed
        };
        static const unsigned char d[32] = {
            0x52, 0x03, 0x6c, 0xee, 0x2b, 0x6f, 0xfe, 0x73,
            0x8c, 0xc7, 0x40, 0x79, 0x77, 0x79, 0xe8, 0x98,
            0x00, 0x70, 0x0a, 0x4d, 0x41, 0x41, 0xd8, 0xab,
            0x75, 0xeb, 0x4d, 0xca, 0x13, 0x59, 0x78, 0xa3
        };
        static const unsigned char Bx[32] = {
            0x21, 0x69, 0x36, 0xd3, 0xcd, 0x6e, 0x53, 0xfe,
            0xc0, 0xa4, 0xe2, 0x31, 0xfd, 0xd6, 0xdc, 0x5c,
            0x69, 0x2c, 0xc7, 0x60, 0x95, 0x25, 0xa7, 0xb2,
            0xc9, 0x56, 0x2d, 0x60, 0x8f, 0x25, 0xd5, 0x1a
        };
        static const unsigned char By[32] = {
            0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66,
            0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66,
            0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66,
            0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x58
        };

        /* This curve doesn't need a name, because it's never used in
         * any format that embeds the curve name */
        curve.name = NULL;

        initialise_ecurve(&curve, 256, q, l, d, Bx, By);
        curve.textname = "Ed25519";

        /* Now initialised, no need to do it again */
        initialised = 1;
    }

    return &curve;
}

/* Return 1 if a is -3 % p, otherwise return 0
 * This is used because there are some maths optimisations */
static int ec_aminus3(const struct ec_curve *curve)
{
    int ret;
    Bignum _p;

    if (curve->type != EC_WEIERSTRASS) {
        return 0;
    }

    _p = bignum_add_long(curve->w.a, 3);

    ret = !bignum_cmp(curve->p, _p);
    freebn(_p);
    return ret;
}

/* ----------------------------------------------------------------------
 * Elliptic curve field maths
 */

static Bignum ecf_add(const Bignum a, const Bignum b,
                      const struct ec_curve *curve)
{
    Bignum a1, b1, ab, ret;

    a1 = bigmod(a, curve->p);
    b1 = bigmod(b, curve->p);

    ab = bigadd(a1, b1);
    freebn(a1);
    freebn(b1);

    ret = bigmod(ab, curve->p);
    freebn(ab);

    return ret;
}

static Bignum ecf_square(const Bignum a, const struct ec_curve *curve)
{
    return modmul(a, a, curve->p);
}

static Bignum ecf_treble(const Bignum a, const struct ec_curve *curve)
{
    Bignum ret, tmp;

    /* Double */
    tmp = bignum_lshift(a, 1);

    /* Add itself (i.e. treble) */
    ret = bigadd(tmp, a);
    freebn(tmp);

    /* Normalise */
    while (bignum_cmp(ret, curve->p) >= 0)
    {
        tmp = bigsub(ret, curve->p);
        assert(tmp);
        freebn(ret);
        ret = tmp;
    }

    return ret;
}

static Bignum ecf_double(const Bignum a, const struct ec_curve *curve)
{
    Bignum ret = bignum_lshift(a, 1);
    if (bignum_cmp(ret, curve->p) >= 0)
    {
        Bignum tmp = bigsub(ret, curve->p);
        assert(tmp);
        freebn(ret);
        return tmp;
    }
    else
    {
        return ret;
    }
}

/* ----------------------------------------------------------------------
 * Memory functions
 */

void ec_point_free(struct ec_point *point)
{
    if (point == NULL) return;
    point->curve = 0;
    if (point->x) freebn(point->x);
    if (point->y) freebn(point->y);
    if (point->z) freebn(point->z);
    point->infinity = 0;
    sfree(point);
}

static struct ec_point *ec_point_new(const struct ec_curve *curve,
                                     const Bignum x, const Bignum y, const Bignum z,
                                     unsigned char infinity)
{
    struct ec_point *point = snewn(1, struct ec_point);
    point->curve = curve;
    point->x = x;
    point->y = y;
    point->z = z;
    point->infinity = infinity ? 1 : 0;
    return point;
}

static struct ec_point *ec_point_copy(const struct ec_point *a)
{
    if (a == NULL) return NULL;
    return ec_point_new(a->curve,
                        a->x ? copybn(a->x) : NULL,
                        a->y ? copybn(a->y) : NULL,
                        a->z ? copybn(a->z) : NULL,
                        a->infinity);
}

static int ec_point_verify(const struct ec_point *a)
{
    if (a->infinity) {
        return 1;
    } else if (a->curve->type == EC_EDWARDS) {
        /* Check y^2 - x^2 - 1 - d * x^2 * y^2 == 0 */
        Bignum y2, x2, tmp, tmp2, tmp3;
        int ret;

        y2 = ecf_square(a->y, a->curve);
        x2 = ecf_square(a->x, a->curve);
        tmp = modmul(a->curve->e.d, x2, a->curve->p);
        tmp2 = modmul(tmp, y2, a->curve->p);
        freebn(tmp);
        tmp = modsub(y2, x2, a->curve->p);
        freebn(y2);
        freebn(x2);
        tmp3 = modsub(tmp, tmp2, a->curve->p);
        freebn(tmp);
        freebn(tmp2);
        ret = !bignum_cmp(tmp3, One);
        freebn(tmp3);
        return ret;
    } else if (a->curve->type == EC_WEIERSTRASS) {
        /* Verify y^2 = x^3 + ax + b */
        int ret = 0;

        Bignum lhs = NULL, x3 = NULL, ax = NULL, x3ax = NULL, x3axm = NULL, x3axb = NULL, rhs = NULL;

        Bignum Three = bignum_from_long(3);

        lhs = modmul(a->y, a->y, a->curve->p);

        /* This uses montgomery multiplication to optimise */
        x3 = modpow(a->x, Three, a->curve->p);
        freebn(Three);
        ax = modmul(a->curve->w.a, a->x, a->curve->p);
        x3ax = bigadd(x3, ax);
        freebn(x3); x3 = NULL;
        freebn(ax);This is the README for the source archive of PuTTY, a free Windows
and Unix Telnet and SSH client.

If you want to rebuild PuTTY from source, we provide a variety of
Makefiles and equivalents. (If you have fetched the source from
Git, you'll have to generate the Makefiles yourself -- see
below.)

There are various compile-time directives that you can use to
disable or modify certain features; it may be necessary to do this
in some environments. They are documented in `Recipe', and in
comments in many of the generated Makefiles.

For building on Windows:

 - windows/Makefile.vc is for command-line builds on MS Visual C++
   systems. Change into the `windows' subdirectory and type `nmake
   -f Makefile.vc' to build all the PuTTY binaries.

   As of 2017, we successfully compile PuTTY with both Visual Studio
   7 (2003) and Visual Studio 14 (2015), so our guess is that it will
   probably build with versions in between those as well.

   (The binaries from Visual Studio 14 are only compatible with
   Windows XP and up. Binaries from Visual Studio 7 ought to work
   with anything from Windows 95 onward.)

 - Inside the windows/MSVC subdirectory are MS Visual Studio project
   files for doing GUI-based builds of the various PuTTY utilities.
   These have been tested on Visual Studio 7 and 10.

   You should be able to build each PuTTY utility by loading the
   corresponding .dsp file in Visual Studio. For example,
   MSVC/putty/putty.dsp builds PuTTY itself, MSVC/plink/plink.dsp
   builds Plink, and so on.

 - windows/Makefile.mgw is for MinGW / Cygwin installations. Type
   `make -f Makefile.mgw' while in the `windows' subdirectory to
   build all the PuTTY binaries.

   MinGW and friends can lag behind other toolchains in their support
   for the Windows API. Compile-time levers are provided to exclude
   some features; the defaults are set appropriately for the
   'mingw-w64' cross-compiler provided with Ubuntu 14.04. If you are
   using an older toolchain, you may need to exclude more features;
   alternatively, you may find that upgrading to a recent version of
   the 'w32api' package helps.

 - windows/Makefile.lcc is for lcc-win32. Type `make -f
   Makefile.lcc' while in the `windows' subdirectory. (You will
   probably need to specify COMPAT=-DNO_MULTIMON.)

 - Inside the windows/DEVCPP subdirectory are Dev-C++ project
   files for doing GUI-based builds of the various PuTTY utilities.

The PuTTY team actively use Makefile.vc (with VC7/10) and Makefile.mgw
(with mingw32), so we'll probably notice problems with those
toolchains fairly quickly. Please report any problems with the other
toolchains mentioned above.

For building on Unix:

 - unix/configure is for Unix and GTK. If you don't have GTK, you
   should still be able to build the command-line utilities (PSCP,
   PSFTP, Plink, PuTTYgen) using this script. To use it, change into
   the `unix' subdirectory, run `./configure' and then `make'. Or you
   can do the same in the top-level directory (we provide a little
   wrapper that invokes configure one level down), which is more like
   a normal Unix source archive but doesn't do so well at keeping the
   per-platform stuff in each platform's subdirectory; it's up to you.

 - unix/Makefile.gtk and unix/Makefile.ux are for non-autoconfigured
   builds. These makefiles expect you to change into the `unix'
   subdirectory, then run `make -f Makefile.gtk' or `make -f
   Makefile.ux' respectively. Makefile.gtk builds all the programs but
   relies on Gtk, whereas Makefile.ux builds only the command-line
   utilities and has no Gtk dependence.

 - For the graphical utilities, any of Gtk+-1.2, Gtk+-2.0, and Gtk+-3.0
   should be supported. If you have more than one installed, you can
   manually specify which one you want by giving the option
   '--with-gtk=N' to the configure script where N is 1, 2, or 3.
   (The default is the newest available, of course.) In the absence
   of any Gtk version, the configure script will automatically
   construct a Makefile which builds only the command-line utilities;
   you can manually create this condition by giving configure the
   option '--without-gtk'.

 - pterm would like to be setuid or setgid, as appropriate, to permit
   it to write records of user logins to /var/run/utmp and
   /var/log/wtmp. (Of course it will not use this privilege for
   anything else, and in particular it will drop all privileges before
   starting up complex subsystems like GTK.) By default the makefile
   will not attempt to add privileges to the pterm executable at 'make
   install' time, but you can ask it to do so by running configure
   with the option '--enable-setuid=USER' or '--enable-setgid=GROUP'.

 - The Unix Makefiles have an `install' target. Note that by default
   it tries to install `man' pages; if you have fetched the source via
   Git then you will need to have built these using Halibut
   first - see below.

 - It's also possible to build the Windows version of PuTTY to run
   on Unix by using Winelib.  To do this, change to the `windows'
   directory and run `make -f Makefile.mgw CC=winegcc RC=wrc'.

All of the Makefiles are generated automatically from the file
`Recipe' by the Perl script `mkfiles.pl' (except for the Unix one,
which is generated by the `configure' script; mkfiles.pl only
generates the input to automake). Additions and corrections to Recipe,
mkfiles.pl and/or configure.ac are much more useful than additions and
corrections to the actual Makefiles, Makefile.am or Makefile.in.

The Unix `configure' script and its various requirements are generated
by the shell script `mkauto.sh', which requires GNU Autoconf, GNU
Automake, and Gtk; if you've got the source from Git rather
than using one of our source snapshots, you'll need to run this
yourself. The input file to Automake is generated by mkfiles.pl along
with all the rest of the makefiles, so you will need to run mkfiles.pl
and then mkauto.sh.

Documentation (in various formats including Windows Help and Unix
`man' pages) is built from the Halibut (`.but') files in the `doc'
subdirectory using `doc/Makefile'. If you aren't using one of our
source snapshots, you'll need to do this yourself. Halibut can be
found at <https://www.chiark.greenend.org.uk/~sgtatham/halibut/>.

The PuTTY home web site is

    https://www.chiark.greenend.org.uk/~sgtatham/putty/

If you want to send bug reports or feature requests, please read the
Feedback section of the web site before doing so. Sending one-line
reports saying `it doesn't work' will waste your time as much as
ours.

See the file LICENCE for the licence conditions.
<?php

/**
 * PuTTY Formatted DSA Key Handler
 *
 * puttygen does not generate DSA keys with an N of anything other than 160, however,
 * it can still load them and convert them. PuTTY will load them, too, but SSH servers
 * won't accept them. Since PuTTY formatted keys are primarily used with SSH this makes
 * keys with N > 160 kinda useless, hence this handlers not supporting such keys.
 *
 * PHP version 5
 *
 * @category  Crypt
 * @package   DSA
 * @author    Jim Wigginton <terrafrost@php.net>
 * @copyright 2015 Jim Wigginton
 * @license   http://www.opensource.org/licenses/mit-license.html  MIT License
 * @link      http://phpseclib.sourceforge.net
 */

namespace phpseclib3\Crypt\DSA\Formats\Keys;

use phpseclib3\Common\Functions\Strings;
use phpseclib3\Crypt\Common\Formats\Keys\PuTTY as Progenitor;
use phpseclib3\Math\BigInteger;

/**
 * PuTTY Formatted DSA Key Handler
 *
 * @package DSA
 * @author  Jim Wigginton <terrafrost@php.net>
 * @access  public
 */
abstract class PuTTY extends Progenitor
{
    /**
     * Public Handler
     *
     * @var string
     * @access private
     */
    const PUBLIC_HANDLER = 'phpseclib3\Crypt\DSA\Formats\Keys\OpenSSH';

    /**
     * Algorithm Identifier
     *
     * @var array
     * @access private
     */
    protected static $types = ['ssh-dss'];

    /**
     * Break a public or private key down into its constituent components
     *
     * @access public
     * @param string $key
     * @param string $password optional
     * @return array
     */
    public static function load($key, $password = '')
    {
        $components = parent::load($key, $password);
        if (!isset($components['private'])) {
            return $components;
        }
        extract($components);
        unset($components['public'], $components['private']);

        list($p, $q, $g, $y) = Strings::unpackSSH2('iiii', $public);
        list($x) = Strings::unpackSSH2('i', $private);

        return compact('p', 'q', 'g', 'y', 'x', 'comment');
    }

    /**
     * Convert a private key to the appropriate format.
     *
     * @access public
     * @param \phpseclib3\Math\BigInteger $p
     * @param \phpseclib3\Math\BigInteger $q
     * @param \phpseclib3\Math\BigInteger $g
     * @param \phpseclib3\Math\BigInteger $y
     * @param \phpseclib3\Math\BigInteger $x
     * @param string $password optional
     * @param array $options optional
     * @return string
     */
    public static function savePrivateKey(BigInteger $p, BigInteger $q, BigInteger $g, BigInteger $y, BigInteger $x, $password = false, array $options = [])
    {
        if ($q->getLength() != 160) {
            throw new \InvalidArgumentException('SSH only supports keys with an N (length of Group Order q) of 160');
        }

        $public = Strings::packSSH2('iiii', $p, $q, $g, $y);
        $private = Strings::packSSH2('i', $x);

        return self::wrapPrivateKey($public, $private, 'ssh-dsa', $password, $options);
    }

    /**
     * Convert a public key to the appropriate format
     *
     * @access public
     * @param \phpseclib3\Math\BigInteger $p
     * @param \phpseclib3\Math\BigInteger $q
     * @param \phpseclib3\Math\BigInteger $g
     * @param \phpseclib3\Math\BigInteger $y
     * @return string
     */
    public static function savePublicKey(BigInteger $p, BigInteger $q, BigInteger $g, BigInteger $y)
    {
        if ($q->getLength() != 160) {
            throw new \InvalidArgumentException('SSH only supports keys with an N (length of Group Order q) of 160');
        }

        return self::wrapPublicKey(Strings::packSSH2('iiii', $p, $q, $g, $y), 'ssh-dsa');
    }
}
<?php

/**
 * PuTTY Formatted EC Key Handler
 *
 * PHP version 5
 *
 * @category  Crypt
 * @package   EC
 * @author    Jim Wigginton <terrafrost@php.net>
 * @copyright 2015 Jim Wigginton
 * @license   http://www.opensource.org/licenses/mit-license.html  MIT License
 * @link      http://phpseclib.sourceforge.net
 */

namespace phpseclib3\Crypt\EC\Formats\Keys;

use ParagonIE\ConstantTime\Base64;
use phpseclib3\Common\Functions\Strings;
use phpseclib3\Crypt\Common\Formats\Keys\PuTTY as Progenitor;
use phpseclib3\Crypt\EC\BaseCurves\Base as BaseCurve;
use phpseclib3\Crypt\EC\BaseCurves\TwistedEdwards as TwistedEdwardsCurve;
use phpseclib3\Math\BigInteger;

/**
 * PuTTY Formatted EC Key Handler
 *
 * @package EC
 * @author  Jim Wigginton <terrafrost@php.net>
 * @access  public
 */
abstract class PuTTY extends Progenitor
{
    use Common;

    /**
     * Public Handler
     *
     * @var string
     * @access private
     */
    const PUBLIC_HANDLER = 'phpseclib3\Crypt\EC\Formats\Keys\OpenSSH';

    /**
     * Supported Key Types
     *
     * @var array
     * @access private
     */
    protected static $types = [
        'ecdsa-sha2-nistp256',
        'ecdsa-sha2-nistp384',
        'ecdsa-sha2-nistp521',
        'ssh-ed25519'
    ];

    /**
     * Break a public or private key down into its constituent components
     *
     * @access public
     * @param string $key
     * @param string $password optional
     * @return array
     */
    public static function load($key, $password = '')
    {
        $components = parent::load($key, $password);
        if (!isset($components['private'])) {
            return $components;
        }

        $private = $components['private'];

        $temp = Base64::encode(Strings::packSSH2('s', $components['type']) . $components['public']);
        $components = OpenSSH::load($components['type'] . ' ' . $temp . ' ' . $components['comment']);

        if ($components['curve'] instanceof TwistedEdwardsCurve) {
            if (Strings::shift($private, 4) != "\0\0\0\x20") {
                throw new \RuntimeException('Length of ssh-ed25519 key should be 32');
            }
            $components['dA'] = $components['curve']->extractSecret($private);
        } else {
            list($components['dA']) = Strings::unpackSSH2('i', $private);
            $components['curve']->rangeCheck($components['dA']);
        }

        return $components;
    }

    /**
     * Convert a private key to the appropriate format.
     *
     * @access public
     * @param \phpseclib3\Math\BigInteger $privateKey
     * @param \phpseclib3\Crypt\EC\BaseCurves\Base $curve
     * @param \phpseclib3\Math\Common\FiniteField\Integer[] $publicKey
     * @param string $password optional
     * @param array $options optional
     * @return string
     */
    public static function savePrivateKey(BigInteger $privateKey, BaseCurve $curve, array $publicKey, $password = false, array $options = [])
    {
        self::initialize_static_variables();

        $public = explode(' ', OpenSSH::savePublicKey($curve, $publicKey));
        $name = $public[0];
        $public = Base64::decode($public[1]);
        list(, $length) = unpack('N', Strings::shift($public, 4));
        Strings::shift($public, $length);

        // PuTTY pads private keys with a null byte per the following:
        // https://github.com/github/putty/blob/a3d14d77f566a41fc61dfdc5c2e0e384c9e6ae8b/sshecc.c#L1926
        if (!$curve instanceof TwistedEdwardsCurve) {
            $private = $privateKey->toBytes();
            if (!(strlen($privateKey->toBits()) & 7)) {
                $private = "\0$private";
            }
        }

        $private = $curve instanceof TwistedEdwardsCurve ?
            Strings::packSSH2('s', $privateKey->secret) :
            Strings::packSSH2('s', $private);

        return self::wrapPrivateKey($public, $private, $name, $password, $options);
    }

    /**
     * Convert an EC public key to the appropriate format
     *
     * @access public
     * @param \phpseclib3\Crypt\EC\BaseCurves\Base $curve
     * @param \phpseclib3\Math\Common\FiniteField[] $publicKey
     * @return string
     */
    public static function savePublicKey(BaseCurve $curve, array $publicKey)
    {
        $public = explode(' ', OpenSSH::savePublicKey($curve, $publicKey));
        $type = $public[0];
        $public = Base64::decode($public[1]);
        list(, $length) = unpack('N', Strings::shift($public, 4));
        Strings::shift($public, $length);

        return self::wrapPublicKey($public, $type);
    }
}
<?php

/**
 * PuTTY Formatted RSA Key Handler
 *
 * PHP version 5
 *
 * @category  Crypt
 * @package   RSA
 * @author    Jim Wigginton <terrafrost@php.net>
 * @copyright 2015 Jim Wigginton
 * @license   http://www.opensource.org/licenses/mit-license.html  MIT License
 * @link      http://phpseclib.sourceforge.net
 */

namespace phpseclib3\Crypt\RSA\Formats\Keys;

use phpseclib3\Common\Functions\Strings;
use phpseclib3\Crypt\Common\Formats\Keys\PuTTY as Progenitor;
use phpseclib3\Math\BigInteger;

/**
 * PuTTY Formatted RSA Key Handler
 *
 * @package RSA
 * @author  Jim Wigginton <terrafrost@php.net>
 * @access  public
 */
abstract class PuTTY extends Progenitor
{
    /**
     * Public Handler
     *
     * @var string
     * @access private
     */
    const PUBLIC_HANDLER = 'phpseclib3\Crypt\RSA\Formats\Keys\OpenSSH';

    /**
     * Algorithm Identifier
     *
     * @var array
     * @access private
     */
    protected static $types = ['ssh-rsa'];

    /**
     * Break a public or private key down into its constituent components
     *
     * @access public
     * @param string $key
     * @param string $password optional
     * @return array
     */
    public static function load($key, $password = '')
    {
        static $one;
        if (!isset($one)) {
            $one = new BigInteger(1);
        }

        $components = parent::load($key, $password);
        if (!isset($components['private'])) {
            return $components;
        }
        extract($components);
        unset($components['public'], $components['private']);

        $isPublicKey = false;

        $result = Strings::unpackSSH2('ii', $public);
        if ($result === false) {
            throw new \UnexpectedValueException('Key appears to be malformed');
        }
        list($publicExponent, $modulus) = $result;

        $result = Strings::unpackSSH2('iiii', $private);
        if ($result === false) {
            throw new \UnexpectedValueException('Key appears to be malformed');
        }
        $primes = $coefficients = [];
        list($privateExponent, $primes[1], $primes[2], $coefficients[2]) = $result;

        $temp = $primes[1]->subtract($one);
        $exponents = [1 => $publicExponent->modInverse($temp)];
        $temp = $primes[2]->subtract($one);
        $exponents[] = $publicExponent->modInverse($temp);

        return compact('publicExponent', 'modulus', 'privateExponent', 'primes', 'coefficients', 'exponents', 'comment', 'isPublicKey');
    }

    /**
     * Convert a private key to the appropriate format.
     *
     * @access public
     * @param \phpseclib3\Math\BigInteger $n
     * @param \phpseclib3\Math\BigInteger $e
     * @param \phpseclib3\Math\BigInteger $d
     * @param array $primes
     * @param array $exponents
     * @param array $coefficients
     * @param string $password optional
     * @param array $options optional
     * @return string
     */
    public static function savePrivateKey(BigInteger $n, BigInteger $e, BigInteger $d, array $primes, array $exponents, array $coefficients, $password = '', array $options = [])
    {
        if (count($primes) != 2) {
            throw new \InvalidArgumentException('PuTTY does not support multi-prime RSA keys');
        }

        $public =  Strings::packSSH2('ii', $e, $n);
        $private = Strings::packSSH2('iiii', $d, $primes[1], $primes[2], $coefficients[2]);

        return self::wrapPrivateKey($public, $private, 'ssh-rsa', $password, $options);
    }

    /**
     * Convert a public key to the appropriate format
     *
     * @access public
     * @param \phpseclib3\Math\BigInteger $n
     * @param \phpseclib3\Math\BigInteger $e
     * @return string
     */
    public static function savePublicKey(BigInteger $n, BigInteger $e)
    {
        return self::wrapPublicKey(Strings::packSSH2('ii', $e, $n), 'ssh-rsa');
    }
}
Homepage
DomainsProtocolsNumbersAbout
IANA-managed Reserved Domains
Certain domains are set aside, and nominally registered to “IANA”, for specific policy or technical purposes.

Example domains
As described in RFC 2606 and RFC 6761, a number of domains such as example.com and example.org are maintained for documentation purposes. These domains may be used as illustrative examples in documents without prior coordination with us. They are not available for registration or transfer.

Test IDN top-level domains
These domains were temporarily delegated by IANA for the IDN Evaluation being conducted by ICANN.

إختبار
XN--KGBECHTV
Arabic
Arabic
آزمایشی
XN--HGBK6AJ7F53BBA
Persian
Arabic
测试
XN--0ZWM56D
Chinese
Han (Simplified variant)
測試
XN--G6W251D
Chinese
Han (Traditional variant)
испытание
XN--80AKHBYKNJ4F
Russian
Cyrillic
परीक्षा
XN--11B5BS3A9AJ6G
Hindi
Devanagari (Nagari)
δοκιμή
XN--JXALPDLP
Greek, Modern (1453-)
Greek
테스트
XN--9T4B11YI5A
Korean
Hangul (Hangŭl, Hangeul)
טעסט
XN--DEBA0AD
Yiddish
Hebrew
テスト
XN--ZCKZAH
Japanese
Katakana
பரிட்சை
XN--HLCJ6AYA9ESC7A
Tamil
Tamil
Policy-reserved domains
We act as both the registrant and registrar for a select number of domains which have been reserved under policy grounds. These exclusions are typically indicated in either technical standards (RFC documents), or contractual limitations.

Domains which are described as registered to IANA or ICANN on policy grounds are not available for registration or transfer, with the exception of country-name.info domains. These domains are available for release by the ICANN Governmental Advisory Committee Secretariat.

Other Special-Use Domains
There is additionally a Special-Use Domain Names registry documenting special-use domains designated by technical standards. For further information, see Special-Use Domain Names (RFC 6761).

Domain Names	
Root Zone Registry.INT Registry.ARPA RegistryIDN Repository
Number Resources	
Abuse Information
Protocols	
Protocol RegistriesTime Zone Database
About Us	
NewsPerformanceExcellenceArchiveContact Us
The IANA functions coordinate the Internet’s globally unique identifiers, and are provided by Public Technical Identifiers, an affiliate of ICANN.

Privacy PolicyTerms of Service
traslación mensaje title by:Edgar Manuel Ruiz Arias , edgarplasticos3@hotmail.com 
Translations:2021-12 security release/FAQ/Page display title/en 
Translations:2021-12 security release/FAQ/1/en 
Translations:2021-12 security release/FAQ/25/en 
Translations:2021-12 security release/FAQ/26/en 
Translations:2021-12 security release/FAQ/27/en 
Translations:2021-12 security release/FAQ/2/en 
Translations:2021-12 security release/FAQ/3/en 
Translations:2021-12 security release/FAQ/28/en 
Translations:2021-12 security release/FAQ/29/en 
Translations:2021-12 security release/FAQ/4/en 
Translations:2021-12 security release/FAQ/5/en 
Translations:2021-12 security release/FAQ/6/en 
Translations:2021-12 security release/FAQ/7/en 
Translations:2021-12 security release/FAQ/8/en 
Translations:2021-12 security release/FAQ/9/en 
Translations:2021-12 security release/FAQ/10/en 
Translations:2021-12 security release/FAQ/11/en 
Translations:2021-12 security release/FAQ/12/en 
Translations:2021-12 security release/FAQ/13/en 
Translations:2021-12 security release/FAQ/14/en 
Translations:2021-12 security release/FAQ/15/en 
Translations:2021-12 security release/FAQ/16/en 
Translations:2021-12 security release/FAQ/17/en 
Translations:2021-12 security release/FAQ/18/en 
Translations:2021-12 security release/FAQ/19/en 
Translations:2021-12 security release/FAQ/20/en 
Translations:2021-12 security release/FAQ/21/en 
Translations:2021-12 security release/FAQ/22/en 
Translations:2021-12 security release/FAQ/23/en 
Translations:2021-12 security release/FAQ/24/en 
Translations:2021-12 security release/FAQ/30/e
Message definition 
2021-12 security release/FAQ 
A series of vulnerabilities have been found in MediaWiki that allow an attacker to leak page contents from private wikis and bypass edit permissions. 
The main vector for this wiki-leak is using vulnerable actions on pages that are listed in $1 and therefore publicly accessible. 
MediaWiki now only makes the "view" action publicly accessible on pages in $1 by default. 
These issues are fixed in 1.35.5, 1.36.3, and 1.37.1, see the [$url announcement] for links to tarballs and patches. 
#NAME? 
* CVE-2021-44858: The "undo" feature ($1) allowed an attacker to view the contents of arbitrary revisions, regardless of whether they had permissions to do so. This was also found in the "$2" and "$3" actions ($4 and $5). 
* CVE-2021-44857: The "$1" and "$2" actions ($3 and $4) did not properly check for editing permissions, and allowed an attacker to take the content of any arbitrary revision and save it on any page of their choosing. This affects both public wikis and public pages on private wikis. 
== I don't have time to patch, how do I disable this? == 
Add the following to your $1: 
If your wiki is private (requires login to view pages) you will '''also''' need to set: 
It should fully disable the vulnerable code. These changes will also work for vulnerable end-of-life MediaWiki versions that do not have a patch available. 
If you used $1 to allow logged-out users to see the main page with help text, you should instead move that help text to the [[MediaWiki:Loginreqpagetext|MediaWiki:Loginreqpagetext]] message, which is shown on the "login required" error. 
== Was I affected? == 
* If your wiki is public (anyone can read pages): yes 
* If your wiki is private, and $1 or $2 has at least one page: yes 
If you use an extension like $1 or $2 to make some pages unreadable to some users, you are also likely affected. 
== What versions are vulnerable? == 
All MediaWiki versions since 1.23.0 until 1.34.x, and 1.35.x, 1.36.x, 1.37.x before the fixes (see [[$1|the top section]]), are vulnerable to the private wiki read permissions bypasses (CVE-2021-44858, CVE-2021-45038). 
All MediaWiki versions since 1.32.0 until 1.34.x, and 1.35.x, 1.36.x, 1.37.x before the fixes (see [[$1|the top section]]), are vulnerable to the editing permissions bypass (CVE-2021-44857). 
== How is this being fixed long-term? == 
All actions except "view" now require an explicit "read" user right. This is similar to permission checks used in the Action and REST APIs. If further vulnerabilities are found in actions, they will at least not be exploitable by logged-out users on private wikis. 
Actions that need to be usable on $1 pages can override the new $2 function. 
== How can I see if someone exploited it on my wiki? == 
Look for $1 or $2 in your access logs. Unless you specifically enabled an extension that uses [[$3|multi-content revisions]], there is no legitimate use for these actions. 
In addition, look for $1 requests and check whether the revision IDs belong to a different title than the page being edited. 
For the rollback bug, look for $1 where the "from" parameter is a template transclusion (for example, $2). 
This bug does not cause any data loss, so any write actions an attacker could have taken will be recorded in page history like all other edits. 
== Credit == 
The issue was discovered by $1, many thanks to them for identifying and reporting the issue. 
If you find a bug in MediaWiki, please see the process for [[$1|reporting security bugs]]
## https://1drv.ms/b/c/3b6ca5bfcad4519d/IQCRv3ATUuVwRb6_0DJJUT1MAYdTUvjzfqG9UHqdmgTwUPs
2025-09-07T19:46:37.5605496Z ##[group]Run mise r csskit-acceptance
2025-09-07T19:46:37.5605863Z [36;1mmise r csskit-acceptance[0m
2025-09-07T19:46:37.5664921Z shell: /usr/bin/bash -e {0}
2025-09-07T19:46:37.5665174Z env:
2025-09-07T19:46:37.5665451Z   CARGO_TARGET_AARCH64_UNKNOWN_LINUX_GNU_LINKER: aarch64-linux-gnu-gcc
2025-09-07T19:46:37.5665797Z   MISE_LOG_LEVEL: info
2025-09-07T19:46:37.5666237Z   GITHUB_TOKEN: ***
2025-09-07T19:46:37.5666498Z   MISE_TRUSTED_CONFIG_PATHS: /home/runner/work/csskit/csskit
2025-09-07T19:46:37.5666794Z   MISE_YES: 1
2025-09-07T19:46:37.5666971Z   CARGO_HOME: /home/runner/.cargo
2025-09-07T19:46:37.5667309Z   DENO_INSTALL_ROOT: /home/runner/.local/share/mise/installs/deno/2.4.5/.deno
2025-09-07T19:46:37.5670023Z   PATH: /home/runner/.cargo/bin:/home/runner/.local/share/mise/installs/deno/2.4.5/bin:/home/runner/.local/share/mise/installs/deno/2.4.5/.deno/bin:/home/runner/.local/share/mise/installs/node/24.7.0/bin:/home/runner/.local/share/mise/installs/cargo-cargo-insta/1.43.1/bin:/home/runner/.local/share/mise/installs/cargo-cargo-expand/1.0.114/bin:/home/runner/.local/share/mise/installs/cargo-cargo-edit/0.13.6/bin:/home/runner/.local/share/mise/installs/cargo-samply/0.13.1/bin:/home/runner/.local/share/mise/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
2025-09-07T19:46:37.5672660Z   RUSTUP_HOME: /home/runner/.rustup
2025-09-07T19:46:37.5672896Z   RUSTUP_TOOLCHAIN: 1.88.0
2025-09-07T19:46:37.5673110Z   CACHE_ON_FAILURE: false
2025-09-07T19:46:37.5673518Z   CARGO_INCREMENTAL: 0
2025-09-07T19:46:37.5673706Z ##[endgroup]
2025-09-07T19:46:37.5984208Z [0m[34m[build][0m [1m$ cargo build --all-features[0m
2025-09-07T19:46:37.7173270Z     Updating crates.io index
2025-09-07T19:46:38.4132866Z    Compiling unicode-ident v1.0.18
2025-09-07T19:46:38.4133542Z    Compiling proc-macro2 v1.0.101
2025-09-07T19:46:38.4134078Z    Compiling cfg-if v1.0.1
2025-09-07T19:46:38.4134508Z    Compiling memchr v2.7.5
2025-09-07T19:46:38.4429732Z    Compiling libc v0.2.174
2025-09-07T19:46:38.4722261Z    Compiling serde v1.0.219
2025-09-07T19:46:38.7767984Z    Compiling once_cell v1.21.3
2025-09-07T19:46:38.9581917Z    Compiling log v0.4.27
2025-09-07T19:46:39.0777483Z    Compiling autocfg v1.5.0
2025-09-07T19:46:39.1290253Z    Compiling aho-corasick v1.1.3
2025-09-07T19:46:39.3966957Z    Compiling quote v1.0.40
2025-09-07T19:46:39.4929764Z    Compiling heck v0.5.0
2025-09-07T19:46:39.5910570Z    Compiling syn v2.0.106
2025-09-07T19:46:39.6735435Z    Compiling regex-syntax v0.8.5
2025-09-07T19:46:39.6976123Z    Compiling bumpalo v3.19.0
2025-09-07T19:46:40.1996153Z    Compiling grep-matcher v0.1.7
2025-09-07T19:46:40.3301015Z    Compiling encoding_rs v0.8.35
2025-09-07T19:46:41.8481753Z    Compiling regex-automata v0.4.9
2025-09-07T19:46:42.3108340Z    Compiling serde_json v1.0.143
2025-09-07T19:46:42.4616576Z    Compiling siphasher v1.0.1
2025-09-07T19:46:42.5989780Z    Compiling object v0.36.7
2025-09-07T19:46:42.8334800Z    Compiling encoding_rs_io v0.1.7
2025-09-07T19:46:42.9397481Z    Compiling memmap2 v0.9.7
2025-09-07T19:46:43.0269465Z    Compiling num-traits v0.2.19
2025-09-07T19:46:43.0888614Z    Compiling zerocopy v0.8.26
2025-09-07T19:46:43.1952000Z    Compiling rustix v1.0.7
2025-09-07T19:46:43.4153272Z    Compiling adler2 v2.0.1
2025-09-07T19:46:43.4746179Z    Compiling ryu v1.0.20
2025-09-07T19:46:43.4831468Z    Compiling getrandom v0.3.3
2025-09-07T19:46:43.6062718Z    Compiling itoa v1.0.15
2025-09-07T19:46:43.6854996Z    Compiling version_check v0.9.5
2025-09-07T19:46:43.7371519Z    Compiling gimli v0.31.1
2025-09-07T19:46:43.9141353Z    Compiling rustversion v1.0.21
2025-09-07T19:46:44.2273609Z    Compiling ahash v0.8.12
2025-09-07T19:46:44.4363957Z    Compiling miniz_oxide v0.8.9
2025-09-07T19:46:44.5613538Z    Compiling serde_derive v1.0.219
2025-09-07T19:46:44.7476463Z    Compiling bstr v1.12.0
2025-09-07T19:46:46.0223285Z    Compiling addr2line v0.24.2
2025-09-07T19:46:46.3216234Z    Compiling phf_shared v0.13.1
2025-09-07T19:46:46.5311877Z    Compiling owo-colors v4.2.2
2025-09-07T19:46:46.7692554Z    Compiling fastrand v2.3.0
2025-09-07T19:46:46.8698005Z    Compiling rustc-demangle v0.1.25
2025-09-07T19:46:47.2755887Z    Compiling linux-raw-sys v0.9.4
2025-09-07T19:46:47.6989390Z    Compiling bitflags v2.9.1
2025-09-07T19:46:47.7392002Z    Compiling phf_generator v0.13.1
2025-09-07T19:46:48.6428309Z    Compiling bitmask-enum v2.2.5
2025-09-07T19:46:49.0440298Z    Compiling backtrace v0.3.75
2025-09-07T19:46:50.0679382Z    Compiling glob v0.3.3
2025-09-07T19:46:50.0928896Z    Compiling either v1.15.0
2025-09-07T19:46:50.2540087Z    Compiling anstyle v1.0.11
2025-09-07T19:46:50.4772359Z    Compiling smallvec v1.15.1
2025-09-07T19:46:50.5253606Z    Compiling unicode-width v0.2.1
2025-09-07T19:46:50.6590955Z    Compiling iana-time-zone v0.1.63
2025-09-07T19:46:50.7071743Z    Compiling unicode-linebreak v0.1.5
2025-09-07T19:46:50.7974220Z    Compiling is_ci v1.2.0
2025-09-07T19:46:50.8655650Z    Compiling wasm-bindgen-shared v0.2.100
2025-09-07T19:46:50.8714468Z    Compiling thiserror v1.0.69
2025-09-07T19:46:50.8962482Z    Compiling textwrap v0.16.2
2025-09-07T19:46:51.0829939Z    Compiling supports-color v3.0.2
2025-09-07T19:46:51.1487431Z    Compiling chrono v0.4.41
2025-09-07T19:46:51.3340204Z    Compiling backtrace-ext v0.2.1
2025-09-07T19:46:51.3540414Z    Compiling terminal_size v0.4.2
2025-09-07T19:46:51.4403316Z    Compiling phf_macros v0.13.1
2025-09-07T19:46:51.6891752Z    Compiling grep-regex v0.1.13
2025-09-07T19:46:52.1203721Z    Compiling grep-searcher v0.1.14
2025-09-07T19:46:52.3457401Z    Compiling thiserror-impl v1.0.69
2025-09-07T19:46:52.3480855Z    Compiling miette-derive v7.6.0
2025-09-07T19:46:52.6706663Z    Compiling supports-unicode v3.0.0
2025-09-07T19:46:52.8263751Z    Compiling minimal-lexical v0.2.1
2025-09-07T19:46:52.9025620Z    Compiling unicode-width v0.1.14
2025-09-07T19:46:53.0342964Z    Compiling thiserror v2.0.16
2025-09-07T19:46:53.0804297Z    Compiling supports-hyperlinks v3.1.0
2025-09-07T19:46:53.1640791Z    Compiling nom v7.1.3
2025-09-07T19:46:53.3326050Z    Compiling itertools v0.14.0
2025-09-07T19:46:53.6582020Z    Compiling miette v7.6.0
2025-09-07T19:46:53.7259462Z    Compiling phf v0.13.1
2025-09-07T19:46:53.8305740Z    Compiling csskit_source_finder v0.0.0 (/home/runner/work/csskit/csskit/crates/csskit_source_finder)
2025-09-07T19:46:54.2041617Z    Compiling browserslist-data v0.1.4
2025-09-07T19:46:54.8064989Z    Compiling itertools v0.13.0
2025-09-07T19:46:54.8137889Z    Compiling thiserror-impl v2.0.16
2025-09-07T19:46:55.3135023Z    Compiling css_lexer v0.0.1 (/home/runner/work/csskit/csskit/crates/css_lexer)
2025-09-07T19:46:55.3274490Z    Compiling wasm-bindgen-backend v0.2.100
2025-09-07T19:46:55.8731078Z    Compiling css_ast v0.0.0 (/home/runner/work/csskit/csskit/crates/css_ast)
2025-09-07T19:46:56.1837031Z    Compiling browserslist-rs v0.19.0
2025-09-07T19:46:56.9173786Z    Compiling csskit_proc_macro v0.0.0 (/home/runner/work/csskit/csskit/crates/csskit_proc_macro)
2025-09-07T19:46:57.0410090Z    Compiling css_feature_data v0.0.1 (/home/runner/work/csskit/csskit/crates/css_feature_data)
2025-09-07T19:46:57.6125669Z warning: css_ast@0.0.0: Constructring css_node_kind.rs
2025-09-07T19:46:57.6140524Z warning: css_ast@0.0.0: Constructring css_apply_visit_methods.rs
2025-09-07T19:46:57.6141199Z warning: css_ast@0.0.0: Constructring css_apply_properties.rs
2025-09-07T19:46:57.6141748Z warning: css_ast@0.0.0: Built in 495.458642ms
2025-09-07T19:46:57.6142238Z    Compiling wasm-bindgen-macro-support v0.2.100
2025-09-07T19:46:58.3375285Z    Compiling css_parse v0.0.1 (/home/runner/work/csskit/csskit/crates/css_parse)
2025-09-07T19:46:58.3617360Z    Compiling csskit_derives v0.0.1 (/home/runner/work/csskit/csskit/crates/csskit_derives)
2025-09-07T19:46:58.6828584Z    Compiling chromashift v0.0.1 (/home/runner/work/csskit/csskit/crates/chromashift)
2025-09-07T19:46:59.0543547Z    Compiling crossbeam-utils v0.8.21
2025-09-07T19:46:59.2667228Z    Compiling wasm-bindgen v0.2.100
2025-09-07T19:46:59.4165298Z    Compiling wasm-bindgen-macro v0.2.100
2025-09-07T19:46:59.9735357Z    Compiling lock_api v0.4.13
2025-09-07T19:47:00.1297869Z    Compiling tracing-core v0.1.34
2025-09-07T19:47:00.2138840Z    Compiling utf8parse v0.2.2
2025-09-07T19:47:00.2625047Z    Compiling parking_lot_core v0.9.11
2025-09-07T19:47:00.4556857Z    Compiling anstyle-parse v0.2.7
2025-09-07T19:47:01.0388707Z    Compiling strum_macros v0.27.1
2025-09-07T19:47:01.2727541Z    Compiling colorchoice v1.0.4
2025-09-07T19:47:01.3177411Z    Compiling lazy_static v1.5.0
2025-09-07T19:47:01.3566686Z    Compiling httparse v1.10.1
2025-09-07T19:47:01.4460534Z    Compiling anstyle-query v1.1.3
2025-09-07T19:47:01.4926163Z    Compiling is_terminal_polyfill v1.70.1
2025-09-07T19:47:01.5298092Z    Compiling scopeguard v1.2.0
2025-09-07T19:47:01.5726945Z    Compiling bitflags v1.3.2
2025-09-07T19:47:01.6029845Z    Compiling fluent-uri v0.1.4
2025-09-07T19:47:01.8259371Z    Compiling anstream v0.6.19
2025-09-07T19:47:01.9684134Z    Compiling sharded-slab v0.1.7
2025-09-07T19:47:02.3133282Z    Compiling tracing-log v0.2.0
2025-09-07T19:47:02.4796811Z    Compiling tracing-attributes v0.1.30
2025-09-07T19:47:02.5213599Z    Compiling serde_repr v0.1.20
2025-09-07T19:47:03.0833801Z    Compiling thread_local v1.1.9
2025-09-07T19:47:03.2408287Z    Compiling nu-ansi-term v0.50.1
2025-09-07T19:47:03.3166251Z    Compiling strum v0.27.2
2025-09-07T19:47:03.3691519Z    Compiling clap_lex v0.7.5
2025-09-07T19:47:03.5071155Z    Compiling pin-project-lite v0.2.16
2025-09-07T19:47:03.5340250Z    Compiling str_indices v0.4.4
2025-09-07T19:47:03.5445028Z    Compiling strsim v0.11.1
2025-09-07T19:47:03.6511345Z    Compiling hashbrown v0.14.5
2025-09-07T19:47:03.8885069Z    Compiling clap_builder v4.5.46
2025-09-07T19:47:03.9902324Z    Compiling tracing v0.1.41
2025-09-07T19:47:04.1586343Z    Compiling ropey v1.6.1
2025-09-07T19:47:04.2012781Z    Compiling dashmap v6.1.0
2025-09-07T19:47:04.5604271Z    Compiling tracing-subscriber v0.3.20
2025-09-07T19:47:05.1381560Z    Compiling lsp-types v0.97.0
2025-09-07T19:47:06.5106196Z    Compiling js-sys v0.3.77
2025-09-07T19:47:08.0324209Z    Compiling crossbeam-channel v0.5.15
2025-09-07T19:47:09.8911904Z    Compiling clap_derive v4.5.45
2025-09-07T19:47:10.1480922Z    Compiling serde-wasm-bindgen v0.6.5
2025-09-07T19:47:10.5065704Z    Compiling console_error_panic_hook v0.1.7
2025-09-07T19:47:11.9639837Z    Compiling clap v4.5.46
2025-09-07T19:47:22.2330173Z    Compiling csskit_highlight v0.0.0 (/home/runner/work/csskit/csskit/crates/csskit_highlight)
2025-09-07T19:47:22.2331825Z    Compiling csskit_transform v0.0.0 (/home/runner/work/csskit/csskit/crates/csskit_transform)
2025-09-07T19:47:22.3523560Z    Compiling csskit_lsp v0.0.0 (/home/runner/work/csskit/csskit/crates/csskit_lsp)
2025-09-07T19:47:25.1539788Z    Compiling csskit_wasm v0.0.0 (/home/runner/work/csskit/csskit/crates/csskit_wasm)
2025-09-07T19:47:25.1540774Z    Compiling csskit v0.0.1 (/home/runner/work/csskit/csskit/crates/csskit)
2025-09-07T19:47:31.4852341Z     Finished `dev` profile [unoptimized + debuginfo] target(s) in 53.84s
2025-09-07T19:47:31.5097249Z [0m[31m[csskit-acceptance][0m [1m$ ~/work/csskit/csskit/.mise-tasks/csskit-acceptance[0m
2025-09-07T19:47:31.5117141Z Results: 0 passed, 0 failed
2025-09-07T19:47:31.5119610Z [2mFinished in 53.92s[0m
## edgarplasticos3@hotmail.com

country_code,account_type,primary_email_alias,password,first_name,last_name,ppBalance,addBank,ccType,payment_card
US,BUSINESS,bulk-sb-1@business.example.com,J0nhD03!,John,Doe,1001,Y,VISA,PAYPAL
US,BUSINESS,bulk-sb-2@business.example.com,J0nhD03!,John,Doe,1002,N,VISA,DISCOVER
US,BUSINESS,bulk-sb-3@business.example.com,J0nhD03!,John,Doe,1003,Y,AMEX,PAYPAL
US,BUSINESS,bulk-sb-4@business.example.com,J0nhD03!,John,Doe,1004,N,MASTERCARD,PAYPAL
country_code,account_type,primary_email_alias,password,first_name,last_name,ppBalance,addBank,ccType,payment_card
US,BUSINESS,test-business@account.com,R1ckN0v4k,Rick,Novak,1001,Y,VISA,PAYPAL   
GB,PERSONAL,test-personal@account.com,S4r4C0nn0!,Sara,Connor,1002,N,MASTERCARD,DISCOVER
Homepage
DomainsProtocolsNumbersAbout
Example Domains
As described in RFC 2606 and RFC 6761, a number of domains such as example.com and example.org are maintained for documentation purposes. These domains may be used as illustrative examples in documents without prior coordination with us. They are not available for registration or transfer.

We provide a web service on the example domain hosts to provide basic information on the purpose of the domain. These web services are provided as best effort, but are not designed to support production applications. While incidental traffic for incorrectly configured applications is expected, please do not design applications that require the example domains to have operating HTTP service.

Further Reading
IANA-managed Reserved Domains
Last revised 2017-05-13.
Domain Names	
Root Zone Registry.INT Registry.ARPA RegistryIDN Repository
Number Resources	
Abuse Information
Protocols	
Protocol RegistriesTime Zone Database
About Us	
NewsPerformanceExcellenceArchiveContact Us
The IANA functions coordinate the Internet’s globally unique identifiers, and are provided by Public Technical Identifiers, an affiliate of ICANN.

Privacy PolicyTerms of Service
{
  "sys": {
    "links": {
      "jsBaseUrl": "https://www.sandbox.paypal.com/js",
      "cssBaseUrl": "https://www.sandbox.paypal.com/css",
      "templateBaseUrl": "https://www.sandbox.paypal.com/templates",
      "resourceBaseUrl": "https://www.sandbox.paypal.com"
    },
    "pageInfo": {
      "date": "Jan 30, 2026 13:52:42 -08:00",
      "hostName": "rZJvnqaaQhLn/nmWT8cSUjOx898qoYZ0gJ/s7uf3ja3cxVS+f5P7uA",
      "rlogId": "rZJvnqaaQhLn%2FnmWT8cSUmDP%2Bhip7g49eFYVqbGPqtrcf3YgDr9DRBZmxdhAyNCB%2F0y%2Bmbdj4aY_19c10e4e662",
      "script": "node",
      "debug": null
    },
    "locality": {
      "timezone": {
        "determiner": "viaCowPrimary",
        "value": "America/New_York"
      },
      "country": "US",
      "locale": "en_US",
      "language": "en",
      "directionality": "ltr"
    },
    "tracking": {
      "fpti": {
        "name": "pta",
        "jsURL": "https://www.paypalobjects.com",
        "serverURL": "https://t.paypal.com/ts",
        "dataString": "pgrp=loggernodeweb%2F.dust&page=loggernodeweb%2F.dust&pgst=1769809962594&calc=f432649b7cb78&pgtf=Nodejs&env=sandbox&s=ci&csci=7720c93f60c040bbbae3cffa9b76e9be&comp=loggernodeweb&tsrce=cspreportnodeweb&cu=1&gacook=10667333.1768120349&ef_policy=ccpa&c_prefs=T%3D1%2CP%3D1%2CF%3D1%2Ctype%3Dexplicit_banner"
      }
    }
  }
}
<?php

namespace PayPal\Rest;

/**
 * Interface IResource
 *
 * @package PayPal\Rest
 */
interface IResource
{
}
<?php
"use strict";(()=>{var n={arrayFlat:{test:()=>"flat"in Array.prototype},customElements:{test:()=>"customElements"in window},getAttributeNames:{test:()=>"getAttributeNames"in Element.prototype},shadowDOM:{test:()=>"attachShadow"in Element.prototype}};function o(){let e=Object.keys(n).filter(t=>!n[t].test());return e.length>0&&r(e),e.length===0}function r(e){try{let t={events:[{event:"pp.sdk.web.instrumentation.event.unsupported_browser",level:"info",payload:{env:"sandbox",sdkVersion:"6.46.0",t:typeof Date!="undefined"&&new Date().toISOString(),transition_name:"unsupported_browser",unsupportedFeatures:Array,userAgent:typeof navigator!="undefined"&&navigator.userAgent}}],metrics:[{dimensions:{event_name:"unsupported_browser",sdk_version:"6.46.0",unsupportedFeatures:e},metricEventName:"unsupported_browser",metricNamespace:"pp.sdks.web.instrumentation.event.count",metricType:"counter",metricValue:1}],tracking:[]};fetch("https://www.sandbox.paypal.com/xoplatform/logger/api/logger?disableSetCookie=true",{body:JSON.stringify(t),headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"}).catch()}catch(t){}}typeof window!="undefined"&&(window.isBrowserSupportedByPayPal=o);if(typeof window!="undefined"&&window.litNonce===void 0&&window.document.currentScript){let e=window.document.currentScript.nonce||window.document.currentScript.getAttribute("nonce")||void 0;e!==void 0&&(window.litNonce=e)}})();

"use strict";var __paypal_sdk__=__paypal_sdk__||{};__paypal_sdk__.v6=(()=>{var Lo=Object.defineProperty,Il=Object.defineProperties,Sl=Object.getOwnPropertyDescriptor,bl=Object.getOwnPropertyDescriptors,Ol=Object.getOwnPropertyNames,da=Object.getOwnPropertySymbols;var ua=Object.prototype.hasOwnProperty,Pl=Object.prototype.propertyIsEnumerable;var Ea=(t,e,o)=>e in t?Lo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,M=(t,e)=>{for(var o in e||(e={}))ua.call(e,o)&&Ea(t,o,e[o]);if(da)for(var o of da(e))Pl.call(e,o)&&Ea(t,o,e[o]);return t},H=(t,e)=>Il(t,bl(e));var ee=(t,e)=>{for(var o in e)Lo(t,o,{get:e[o],enumerable:!0})},vl=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Ol(e))!ua.call(t,n)&&n!==o&&Lo(t,n,{get:()=>e[n],enumerable:!(r=Sl(e,n))||r.enumerable});return t};var Dl=t=>vl(Lo({},"__esModule",{value:!0}),t);var Q_={};ee(Q_,{createInstance:()=>Rl,setupWindowNamespace:()=>Z_,version:()=>q_});var Xr={};ee(Xr,{BASE_SDK_METRIC_NAMESPACE:()=>Wr,BUTTON_TYPES:()=>Hr,CARD_PAYMENT_FLOWS:()=>zl,COMPONENTS:()=>y,DEFAULT_POPUP_OPTIONS:()=>Wl,ELIGIBLE_PAYMENT_METHODS:()=>De,ENVIRONMENT:()=>Ye,EVENTS:()=>x,FIREBASE_EVENTS:()=>kl,FPTIKeys:()=>u,FPTIStatuses:()=>Fe,FPTI_CONTEXT_TYPE:()=>$t,FPTI_DATA_SOURCE:()=>Vr,FPTI_FEED:()=>Yr,FPTI_SDK_NAME:()=>Gr,FPTI_SPACE_KEY:()=>$r,FPTI_STATE:()=>Gt,FPTI_TRANSITION:()=>V,FPTI_USER_ACTION:()=>Cl,FRAUDNET_FNCLS:()=>Kr,FUNDING_SOURCES:()=>G,FUNDING_SOURCE_TO_PAYMENT_METHOD:()=>Fl,GENERIC_REJECT_ADDRESS_MESSAGE:()=>Jl,GENERIC_REJECT_OPTION_MESSAGE:()=>ec,HEADERS:()=>Vl,INLINE_IFRAME_ANIMATION_SPEED:()=>Jr,LOADING_LABEL_CODE:()=>qr,MERCHANT_AUTH_TYPE:()=>Ve,MESSAGING_EVENTS:()=>Yl,PAGE_TYPES:()=>Qr,PAYMENT_FLOWS:()=>jr,PAYMENT_SESSION_STATES:()=>$l,PAYPAL_BROADCAST_CHANNEL_PREFIX:()=>Gl,PAYPAL_CREDIT_COUNTRY_CODES:()=>zr,PAYPAL_PRESENTATION_MODES:()=>Hl,PAY_LATER_COUNTRY_CODES:()=>Te,PAY_LATER_PRODUCT_CODES:()=>z,QUERY_PARAMETERS:()=>Zr,SDK_INTEGRATION_ARTIFACT:()=>Ul,SDK_META_ATTRIBUTES:()=>Zl,SDK_META_PARAMETERS:()=>ql,SDK_META_PRESENTATION_MODES:()=>Ql,SHIPPING_ADDRESS_ERROR_MESSAGES:()=>Xl,SHIPPING_OPTIONS_ERROR_MESSAGES:()=>tc,VENMO_APP_SWITCH:()=>Bl,VENMO_PRESENTATION_MODES:()=>Kl,VENMO_PRODUCT_FLOWS:()=>jl});var Ll={ACTION:"action",AMOUNT:"amount",AVAILABLE_PAYMENT_NETWORKS:"available_payment_networks",BROWSER:"browser",BUTTON_SESSION_ID:"button_session_id",BUYER_COUNTRY:"buyer_cntry",CHECKOUT_APP_NAME:"checkout_app_name",CHECKOUT_APP_PAGE:"checkout_app_page",CHOSEN_FUNDING:"selected_payment_method",CLIENT_ID:"client_id",CONTEXT_ID:"context_id",CONTEXT_TYPE:"context_type",COUNTRY_CODE:"country_code",CURRENCY:"currency",DATA_SOURCE:"serverside_data_source",DEFAULT_BROWSER:"default_browser",DEVICE_BROWSER:"device_browser",DEVICE_ID:"device_id",ELIGIBLE_PAYMENT_COUNT:"eligible_payment_count",ELIGIBLE_PAYMENT_METHODS:"eligible_payment_methods",ERROR_DESC:"ext_error_desc",EVENT_NAME:"event_name",FEED:"feed_name",HAS_OPENER:"has_opener",IS_CACHED:"is_cached",IS_CUSTOM_BUTTON:"is_custom_button",IS_WEBVIEW:"is_webview",LOCALE:"locale",MAJOR_VERSION:"major_version",MERCHANT_AUTH_TYPE:"merchant_auth_type",MERCHANT_DOMAIN:"merchant_domain",MESSAGE:"message",NAME:"name",NETWORK_CONNECTION_TYPE:"network_connection_type",NETWORK_TYPE:"network_type",ORIGINATING_BROWSER:"originating_browser",ORIGINATING_USER_AGENT:"originating_user_agent",OS:"os",PAGE_LOAD_TIME:"page_load_time",PAGE_TYPE:"pp_placement",PARTNER_ATTRIBUTION_ID:"partner_attribution_id",PAYMENT_FLOW:"payment_flow",PAYMENT_METHOD:"payment_method",PRESENTATION_MODE:"presentation_mode",PRESENTATION_MODE_USED_BY_SDK:"presentation_mode_used_by_sdk",PRODUCT_CODE:"product_code",RECOMMENDED_PAYMENT:"recommended_payment",REFERER:"referer_url",RESOURCE:"resource",RESPONSE_DURATION:"response_duration",RETURN_TYPE:"return_type",SDK_CACHE:"sdk_cache",SDK_INTEGRATION_SOURCE:"sdk_integration_source",SDK_LOAD_TIME:"sdk_load_time",SDK_NAME:"sdk_name",SDK_VERSION:"sdk_version",SELECTED_CARD_TYPE:"selected_card_type",SELECTED_PAYMENT_METHOD:"selected_payment_method",SELLER_ID:"seller_id",SESSION_UID:"page_session_id",SHOPPER_SESSION_ID:"shopper_session_id",SPACE_KEY:"space_key",STATE:"state_name",STATUS:"status",TIMESTAMP:"t",TOKEN:"token",TRANSITION_NAME:"transition_name",TRANSITION_TIME:"transition_time",URL:"url",URL_PATH:"url_path",USER_ACTION:"user_action",USER_AGENT:"user_agent"},Cl={COMMIT:"commit",CONTINUE:"continue"},Vr={PAYMENTS_SDK:"checkout"},Yr={PAYMENTS_SDK:"payments_sdk"},Gr={PAYMENTS_SDK:"payments_sdk"},Gt={BUTTON:"smart_button",CARD:"card_field"},$r="SKS09G",$t={BILLING_TOKEN:"BA-Token",BUTTON_SESSION_ID:"button_session_id",ORDER_CONFIRM_PAYMENT_SOURCE:"order_confirm_payment_source",ORDER_ID:"EC-Token",SUBSCRIPTION_ID:"subscription_id",VAULT_SETUP_TOKEN:"vault_setup_token"},V={APPLEPAY_CONFIG_ERROR:"applepay_config_error",APPLEPAY_MERCHANT_VALIDATION_ERROR:"applepay_merchant_validation_error",APPLEPAY_PAYMENT_ERROR:"applepay_payment_error",BANK_ACH_PAYMENT_FLOW:"bank_ach_payment_flow",BILLING_APPROVE:"process_billing_approve",BILLING_CANCEL:"process_billing_cancel",BILLING_ERROR:"process_billing_error",BRIDGE_CHECKOUT_CONSTRUCTOR:"bridge_checkout_constructor",BUTTON_CLICK:"process_button_click",BUTTON_LOAD:"process_button_load",CARD_FIELDS_LOAD:"card_fields_load",CHECKOUT_APPROVE:"process_checkout_approve",CHECKOUT_CANCEL:"process_checkout_cancel",CHECKOUT_CONFIRM_PAYMENT_SOURCE:"process_confirm_payment_source",CHECKOUT_CREATE_ORDER:"process_receive_order",CHECKOUT_CREATE_SUBSCRIPTION:"process_receive_subscription",CHECKOUT_ERROR:"process_checkout_error",CHECKOUT_OPEN:"process_checkout_open",CHECKOUT_SHIPPING_ADDRESS_CHANGE:"process_checkout_shipping_address_change",CHECKOUT_SHIPPING_OPTIONS_CHANGE:"process_checkout_shipping_options_change",CONFIRM_PAYMENT_SOURCE_FAILED:"confirm_payment_source_failed",CONFIRM_PAYMENT_SOURCE_NO_PAYER_ACTION_URL:"confirm_payment_source_no_payer_action_url",CONFIRM_PAYMENT_SOURCE_PENDING:"confirm_payment_source_pending",CONFIRM_PAYMENT_SOURCE_STATUS_INVALID:"confirm_payment_source_status_invalid",FETCH_VAULT_SETUP_TOKEN_FAILED:"vault_setup_token_fetch_failed",FIREBASE_CONNECTION_ERRORED:"firebase_connection_errored",FIREBASE_CONNECTION_OPENED:"firebase_connection_opened",FIRST_INTERACTION:"first_interaction",FULL_BRIDGE_FLOW:"full_bridge_flow",FULL_PAYMENT_FLOW:"full_payment_flow",FULL_SDK_FLOW:"full_sdk_flow",GOOGLEPAY_CONFIG_ERROR:"googlepay_config_error",GOOGLEPAY_PAYMENT_ERROR:"googlepay_payment_error",INELIGIBLE_PAYMENT_METHOD:"ineligible_payment_method",MENU_CLICK:"process_menu_click",PAYMENT_SESSION_LOAD:"process_payment_session_load",RECEIVE_VAULT_SETUP_TOKEN:"process_receive_vault_setup_token",SDK_BRIDGE_LOAD:"process_sdk_bridge_init_client",SDK_LOAD:"process_js_sdk_init_client",SDK_SESSION_LOAD:"process_js_sdk_session_load",VAULT_SETUP_TOKEN_NO_PAYER_ACTION_URL:"vault_setup_token_no_payer_action_url",VAULT_VAULT_SETUP_TOKEN_STATUS_INVALID:"vault_setup_token_status_invalid",VENMO_APP_SWITCH:"venmo_app_switch",VENMO_APP_SWITCH_COMPLETE:"venmo_app_switch_complete"},xl={SHIPPING_CALLBACK_INVOKED:"shipping_callback_invoked",WINDOW_NAME:"window_name"},wl={BUTTON_COLOR:"button_color",BUTTON_LABEL:"button_label",BUTTON_SHAPE:"button_shape",BUTTON_TYPE:"button_type",BUTTON_WIDTH:"button_width"},Ml={CARD_FIELDS_CORRELATION_ID:"card_fields_correlation_id",CARD_FIELDS_ORDER_ID:"order_id",CARD_FIELDS_PAGE_SESSION_ID:"card_fields_page_session_id",CARD_FIELDS_VERSION:"card_fields_version",LIABILITY_SHIFT:"card_fields_liability_shift",THREEDS_AUTH_STATUS:"3ds_auth_status",VAULT_SETUP_TOKEN:"vault_setup_token"},Fe={CANCELLED:"cancelled",FAILURE:"failure",SUCCESS:"success"},u=Object.assign(Object.assign(Object.assign(Object.assign({},Ll),xl),wl),Ml),Ul="JS_SDK_V6",Wr="pp.sdks.web",Ve={BRAINTREE_CLIENT_TOKEN:"braintreeClientToken",CLIENT_ID_ONLY:"clientIdOnly",PAYPAL_CLIENT_TOKEN:"paypalClientToken",PAYPAL_CLIENT_TOKEN_WITH_AUTH_ASSERTION:"paypalClientTokenWithAuthAssertionHeader",SELF_SIGNED_CLIENT_TOKEN:"selfSignedClientToken"};var Hr={BUYNOW:"buynow",CHECKOUT:"checkout",DONATE:"donate",PAY:"pay",SUBSCRIBE:"subscribe"};var y={AFTERPAY_PAYMENTS:"afterpay-payments",ALFAMART_PAYMENTS:"alfamart-payments",ALIPAY_PAYMENTS:"alipay-payments",APPLEPAY_PAYMENTS:"applepay-payments",BANCOMATPAY_PAYMENTS:"bancomatpay-payments",BANCONTACT_PAYMENTS:"bancontact-payments",BANK_ACH_PAYMENTS:"bank-ach-payments",BIZUM_PAYMENTS:"bizum-payments",BLIKPAYLATER_PAYMENTS:"blikpaylater-payments",BLIK_PAYMENTS:"blik-payments",BOLETOBANCARIO_PAYMENTS:"boletobancario-payments",CARD_FIELDS:"card-fields",DOKU_PAYMENTS:"doku-payments",DRAGONPAY_PAYMENTS:"dragonpay-payments",EPS_PAYMENTS:"eps-payments",ESTONIA_PAYMENTS:"estoniabank-payments",FASTLANE:"fastlane",FLOA_PAYMENTS:"floa-payments",GOOGLE_PAY_PAYMENTS:"googlepay-payments",GOPAY_PAYMENTS:"gopay-payments",GRABPAY_PAYMENTS:"grabpay-payments",IDEAL_PAYMENTS:"ideal-payments",INDOMARET_PAYMENTS:"indomaret-payments",INDONESIABANKS_PAYMENTS:"indonesiabanks-payments",JENIUSPAY_PAYMENTS:"jeniuspay-payments",KLARNA_PAYMENTS:"klarna-payments",KREDIVO_PAYMENTS:"kredivo-payments",LINKAJA_PAYMENTS:"linkaja-payments",MBWAY_PAYMENTS:"mbway-payments",MULTIBANCO_PAYMENTS:"multibanco-payments",MYBANK_PAYMENTS:"mybank-payments",OVO_PAYMENTS:"ovo-payments",OXXO_PAYMENTS:"oxxo-payments",P24_PAYMENTS:"p24-payments",PAYPAL_BILLING_AGREEMENTS:"paypal-billing-agreements",PAYPAL_GUEST_PAYMENTS:"paypal-guest-payments",PAYPAL_LEGACY_BILLING_AGREEMENTS:"paypal-legacy-billing-agreements",PAYPAL_MESSAGES:"paypal-messages",PAYPAL_PAYMENTS:"paypal-payments",PAYPAL_SUBSCRIPTIONS:"paypal-subscriptions",PAYSAFECARD_PAYMENTS:"paysafecard-payments",PAYSERA_PAYMENTS:"paysera-payments",PAYU_PAYMENTS:"payu-payments",PIX_INTERNATIONAL_PAYMENTS:"pix-international-payments",SCALAPAY_PAYMENTS:"scalapay-payments",SEPA_PAYMENTS:"sepa-payments",SHOPPER_INSIGHTS:"shopper-insights",SKRILL_PAYMENTS:"skrill-payments",SWISH_PAYMENTS:"swish-payments",THAILAND_BANKS_PAYMENTS:"thailand-banks-payments",TRUSTLY_PAYMENTS:"trustly-payments",TWINT_PAYMENTS:"twint-payments",VENMO_PAYMENTS:"venmo-payments",VERKKOPANKKI_PAYMENTS:"verkkopankki-payments",WECHATPAY_PAYMENTS:"wechatpay-payments",WERO_PAYMENTS:"wero-payments",ZIP_PAYMENTS:"zip-payments"};var Ye={LOCAL:"development",PRODUCTION:"production",SANDBOX:"sandbox",STAGE:"stage",TEST:"test"};var x={APPROVE:"approve",BEFOREUNLOAD:"beforeunload",CANCEL:"cancel",CLOSE:"close",COMPLETE:"complete",CONTINUE:"continue",ERROR:"error",FREEZE:"freeze",GUEST_CHECKOUT_SUBMIT_ERROR:"guestcheckoutsubmiterror",HASHCHANGE:"hashchange",LAUNCH_3DS:"launchthreedomainsecure",LAUNCH_FALLBACK_PRESENTATION_MODE:"launchfallbackpresentationmode",LOAD:"load",PAGEHIDE:"pagehide",RESIZE:"resize",RESUME:"resume",VISIBILITYCHANGE:"visibilitychange"},kl={ON_APPROVE:"onApprove",ON_CANCEL:"onCancel",ON_ERROR:"onError",ON_FALLBACK:"onFallback",ON_INIT:"onInit",ON_SHIPPING_CHANGE:"onShippingChange"},Bl={INIT:"appSwitchInitialize"};var Kr="fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99";var G={ACH:"ach",ADVANCEDCARDS:"advanced_cards",AFTERPAY:"afterpay",ALFAMART:"alfamart",ALIPAY:"alipay",APPLEPAY:"applepay",BANCOMATPAY:"bancomatpay",BANCONTACT:"bancontact",BIZUM:"bizum",BLIK:"blik",BLIKPAYLATER:"blik_pay_later",BOLETOBANCARIO:"boletobancario",CARD:"card",CREDIT:"credit",DOKU:"doku",DRAGONPAY:"dragonpay",EPS:"eps",ESTONIA_BANKS:"estonia_banks",FLOA:"floa",GIROPAY:"giropay",GOOGLEPAY:"googlepay",GOPAY:"gopay",GRABPAY:"grabpay",IDEAL:"ideal",INDOMARET:"indomaret",INDONESIA_BANKS:"indonesia_banks",ITAU:"itau",JENIUSPAY:"jenius_pay",KLARNA:"klarna",KREDIVO:"kredivo",LINKAJA:"linkaja",MAXIMA:"maxima",MBWAY:"mbway",MERCADOPAGO:"mercadopago",MULTIBANCO:"multibanco",MYBANK:"mybank",OVO:"ovo",OXXO:"oxxo",P24:"p24",PAIDY:"paidy",PAYLATER:"paylater",PAYPAL:"paypal",PAYSAFECARD:"paysafecard",PAYSERA:"paysera",PAYU:"payu",PIX_INTERNATIONAL:"pix_international",SATISPAY:"satispay",SCALAPAY:"scalapay",SEPA:"sepa",SKRILL:"skrill",SOFORT:"sofort",SWISH:"swish",THAILAND_BANKS:"thailand_banks",TRUSTLY:"trustly",TWINT:"twint",VENMO:"venmo",VERKKOPANKKI:"verkkopankki",WECHATPAY:"wechatpay",WERO:"wero",ZIMPLER:"zimpler",ZIP:"zip"},De={ACH:"ach",ADVANCEDCARDS:"advanced_cards",AFTERPAY:"afterpay",ALFAMART:"alfamart",ALIPAY:"alipay",APPLE_PAY:"apple_pay",BANCOMATPAY:"bancomatpay",BANCONTACT:"bancontact",BASIC_CARDS:"basic_cards",BIZUM:"bizum",BLIK:"blik",BLIKPAYLATER:"blik_pay_later",BOLETOBANCARIO:"boletobancario",CREDIT:"paypal_credit",DOKU:"doku",DRAGONPAY:"dragonpay",EPS:"eps",ESTONIA_BANKS:"estonia_banks",FLOA:"floa",GOOGLE_PAY:"google_pay",GOPAY:"gopay",GRABPAY:"grabpay",IDEAL:"ideal",INDOMARET:"indomaret",INDONESIA_BANKS:"indonesia_banks",JENIUSPAY:"jenius_pay",KLARNA:"klarna",KREDIVO:"kredivo",LINKAJA:"linkaja",MBWAY:"mbway",MULTIBANCO:"multibanco",MYBANK:"mybank",OVO:"ovo",OXXO:"oxxo",P24:"p24",PAYLATER:"paypal_pay_later",PAYPAL:"paypal",PAYSAFECARD:"paysafecard",PAYSERA:"paysera",PAYU:"payu",PIX_INTERNATIONAL:"pix_international",SCALAPAY:"scalapay",SEPA:"sepa",SKRILL:"skrill",SWISH:"swish",THAILAND_BANKS:"thailand_banks",TRUSTLY:"trustly",TWINT:"twint",VENMO:"venmo",VERKKOPANKKI:"verkkopankki",WECHATPAY:"wechatpay",WERO:"wero",ZIP:"zip"},Fl={afterpay:"afterpay",alfamart:"alfamart",alipay:"alipay",applepay:"apple_pay",bancomatpay:"bancomatpay",bancontact:"bancontact",bizum:"bizum",blik:"blik",blik_pay_later:"blik_pay_later",boletobancario:"boletobancario",credit:"paypal_credit",doku:"doku",dragonpay:"dragonpay",eps:"eps",estonia_banks:"estonia_banks",floa:"floa",googlepay:"google_pay",gopay:"gopay",grabpay:"grabpay",ideal:"ideal",indomaret:"indomaret",indonesia_banks:"indonesia_banks",jenius_pay:"jenius_pay",klarna:"klarna",kredivo:"kredivo",linkaja:"linkaja",mbway:"mbway",multibanco:"multibanco",mybank:"mybank",ovo:"ovo",oxxo:"oxxo",p24:"p24",paylater:"paypal_pay_later",paypal:"paypal",paysafecard:"paysafecard",paysera:"paysera",payu:"payu",pix_international:"pix_international",scalapay:"scalapay",sepa:"sepa",skrill:"skrill",swish:"swish",thailand_banks:"thailand_banks",trustly:"trustly",twint:"twint",venmo:"venmo",verkkopankki:"verkkopankki",wechatpay:"wechatpay",wero:"wero",zip:"zip"},jr={ONE_TIME_PAYMENT:"ONE_TIME_PAYMENT",RECURRING_PAYMENT:"RECURRING_PAYMENT",VAULT_WITHOUT_PAYMENT:"VAULT_WITHOUT_PAYMENT",VAULT_WITH_PAYMENT:"VAULT_WITH_PAYMENT"},Te={AU:"AU",DE:"DE",ES:"ES",FR:"FR",GB:"GB",IT:"IT",US:"US"},z={PAYLATER:"PAYLATER",PAY_LATER_SHORT_TERM:"PAY_LATER_SHORT_TERM"},zr={GB:"GB",US:"US"};var Vl={APP_NAME:"x-app-name",AUTHORIZATION:"Authorization",CLIENT_CONTEXT:"paypal-client-context",REQUESTED_BY:"x-requested-by"};var qr={connecting:"paypal.loading.label.connecting"};var Yl={APPROVE:"approve",AUTH:"auth",CANCEL:"cancel",CHECKOUT_APP_DETAILS:"checkoutappdetails",CLOSE:"close",ERROR:"error",FREEZE:"freeze",FREEZE_RESUME:"freezeresume",GUEST_CHECKOUT_SUBMIT_ERROR:"guestcheckoutsubmiterror",LAUNCH_3DS:"launchthreedomainsecure",LAUNCH_3DS_REJECTED:"launchthreedomainsecurerejected",LAUNCH_3DS_RESOLVED:"launchthreedomainsecureresolved",LAUNCH_FALLBACK_PRESENTATION_MODE:"launchfallbackpresentationmode",ON_APPROVE_REJECTED:"onapproverejected",ON_APPROVE_RESOLVED:"onapproveresolved",ON_CONTINGENCY_RESULT:"oncontingencyresult",PING:"ping",PONG:"pong",RESIZE:"resize",SHIPPING_ADDRESS_CHANGE:"shippingaddresschange",SHIPPING_CHANGE_REJECTED:"shippingchangerejected",SHIPPING_CHANGE_RESOLVED:"shippingchangeresolved",SHIPPING_OPTIONS_CHANGE:"shippingoptionschange"},Gl="paypal-payment-request-";var Zr={ACTION:"action",BA_TOKEN:"ba_token",BRANDED:"branded",BUTTON_SESSION_ID:"buttonSessionID",BUYER_COUNTRY:"buyerCountry",CART_ID:"cart_id",CLIENT_ID:"clientID",CLIENT_METADATA_ID:"clientMetadataId",COMMIT:"commit",DEBUG:"debug",ENV:"env",FLOW:"flow",FUNDING_SOURCE:"fundingSource",HAS_SHIPPING_CALLBACK:"hasShippingCallback",INTEGRATION_ARTIFACT:"integration_artifact",INTEGRATION_TYPE:"integrationType",IS_SDK_ONE_TIME_PAYMENT_FLOW:"isSDKOneTimePaymentFlow",LOCALE_X:"locale.x",LOWERCASE_CLIENT_ID:"clientId",ORDER_ID:"orderId",ORIGIN:"origin",PAGE_SESSION_ID:"page-session-id",PAYMENT_FLOW:"payment-flow",SDK_META:"sdkMeta",SDK_VERSION:"sdkVersion",SESSION_ID:"sessionId",SETUP_TOKEN:"setup_token",STATE:"state",TOKEN:"token",USER_TYPE:"userType",VERSION:"version",XCOMPONENT:"xcomponent"},Qr={CART:"cart",CHECKOUT:"checkout",HOME:"home",MINI_CART:"mini-cart",PRODUCT:"product",PRODUCT_DETAILS:"product-details",PRODUCT_LISTING:"product-listing",SEARCH_RESULTS:"search-results"};var $l={APPROVED:"approved",CANCELED:"canceled",ERROR:"error"};var Wl={HEIGHT:750,WIDTH:568};var Hl={AUTO:"auto",DIRECT_APP_SWITCH:"direct-app-switch",INLINE:"inline",MODAL:"modal",PAYMENT_HANDLER:"payment-handler",POPUP:"popup",REDIRECT:"redirect"},Kl={AUTO:"auto",MODAL:"modal",POPUP:"popup"},Jr=200;var jl={APP_SWITCH:"app-switch",FALLBACK:"fallback",QR_CODE:"qr-code",WEB:"web"},zl={ONE_TIME_PAYMENT:"one-time-payment",RECURRING_PAYMENT:"recurring-payment",SAVE_PAYMENT:"save-payment"};var ql={ATTRIBUTES:"attrs",URL:"url"},Zl={DATA_UID:"data-uid"},Ql={MODAL:"modal",PAYMENT_HANDLER:"payment-handler",POPUP:"popup"};var Jl="Unable to update address. Please try again.",Xl={ADDRESS_ERROR:"Your order can't be shipped to this address.",COUNTRY_ERROR:"Your order can't be shipped to this country.",STATE_ERROR:"Your order can't be shipped to this state.",ZIP_ERROR:"Your order can't be shipped to this zip."},ec="Unable to update shipping option. Please try again.",tc={METHOD_UNAVAILABLE:"The shipping method you chose is unavailable. To continue, choose another way to get your order.",STORE_UNAVAILABLE:"Part of your order isn't available at this store."};var nn={};ee(nn,{Instrumentation:()=>ge,SDKButtonObserver:()=>Wt,instrumentation:()=>Re,productEventsInstrumentation:()=>ye,scriptsInstrumentation:()=>q,sdkButtonObserver:()=>W});var en=class extends Error{constructor({code:e,name:o,message:r,isRecoverable:n=!1}){super(r),this.name=o,this.code=e,this.isRecoverable=n}};function m({code:t,message:e},{isRecoverable:o=!1,messageDetail:r=""}={}){let n="";if(t.startsWith("ERR_DEV"))n="DevError";else if(t.startsWith("ERR_INIT"))n="SdkInitError";else if(t.startsWith("ERR_FLOW"))n="PaymentFlowError";else if(t.startsWith("ERR_MESSAGES"))n="PayPalMessagesError";else throw m(oc,{messageDetail:t});return new en({code:t,isRecoverable:o,message:e+r,name:n})}var ma={code:"ERR_DEV_BASIC_CARD_BUTTON_CONTAINER",message:"<paypal-basic-card-button> must be a direct child of <paypal-basic-card-container>"};var fa={code:"ERR_DEV_FAILED_TO_SEND_LOGS",message:"failed to send logs: "};var ha={co

/*
 * This file is part of Twig.
 *
 * (c) Fabien Potencier
 * (c) Armin Ronacher
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Twig\Node;

use Twig\Compiler;
use Twig\Node\Expression\AbstractExpression;
use Twig\Node\Expression\ConstantExpression;
use Twig\Source;

/**
 * Represents a module node.
 *
 * Consider this class as being final. If you need to customize the behavior of
 * the generated class, consider adding nodes to the following nodes: display_start,
 * display_end, constructor_start, constructor_end, and class_end.
 *
 * @author Fabien Potencier <fabien@symfony.com>
 *
 * @final since Twig 2.4.0
 */
class ModuleNode extends Node
{
    public function __construct(Node $body, ?AbstractExpression $parent, Node $blocks, Node $macros, Node $traits, $embeddedTemplates, Source $source)
    {
        if (__CLASS__ !== static::class) {
            @trigger_error('Overriding '.__CLASS__.' is deprecated since Twig 2.4.0 and the class will be final in 3.0.', \E_USER_DEPRECATED);
        }

        $nodes = [
            'body' => $body,
            'blocks' => $blocks,
            'macros' => $macros,
            'traits' => $traits,
            'display_start' => new Node(),
            'display_end' => new Node(),
            'constructor_start' => new Node(),
            'constructor_end' => new Node(),
            'class_end' => new Node(),
        ];
        if (null !== $parent) {
            $nodes['parent'] = $parent;
        }

        // embedded templates are set as attributes so that they are only visited once by the visitors
        parent::__construct($nodes, [
            'index' => null,
            'embedded_templates' => $embeddedTemplates,
        ], 1);

        // populate the template name of all node children
        $this->setSourceContext($source);
    }

    public function setIndex($index)
    {
        $this->setAttribute('index', $index);
    }

    public function compile(Compiler $compiler)
    {
        $this->compileTemplate($compiler);

        foreach ($this->getAttribute('embedded_templates') as $template) {
            $compiler->subcompile($template);
        }
    }

    protected function compileTemplate(Compiler $compiler)
    {
        if (!$this->getAttribute('index')) {
            $compiler->write('<?php');
        }

        $this->compileClassHeader($compiler);

        $this->compileConstructor($compiler);

        $this->compileGetParent($compiler);

        $this->compileDisplay($compiler);

        $compiler->subcompile($this->getNode('blocks'));

        $this->compileMacros($compiler);

        $this->compileGetTemplateName($compiler);

        $this->compileIsTraitable($compiler);

        $this->compileDebugInfo($compiler);

        $this->compileGetSourceContext($compiler);

        $this->compileClassFooter($compiler);
    }

    protected function compileGetParent(Compiler $compiler)
    {
        if (!$this->hasNode('parent')) {
            return;
        }
        $parent = $this->getNode('parent');

        $compiler
            ->write("protected function doGetParent(array \$context)\n", "{\n")
            ->indent()
            ->addDebugInfo($parent)
            ->write('return ')
        ;

        if ($parent instanceof ConstantExpression) {
            $compiler->subcompile($parent);
        } else {
            $compiler
                ->raw('$this->loadTemplate(')
                ->subcompile($parent)
                ->raw(', ')
                ->repr($this->getSourceContext()->getName())
                ->raw(', ')
                ->repr($parent->getTemplateLine())
                ->raw(')')
            ;
        }

        $compiler
            ->raw(";\n")
            ->outdent()
            ->write("}\n\n")
        ;
    }

    protected function compileClassHeader(Compiler $compiler)
    {
        $compiler
            ->write("\n\n")
        ;
        if (!$this->getAttribute('index')) {
            $compiler
                ->write("use Twig\Environment;\n")
                ->write("use Twig\Error\LoaderError;\n")
                ->write("use Twig\Error\RuntimeError;\n")
                ->write("use Twig\Extension\SandboxExtension;\n")
                ->write("use Twig\Markup;\n")
                ->write("use Twig\Sandbox\SecurityError;\n")
                ->write("use Twig\Sandbox\SecurityNotAllowedTagError;\n")
                ->write("use Twig\Sandbox\SecurityNotAllowedFilterError;\n")
                ->write("use Twig\Sandbox\SecurityNotAllowedFunctionError;\n")
                ->write("use Twig\Source;\n")
                ->write("use Twig\Template;\n\n")
            ;
        }
        $compiler
            // if the template name contains */, add a blank to avoid a PHP parse error
            ->write('/* '.str_replace('*/', '* /', $this->getSourceContext()->getName())." */\n")
            ->write('class '.$compiler->getEnvironment()->getTemplateClass($this->getSourceContext()->getName(), $this->getAttribute('index')))
            ->raw(sprintf(" extends %s\n", $compiler->getEnvironment()->getBaseTemplateClass(false)))
            ->write("{\n")
            ->indent()
            ->write("private \$source;\n")
            ->write("private \$macros = [];\n\n")
        ;
    }

    protected function compileConstructor(Compiler $compiler)
    {
        $compiler
            ->write("public function __construct(Environment \$env)\n", "{\n")
            ->indent()
            ->subcompile($this->getNode('constructor_start'))
            ->write("parent::__construct(\$env);\n\n")
            ->write("\$this->source = \$this->getSourceContext();\n\n")
        ;

        // parent
        if (!$this->hasNode('parent')) {
            $compiler->write("\$this->parent = false;\n\n");
        }

        $countTraits = \count($this->getNode('traits'));
        if ($countTraits) {
            // traits
            foreach ($this->getNode('traits') as $i => $trait) {
                $node = $trait->getNode('template');

                $compiler
                    ->addDebugInfo($node)
                    ->write(sprintf('$_trait_%s = $this->loadTemplate(', $i))
                    ->subcompile($node)
                    ->raw(', ')
                    ->repr($node->getTemplateName())
                    ->raw(', ')
                    ->repr($node->getTemplateLine())
                    ->raw(");\n")
                    ->write(sprintf("if (!\$_trait_%s->isTraitable()) {\n", $i))
                    ->indent()
                    ->write("throw new RuntimeError('Template \"'.")
                    ->subcompile($trait->getNode('template'))
                    ->raw(".'\" cannot be used as a trait.', ")
                    ->repr($node->getTemplateLine())
                    ->raw(", \$this->source);\n")
                    ->outdent()
                    ->write("}\n")
                    ->write(sprintf("\$_trait_%s_blocks = \$_trait_%s->getBlocks();\n\n", $i, $i))
                ;

                foreach ($trait->getNode('targets') as $key => $value) {
                    $compiler
                        ->write(sprintf('if (!isset($_trait_%s_blocks[', $i))
                        ->string($key)
                        ->raw("])) {\n")
                        ->indent()
                        ->write("throw new RuntimeError('Block ")
                        ->string($key)
                        ->raw(' is not defined in trait ')
                        ->subcompile($trait->getNode('template'))
                        ->raw(".', ")
                        ->repr($node->getTemplateLine())
                        ->raw(", \$this->source);\n")
                        ->outdent()
                        ->write("}\n\n")

                        ->write(sprintf('$_trait_%s_blocks[', $i))
                        ->subcompile($value)
                        ->raw(sprintf('] = $_trait_%s_blocks[', $i))
                        ->string($key)
                        ->raw(sprintf(']; unset($_trait_%s_blocks[', $i))
                        ->string($key)
                        ->raw("]);\n\n")
                    ;
                }
            }

            if ($countTraits > 1) {
                $compiler
                    ->write("\$this->traits = array_merge(\n")
                    ->indent()
                ;

                for ($i = 0; $i < $countTraits; ++$i) {
                    $compiler
                        ->write(sprintf('$_trait_%s_blocks'.($i == $countTraits - 1 ? '' : ',')."\n", $i))
                    ;
                }

                $compiler
                    ->outdent()
                    ->write(");\n\n")
                ;
            } else {
                $compiler
                    ->write("\$this->traits = \$_trait_0_blocks;\n\n")
                ;
            }

            $compiler
                ->write("\$this->blocks = array_merge(\n")
                ->indent()
                ->write("\$this->traits,\n")
                ->write("[\n")
            ;
        } else {
            $compiler
                ->write("\$this->blocks = [\n")
            ;
        }

        // blocks
        $compiler
            ->indent()
        ;

        foreach ($this->getNode('blocks') as $name => $node) {
            $compiler
                ->write(sprintf("'%s' => [\$this, 'block_%s'],\n", $name, $name))
            ;
        }

        if ($countTraits) {
            $compiler
                ->outdent()
                ->write("]\n")
                ->outdent()
                ->write(");\n")
            ;
        } else {
            $compiler
                ->outdent()
                ->write("];\n")
            ;
        }

        $compiler
            ->subcompile($this->getNode('constructor_end'))
            ->outdent()
            ->write("}\n\n")
        ;
    }

    protected function compileDisplay(Compiler $compiler)
    {
        $compiler
            ->write("protected function doDisplay(array \$context, array \$blocks = [])\n", "{\n")
            ->indent()
            ->write("\$macros = \$this->macros;\n")
            ->subcompile($this->getNode('display_start'))
            ->subcompile($this->getNode('body'))
        ;

        if ($this->hasNode('parent')) {
            $parent = $this->getNode('parent');

            $compiler->addDebugInfo($parent);
            if ($parent instanceof ConstantExpression) {
                $compiler
                    ->write('$this->parent = $this->loadTemplate(')
                    ->subcompile($parent)
                    ->raw(', ')
                    ->repr($this->getSourceContext()->getName())
                    ->raw(', ')
                    ->repr($parent->getTemplateLine())
                    ->raw(");\n")
                ;
                $compiler->write('$this->parent');
            } else {
                $compiler->write('$this->getParent($context)');
            }
            $compiler->raw("->display(\$context, array_merge(\$this->blocks, \$blocks));\n");
        }

        $compiler
            ->subcompile($this->getNode('display_end'))
            ->outdent()
            ->write("}\n\n")
        ;
    }

    protected function compileClassFooter(Compiler $compiler)
    {
        $compiler
            ->subcompile($this->getNode('class_end'))
            ->outdent()
            ->write("}\n")
        ;
    }

    protected function compileMacros(Compiler $compiler)
    {
        $compiler->subcompile($this->getNode('macros'));
    }

    protected function compileGetTemplateName(Compiler $compiler)
    {
        $compiler
            ->write("public function getTemplateName()\n", "{\n")
            ->indent()
            ->write('return ')
            ->repr($this->getSourceContext()->getName())
            ->raw(";\n")
            ->outdent()
            ->write("}\n\n")
        ;
    }

    protected function compileIsTraitable(Compiler $compiler)
    {
        // A template can be used as a trait if:
        //   * it has no parent
        //   * it has no macros
        //   * it has no body
        //
        // Put another way, a template can be used as a trait if it
        // only contains blocks and use statements.
        $traitable = !$this->hasNode('parent') && 0 === \count($this->getNode('macros'));
        if ($traitable) {
            if ($this->getNode('body') instanceof BodyNode) {
                $nodes = $this->getNode('body')->getNode(0);
            } else {
                $nodes = $this->getNode('body');
            }

            if (!\count($nodes)) {
                $nodes = new Node([$nodes]);
            }

            foreach ($nodes as $node) {
                if (!\count($node)) {
                    continue;
                }

                if ($node instanceof TextNode && ctype_space($node->getAttribute('data'))) {
                    continue;
                }

                if ($node instanceof BlockReferenceNode) {
                    continue;
                }

                $traitable = false;
                break;
            }
        }

        if ($traitable) {
            return;
        }

        $compiler
            ->write("public function isTraitable()\n", "{\n")
            ->indent()
            ->write(sprintf("return %s;\n", $traitable ? 'true' : 'false'))
            ->outdent()
            ->write("}\n\n")
        ;
    }

    protected function compileDebugInfo(Compiler $compiler)
    {
        $compiler
            ->write("public function getDebugInfo()\n", "{\n")
            ->indent()
            ->write(sprintf("return %s;\n", str_replace("\n", '', var_export(array_reverse($compiler->getDebugInfo(), true), true))))
            ->outdent()
            ->write("}\n\n")
        ;
    }

    protected function compileGetSourceContext(Compiler $compiler)
    {
        $compiler
            ->write("public function getSourceContext()\n", "{\n")
            ->indent()
            ->write('return new Source(')
            ->string($compiler->getEnvironment()->isDebug() ? $this->getSourceContext()->getCode() : '')
            ->raw(', ')
            ->string($this->getSourceContext()->getName())
            ->raw(', ')
            ->string($this->getSourceContext()->getPath())
            ->raw(");\n")
            ->outdent()
            ->write("}\n")
        ;
    }

    protected function compileLoadTemplate(Compiler $compiler, $node, $var)
    {
        if ($node instanceof ConstantExpression) {
            $compiler
                ->write(sprintf('%s = $this->loadTemplate(', $var))
                ->subcompile($node)
                ->raw(', ')
                ->repr($node->getTemplateName())
                ->raw(', ')
                ->repr($node->getTemplateLine())
                ->raw(");\n")
            ;
        } else {
            throw new \LogicException('Trait templates can only be constant nodes.');
        }
    }
}

class_alias('Twig\Node\ModuleNode', 'Twig_Node_Module');
WalletCore

WalletCore/wallet.core.jni/Cardano/outputMinAdaAmount
outputMinAdaAmount
open fun outputMinAdaAmount(toAddress: String, tokenBundle: Array<Byte>, coinsPerUtxoByte: String): String
Calculates the minimum ADA amount needed for an output.

Return
the minimum ADA amount (Base-10 decimal string).

See also
reference
https://docs.cardano.org/native-tokens/minimum-ada-value-requirement

Parameters
toAddress
valid destination address, as string.

tokenBundle
serialized data of TW.Cardano.Proto.TokenBundle.

coinsPerUtxoByte
cost per one byte of a serialized UTXO (Base-10 decimal string).

© 2023 CopyrightGenerated by dokka
<?php

namespace GuzzleHttp\Psr7;

final class Rfc7230
{
    /**
     * Header related regular expressions (copied from amphp/http package)
     * (Note: once we require PHP 7.x we could just depend on the upstream package)
     *
     * Note: header delimiter (\r\n) is modified to \r?\n to accept line feed only delimiters for BC reasons.
     *
     * @link    https://github.com/amphp/http/blob/v1.0.1/src/Rfc7230.php#L12-L15
     * @license https://github.com/amphp/http/blob/v1.0.1/LICENSE
     */
    const HEADER_REGEX = "(^([^()<>@,;:\\\"/[\]?={}\x01-\x20\x7F]++):[ \t]*+((?:[ \t]*+[\x21-\x7E\x80-\xFF]++)*+)[ \t]*+\r?\n)m";
    const HEADER_FOLD_REGEX = "(\r?\n[ \t]++)";
}
"RFC 7636
Proposed Standard


Internet Engineering Task Force (IETF)                  N. Sakimura, Ed.
Request for Comments: 7636                     Nomura Research Institute
Category: Standards Track                                     J. Bradley
ISSN: 2070-1721                                            Ping Identity
                                                              N. Agarwal
                                                                  Google
                                                          September 2015


          Proof Key for Code Exchange by OAuth Public Clients

Abstract

   OAuth 2.0 public clients utilizing the Authorization Code Grant are
   susceptible to the authorization code interception attack.  This
   specification describes the attack as well as a technique to mitigate
   against the threat through the use of Proof Key for Code Exchange
   (PKCE, pronounced "pixy").

Status of This Memo

   This is an Internet Standards Track document.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Further information on
   Internet Standards is available in Section 2 of RFC 5741.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   http://www.rfc-editor.org/info/rfc7636.

Copyright Notice

   Copyright (c) 2015 IETF Trust and the persons identified as the
   document authors.  All rights reserved.

   This document is subject to BCP 78 and the IETF Trust's Legal
   Provisions Relating to IETF Documents
   (http://trustee.ietf.org/license-info) in effect on the date of
   publication of this document.  Please review these documents
   carefully, as they describe your rights and restrictions with respect
   to this document.  Code Components extracted from this document must
   include Simplified BSD License text as described in Section 4.e of
   the Trust Legal Provisions and are provided without warranty as
   described in the Simplified BSD License.




Sakimura, et al.             Standards Track                    [Page 1]

RFC 7636                       OAUTH PKCE                 September 2015


Table of Contents

   1. Introduction ....................................................3
      1.1. Protocol Flow ..............................................5
   2. Notational Conventions ..........................................6
   3. Terminology .....................................................7
      3.1. Abbreviations ..............................................7
   4. Protocol ........................................................8
      4.1. Client Creates a Code Verifier .............................8
      4.2. Client Creates the Code Challenge ..........................8
      4.3. Client Sends the Code Challenge with the
           Authorization Request ......................................9
      4.4. Server Returns the Code ....................................9
           4.4.1. Error Response ......................................9
      4.5. Client Sends the Authorization Code and the Code
           Verifier to the Token Endpoint ............................10
      4.6. Server Verifies code_verifier before Returning the
           Tokens ....................................................10
   5. Compatibility ..................................................11
   6. IANA Considerations ............................................11
      6.1. OAuth Parameters Registry .................................11
      6.2. PKCE Code Challenge Method Registry .......................11
           6.2.1. Registration Template ..............................12
           6.2.2. Initial Registry Contents ..........................13
   7. Security Considerations ........................................13
      7.1. Entropy of the code_verifier ..............................13
      7.2. Protection against Eavesdroppers ..........................13
      7.3. Salting the code_challenge ................................14
      7.4. OAuth Security Considerations .............................14
      7.5. TLS Security Considerations ...............................15
   8. References .....................................................15
      8.1. Normative References ......................................15
      8.2. Informative References ....................................16
   Appendix A.  Notes on Implementing Base64url Encoding without
                Padding  .............................................17
   Appendix B.  Example for the S256 code_challenge_method ...........17
   Acknowledgements ..................................................19
   Authors' Addresses ................................................20













Sakimura, et al.             Standards Track                    [Page 2]

RFC 7636                       OAUTH PKCE                 September 2015


1.  Introduction

   OAuth 2.0 [RFC6749] public clients are susceptible to the
   authorization code interception attack.

   In this attack, the attacker intercepts the authorization code
   returned from the authorization endpoint within a communication path
   not protected by Transport Layer Security (TLS), such as inter-
   application communication within the client's operating system.

   Once the attacker has gained access to the authorization code, it can
   use it to obtain the access token.

   Figure 1 shows the attack graphically.  In step (1), the native
   application running on the end device, such as a smartphone, issues
   an OAuth 2.0 Authorization Request via the browser/operating system.
   The Redirection Endpoint URI in this case typically uses a custom URI
   scheme.  Step (1) happens through a secure API that cannot be
   intercepted, though it may potentially be observed in advanced attack
   scenarios.  The request then gets forwarded to the OAuth 2.0
   authorization server in step (2).  Because OAuth requires the use of
   TLS, this communication is protected by TLS and cannot be
   intercepted.  The authorization server returns the authorization code
   in step (3).  In step (4), the Authorization Code is returned to the
   requester via the Redirection Endpoint URI that was provided in step
   (1).

   Note that it is possible for a malicious app to register itself as a
   handler for the custom scheme in addition to the legitimate OAuth 2.0
   app.  Once it does so, the malicious app is now able to intercept the
   authorization code in step (4).  This allows the attacker to request
   and obtain an access token in steps (5) and (6), respectively.



















Sakimura, et al.             Standards Track                    [Page 3]

RFC 7636                       OAUTH PKCE                 September 2015


    +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
    | End Device (e.g., Smartphone)  |
    |                                |
    | +-------------+   +----------+ | (6) Access Token  +----------+
    | |Legitimate   |   | Malicious|<--------------------|          |
    | |OAuth 2.0 App|   | App      |-------------------->|          |
    | +-------------+   +----------+ | (5) Authorization |          |
    |        |    ^          ^       |        Grant      |          |
    |        |     \         |       |                   |          |
    |        |      \   (4)  |       |                   |          |
    |    (1) |       \  Authz|       |                   |          |
    |   Authz|        \ Code |       |                   |  Authz   |
    | Request|         \     |       |                   |  Server  |
    |        |          \    |       |                   |          |
    |        |           \   |       |                   |          |
    |        v            \  |       |                   |          |
    | +----------------------------+ |                   |          |
    | |                            | | (3) Authz Code    |          |
    | |     Operating System/      |<--------------------|          |
    | |         Browser            |-------------------->|          |
    | |                            | | (2) Authz Request |          |
    | +----------------------------+ |                   +----------+
    +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+

             Figure 1: Authorization Code Interception Attack

   A number of pre-conditions need to hold for this attack to work:

   1. The attacker manages to register a malicious application on the
      client device and registers a custom URI scheme that is also used
      by another application.  The operating systems must allow a custom
      URI scheme to be registered by multiple applications.

   2. The OAuth 2.0 authorization code grant is used.

   3. The attacker has access to the OAuth 2.0 [RFC6749] "client_id" and
      "client_secret" (if provisioned).  All OAuth 2.0 native app
      client-instances use the same "client_id".  Secrets provisioned in
      client binary applications cannot be considered confidential.

   4. Either one of the following condition is met:

      4a. The attacker (via the installed application) is able to
          observe only the responses from the authorization endpoint.
          When "code_challenge_method" value is "plain", only this
          attack is mitigated.





Sakimura, et al.             Standards Track                    [Page 4]

RFC 7636                       OAUTH PKCE                 September 2015


      4b. A more sophisticated attack scenario allows the attacker to
          observe requests (in addition to responses) to the
          authorization endpoint.  The attacker is, however, not able to
          act as a man in the middle.  This was caused by leaking http
          log information in the OS.  To mitigate this,
          "code_challenge_method" value must be set either to "S256" or
          a value defined by a cryptographically secure
          "code_challenge_method" extension.

   While this is a long list of pre-conditions, the described attack has
   been observed in the wild and has to be considered in OAuth 2.0
   deployments.  While the OAuth 2.0 threat model (Section 4.4.1 of
   [RFC6819]) describes mitigation techniques, they are, unfortunately,
   not applicable since they rely on a per-client instance secret or a
   per-client instance redirect URI.

   To mitigate this attack, this extension utilizes a dynamically
   created cryptographically random key called "code verifier".  A
   unique code verifier is created for every authorization request, and
   its transformed value, called "code challenge", is sent to the
   authorization server to obtain the authorization code.  The
   authorization code obtained is then sent to the token endpoint with
   the "code verifier", and the server compares it with the previously
   received request code so that it can perform the proof of possession
   of the "code verifier" by the client.  This works as the mitigation
   since the attacker would not know this one-time key, since it is sent
   over TLS and cannot be intercepted.

1.1.  Protocol Flow

                                                 +-------------------+
                                                 |   Authz Server    |
       +--------+                                | +---------------+ |
       |        |--(A)- Authorization Request ---->|               | |
       |        |       + t(code_verifier), t_m  | | Authorization | |
       |        |                                | |    Endpoint   | |
       |        |<-(B)---- Authorization Code -----|               | |
       |        |                                | +---------------+ |
       | Client |                                |                   |
       |        |                                | +---------------+ |
       |        |--(C)-- Access Token Request ---->|               | |
       |        |          + code_verifier       | |    Token      | |
       |        |                                | |   Endpoint    | |
       |        |<-(D)------ Access Token ---------|               | |
       +--------+                                | +---------------+ |
                                                 +-------------------+

                     Figure 2: Abstract Protocol Flow



Sakimura, et al.             Standards Track                    [Page 5]

RFC 7636                       OAUTH PKCE                 September 2015


   This specification adds additional parameters to the OAuth 2.0
   Authorization and Access Token Requests, shown in abstract form in
   Figure 2.

   A. The client creates and records a secret named the "code_verifier"
      and derives a transformed version "t(code_verifier)" (referred to
      as the "code_challenge"), which is sent in the OAuth 2.0
      Authorization Request along with the transformation method "t_m".

   B. The Authorization Endpoint responds as usual but records
      "t(code_verifier)" and the transformation method.

   C. The client then sends the authorization code in the Access Token
      Request as usual but includes the "code_verifier" secret generated
      at (A).

   D. The authorization server transforms "code_verifier" and compares
      it to "t(code_verifier)" from (B).  Access is denied if they are
      not equal.

   An attacker who intercepts the authorization code at (B) is unable to
   redeem it for an access token, as they are not in possession of the
   "code_verifier" secret.

2.  Notational Conventions

   The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
   "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and
   "OPTIONAL" in this document are to be interpreted as described in
   "Key words for use in RFCs to Indicate Requirement Levels" [RFC2119].
   If these words are used without being spelled in uppercase, then they
   are to be interpreted with their natural language meanings.

   This specification uses the Augmented Backus-Naur Form (ABNF)
   notation of [RFC5234].

   STRING denotes a sequence of zero or more ASCII [RFC20] characters.

   OCTETS denotes a sequence of zero or more octets.

   ASCII(STRING) denotes the octets of the ASCII [RFC20] representation
   of STRING where STRING is a sequence of zero or more ASCII
   characters.

   BASE64URL-ENCODE(OCTETS) denotes the base64url encoding of OCTETS,
   per Appendix A, producing a STRING.





Sakimura, et al.             Standards Track                    [Page 6]

RFC 7636                       OAUTH PKCE                 September 2015


   BASE64URL-DECODE(STRING) denotes the base64url decoding of STRING,
   per Appendix A, producing a sequence of octets.

   SHA256(OCTETS) denotes a SHA2 256-bit hash [RFC6234] of OCTETS.

3.  Terminology

   In addition to the terms defined in OAuth 2.0 [RFC6749], this
   specification defines the following terms:

   code verifier
      A cryptographically random string that is used to correlate the
      authorization request to the token request.

   code challenge
      A challenge derived from the code verifier that is sent in the
      authorization request, to be verified against later.

   code challenge method
      A method that was used to derive code challenge.

   Base64url Encoding
      Base64 encoding using the URL- and filename-safe character set
      defined in Section 5 of [RFC4648], with all trailing '='
      characters omitted (as permitted by Section 3.2 of [RFC4648]) and
      without the inclusion of any line breaks, whitespace, or other
      additional characters.  (See Appendix A for notes on implementing
      base64url encoding without padding.)

3.1.  Abbreviations

   ABNF   Augmented Backus-Naur Form

   Authz  Authorization

   PKCE   Proof Key for Code Exchange

   MITM   Man-in-the-middle

   MTI    Mandatory To Implement











Sakimura, et al.             Standards Track                    [Page 7]

RFC 7636                       OAUTH PKCE                 September 2015


4.  Protocol

4.1.  Client Creates a Code Verifier

   The client first creates a code verifier, "code_verifier", for each
   OAuth 2.0 [RFC6749] Authorization Request, in the following manner:

   code_verifier = high-entropy cryptographic random STRING using the
   unreserved characters [A-Z] / [a-z] / [0-9] / "-" / "." / "_" / "~"
   from Section 2.3 of [RFC3986], with a minimum length of 43 characters
   and a maximum length of 128 characters.

   ABNF for "code_verifier" is as follows.

   code-verifier = 43*128unreserved
   unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"
   ALPHA = %x41-5A / %x61-7A
   DIGIT = %x30-39

   NOTE: The code verifier SHOULD have enough entropy to make it
   impractical to guess the value.  It is RECOMMENDED that the output of
   a suitable random number generator be used to create a 32-octet
   sequence.  The octet sequence is then base64url-encoded to produce a
   43-octet URL safe string to use as the code verifier.

4.2.  Client Creates the Code Challenge

   The client then creates a code challenge derived from the code
   verifier by using one of the following transformations on the code
   verifier:

   plain
      code_challenge = code_verifier

   S256
      code_challenge = BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))

   If the client is capable of using "S256", it MUST use "S256", as
   "S256" is Mandatory To Implement (MTI) on the server.  Clients are
   permitted to use "plain" only if they cannot support "S256" for some
   technical reason and know via out-of-band configuration that the
   server supports "plain".

   The plain transformation is for compatibility with existing
   deployments and for constrained environments that can't use the S256
   transformation.





Sakimura, et al.             Standards Track                    [Page 8]

RFC 7636                       OAUTH PKCE                 September 2015


   ABNF for "code_challenge" is as follows.

   code-challenge = 43*128unreserved
   unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"
   ALPHA = %x41-5A / %x61-7A
   DIGIT = %x30-39

4.3.  Client Sends the Code Challenge with the Authorization Request

   The client sends the code challenge as part of the OAuth 2.0
   Authorization Request (Section 4.1.1 of [RFC6749]) using the
   following additional parameters:

   code_challenge
      REQUIRED.  Code challenge.

   code_challenge_method
      OPTIONAL, defaults to "plain" if not present in the request.  Code
      verifier transformation method is "S256" or "plain".

4.4.  Server Returns the Code

   When the server issues the authorization code in the authorization
   response, it MUST associate the "code_challenge" and
   "code_challenge_method" values with the authorization code so it can
   be verified later.

   Typically, the "code_challenge" and "code_challenge_method" values
   are stored in encrypted form in the "code" itself but could
   alternatively be stored on the server associated with the code.  The
   server MUST NOT include the "code_challenge" value in client requests
   in a form that other entities can extract.

   The exact method that the server uses to associate the
   "code_challenge" with the issued "code" is out of scope for this
   specification.

4.4.1.  Error Response

   If the server requires Proof Key for Code Exchange (PKCE) by OAuth
   public clients and the client does not send the "code_challenge" in
   the request, the authorization endpoint MUST return the authorization
   error response with the "error" value set to "invalid_request".  The
   "error_description" or the response of "error_uri" SHOULD explain the
   nature of error, e.g., code challenge required.






Sakimura, et al.             Standards Track                    [Page 9]

RFC 7636        
# Creación de prototipos con modelos de IA

Busque y experimente gratis con modelos de IA.

Si desea desarrollar una aplicación de IA generativa, puede utilizar GitHub Models para buscar y experimentar gratis con modelos de inteligencia artificial. Una vez que estés a punto para llevar la aplicación a producción, [opta por el uso de pago](/es/billing/managing-billing-for-your-products/about-billing-for-github-models) para tu empresa.

Los propietarios de la organización pueden integrar sus modelos personalizados preferidos en GitHub Models, mediante claves de API de LLM propias de una organización. Consulta [Uso de tus propias claves de API en modelos de GitHub](/es/github-models/github-models-at-scale/set-up-custom-model-integration-models-byok).

Consulta también [Utilización responsable de los modelos de GitHub](/es/github-models/responsible-use-of-github-models).

## Búsqueda de modelos de IA

Para buscar un modelo de IA:

1. Ve a [github.com/marketplace/models](https://github.com/marketplace/models).
2. Haz clic en **Model: Select a Model** en la parte superior izquierda de la página.
3. Elige un modelo en el menú desplegable.

   Como alternativa, en el menú desplegable, haz clic en **View all models**, haz clic en un modelo en Marketplace y, a continuación, en **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-command-palette" aria-label="command-palette" role="img"><path d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"></path></svg> Playground**.

El modelo se abre en el sitio de prueba del modelo. Los detalles del modelo se muestran en la barra lateral de la derecha. Si no se muestra la barra lateral, expándela haciendo clic en el icono **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-sidebar-expand" aria-label="Show parameters setting" role="img"><path d="m4.177 7.823 2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354Z"></path><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z"></path></svg>** situado a la derecha del sitio de prueba.

> \[!NOTE] El acceso a los modelos de  de OpenAI está actualmente en versión preliminar pública y está sujetos a cambios.

## Experimentos con modelos de IA en el área de juegos

El sitio de prueba del modelo de IA es un recurso gratuito que permite ajustar los parámetros del modelo y enviar indicaciones para ver cómo responde un modelo.

> \[!NOTE]
>
> * El sitio de prueba está en versión preliminar pública y está sujeto a cambios.
> * El volumen del área de juegos es limitado. Consulte la [limitación de volumen](#rate-limits) a continuación.

Para ajustar los parámetros del modelo en el sitio de prueba, selecciona la pestaña **Parameters** en la barra lateral.

Para ver el código que corresponde a los parámetros que haya seleccionado, cambie de la pestaña **Chat** a la pestaña **Código**.

![Captura de pantalla del botón de la pestaña "Code", resaltado con un contorno naranja oscuro, en la parte superior izquierda del sitio de prueba.](/assets/images/help/models/model-playground-code-tab.png)

### Comparación de modelos

Puedes enviar una solicitud a dos modelos al mismo tiempo y comparar las respuestas.

Con un modelo abierto en el sitio de prueba, haz clic en **Compare** y, a continuación, en el menú desplegable, selecciona un modelo para la comparación. El modelo seleccionado se abre en una segunda ventana de chat. Al escribir una pregunta en cualquier ventana de chat, se refleja en la otra. Las solicitudes se envían simultáneamente para poder comparar las respuestas de cada modelo.

Todos los parámetros que establezcas se usan para ambos modelos.

## Evaluación de modelos de IA

Una vez que hayas iniciado las solicitudes de prueba en el área de juegos, puedes evaluar el rendimiento del modelo mediante métricas estructuradas. Las evaluaciones te ayudan a comparar varias configuraciones de indicaciones en distintos modelos y determinar qué configuración funciona mejor.

En la vista Comparaciones, puedes aplicar evaluadores como similitud, relevancia y base para medir el grado de cumplimiento de cada salida. También puedes definir tus propios criterios de evaluación con un evaluador de mensajes personalizado.

Para obtener instrucciones paso a paso, consulta [Evaluación de salidas](/es/github-models/use-github-models/evaluating-ai-models#evaluating-outputs).

## Experimentos con modelos de IA mediante la API

> \[!NOTE]
>
> El uso de API gratuito está en versión preliminar pública y está sujeto a cambios.

GitHub proporciona una utilización gratis de la API para que pueda experimentar con modelos de IA en su propia aplicación.

Los pasos para utilizar cada modelo son similares. En general, son los siguientes:

1. Ve a [github.com/marketplace/models](https://github.com/marketplace/models).

2. Haz clic en **Model: Select a Model** en la parte superior izquierda de la página.

3. Elige un modelo en el menú desplegable.

   Como alternativa, en el menú desplegable, haz clic en **View all models**, haz clic en un modelo en Marketplace y, a continuación, en **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-command-palette" aria-label="command-palette" role="img"><path d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"></path></svg> Playground**.

   El modelo se abre en el sitio de prueba del modelo.

4. Haz clic en la pestaña **Code**.

5. De manera opcional, puede utilizar una lista desplegable para seleccionar el lenguaje de programación.

6. De forma igualmente opcional, utilice la lista desplegable SDK para seleccionar qué SDK se va a usar.

   Todos los modelos se pueden usar con el SDK de inferencia de Azure AI y algunos modelos admiten SDK adicionales. Si quieres cambiar fácilmente entre modelos, debes seleccionar "Azure AI Inference SDK". Si seleccionó "REST" como lenguaje, no utilizará un SDK. En su lugar, usará el punto de conexión de API directamente.  Consulta [API de REST de GitHub Models](/es/rest/models?apiVersion=2022-11-28).

7. Abra un codespace o configure el entorno local:
   * Para ejecutarse en un codespace, haz clic en **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-codespaces" aria-label="codespaces" role="img"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg> Run codespace** y, a continuación, haz clic en **Create new codespace**.
   * Ejecución en modo local:
     * Cree un GitHub personal access token. El token debe tener permisos de `models:read`. Consulta [Administración de tokens de acceso personal](/es/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
     * Guarde el token como una variable de entorno.
     * Instale las dependencias del SDK, si es necesario.

8. Utilice el código de ejemplo para realizar una solicitud al modelo.

La utilización gratis de la API tiene limitación de volumen. Consulte la [limitación de volumen](#rate-limits) a continuación.

## Almacenamiento y uso compartido de los experimentos del área de juegos

Puedes guardar y compartir tu progreso en el área de juegos con valores preestablecidos. Los valores preestablecidos guardan:

* Tu estado actual
* Tus parámetros
* Tu historial de chat (opcional)

Para crear un valor preestablecido para el contexto actual, selecciona **Preset: PRESET-NAME** <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="triangle-down" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg>en la parte superior del sitio de prueba y, a continuación, haz clic en **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-label="plus" role="img"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg> Create new preset**. Debes asignar un nombre al valor preestablecido y también puedes optar por proporcionar una descripción del mismo, incluir el historial de chat y permitir que el valor preestablecido se comparta.

Hay dos maneras de cargar un valor preestablecido:

* Selecciona el menú preestablecido **Preset: PRESET-NAME** <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="triangle-down" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> y, a continuación, haz clic en el valor preestablecido que deseas cargar.
* Apertura de una dirección URL del valor preestablecido compartido

Después de cargar un valor preestablecido, puedes editarlo, compartirlo o eliminarlo:

* Para editar el valor preestablecido, cambia los parámetros y pregunta al modelo. Una vez que estés satisfecho con los cambios, selecciona el menú desplegable **Preset: PRESET-NAME** <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="triangle-down" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> y, a continuación, haz clic en <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="pencil" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg> **Edit preset** y guarda las actualizaciones.
* Para compartir el valor preestablecido, selecciona el menú desplegable **Preset: PRESET-NAME** <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="triangle-down" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> y, a continuación, haz clic en <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-share" aria-label="share" role="img"><path d="M3.75 6.5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25h-1a.75.75 0 0 1 0-1.5h1c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-6.5C2 5.784 2.784 5 3.75 5h1a.75.75 0 0 1 0 1.5ZM7.823.177a.25.25 0 0 1 .354 0l2.896 2.896a.25.25 0 0 1-.177.427H8.75v5.75a.75.75 0 0 1-1.5 0V3.5H5.104a.25.25 0 0 1-.177-.427Z"></path></svg> **Share preset** para obtener una dirección URL que se pueda compartir.
* Para eliminar el valor preestablecido, selecciona el menú desplegable **Preset: PRESET-NAME** <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="triangle-down" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> y, a continuación, haz clic en **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-trash" aria-label="trash" role="img"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg> Delete preset** y confirma la eliminación.

## Uso del editor de solicitudes

El editor de mensajes de GitHub Models está diseñado para ayudarte a iterar, refinar y perfeccionar las solicitudes. Esta vista dedicada proporciona una experiencia centrada e intuitiva para crear y probar entradas, lo que le permite lo siguiente:

* Probar y refinar rápidamente las solicitudes sin la complejidad de las interacciones de varios turnos.
* Ajustar la precisión y la relevancia de las solicitudes en los proyectos.
* Use un espacio especializado para escenarios de un solo turno para garantizar resultados coherentes y optimizados.

Para acceder al editor de solicitudes, haz clic en **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-stack" aria-label="stack" role="img"><path d="M7.122.392a1.75 1.75 0 0 1 1.756 0l5.003 2.902c.83.481.83 1.68 0 2.162L8.878 8.358a1.75 1.75 0 0 1-1.756 0L2.119 5.456a1.251 1.251 0 0 1 0-2.162ZM8.125 1.69a.248.248 0 0 0-.25 0l-4.63 2.685 4.63 2.685a.248.248 0 0 0 .25 0l4.63-2.685ZM1.601 7.789a.75.75 0 0 1 1.025-.273l5.249 3.044a.248.248 0 0 0 .25 0l5.249-3.044a.75.75 0 0 1 .752 1.298l-5.248 3.044a1.75 1.75 0 0 1-1.756 0L1.874 8.814A.75.75 0 0 1 1.6 7.789Zm0 3.5a.75.75 0 0 1 1.025-.273l5.249 3.044a.248.248 0 0 0 .25 0l5.249-3.044a.75.75 0 0 1 .752 1.298l-5.248 3.044a1.75 1.75 0 0 1-1.756 0l-5.248-3.044a.75.75 0 0 1-.273-1.025Z"></path></svg> Prompt editor** en la parte superior derecha del área de juegos.

![Captura de pantalla del botón "Prompt editor", resaltado con un contorno naranja oscuro, en la parte superior derecha del sitio de prueba.](/assets/images/help/models/model-playground-prompt-editor.png)

## Experimentación con modelos de IA en Visual Studio Code

> \[!NOTE] La extensión del kit de herramientas de IA para Visual Studio Code se encuentra en versión preliminar pública y está sujeta a cambios.

Si prefieres experimentar con modelos de IA en el IDE, puedes instalar la extensión del kit de herramientas de IA para Visual Studio Code y, a continuación, probar modelos con parámetros ajustables y contexto.

1. En Visual Studio Code, instala la versión preliminar del [kit de herramientas de AI para Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-windows-ai-studio.windows-ai-studio).

2. Para abrir la extensión, haz clic en el icono del kit de herramientas de IA en la barra de actividades.

3. Autoriza al kit de herramientas de IA a conectarse a tu cuenta de GitHub.

4. En la sección "Mis modelos" del panel Kit de herramientas de IA, haz clic en **Open Model Catalog** y, a continuación, busca un modelo con el que experimentar.
   * Para usar un modelo hospedado de forma remota a través de GitHub Models, en la tarjeta de modelo, haz clic en **Try in playground**.
   * Para descargar y usar un modelo localmente, en la tarjeta de modelo, haz clic en **Download**. Una vez completada la descarga, en la misma tarjeta de modelo, haz clic en **Load in playground**.

5. En la barra lateral, proporciona las instrucciones de contexto y los parámetros de inferencia para el modelo y, a continuación, envía un mensaje.

## Ir a la producción

Los límites de tarifas gratuitas proporcionados en el área de juegos y el uso de la API están diseñados para ayudarte a empezar a experimentar. Cuando estés a punto para ir más allá de la oferta gratuita, tienes dos opciones para acceder a los modelos de IA diferentes de los límites gratuitos:

* Puedes optar por el uso de pago para GitHub Models, lo que permite a tu organización acceder a mayores límites de frecuencia, ventanas de contexto más grandes y características adicionales. Consulta [Facturación de modelos de GitHub](/es/billing/managing-billing-for-your-products/about-billing-for-github-models).
* Si tienes una suscripción de OpenAI o Azure existente, puedes traer tus propias claves de API (BYOK) para acceder a modelos personalizados. La facturación y el uso se administran directamente mediante tu cuenta de proveedor, como el id. de suscripción de Azure. Consulta [Uso de tus propias claves de API en modelos de GitHub](/es/github-models/github-models-at-scale/set-up-custom-model-integration-models-byok).

## Límites de frecuencia

> \[!NOTE] Una vez que optes por el uso de pago, tendrás acceso a los límites de tasa de nivel de producción y se te facturará por todo el uso a partir de entonces. Para más información sobre estos límites de velocidad, consulte [Cuotas y límites de modelos de Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/model-inference/quotas-limits) en la documentación de Azure.

La utilización del área de juegos y el uso gratis de la API llevan una limitación de volumen que se aplica por solicitudes y minuto, solicitudes y día, tokens por solicitud y solicitudes simultáneas. Si obtiene una limitación de volumen, tendrá que esperar a alcanzar dicha limitación de volumen para restablecer el área de juegos o la API antes de poder realizar más solicitudes.

Los modelos de inserción, y los modelos altos o bajos tienen diferentes límites de volumen. Para averiguar qué tipo de modelo está utilizando, consulte la información del modelo en GitHub Marketplace.

Para los modelos personalizados a los que se accede con tus propias claves de API, el proveedor de modelos establece y aplica los límites de velocidad.

<table>
  <tr>
    <th scope="col" style="width:15%"><b>Niveles de la limitación de volumen</b></th>
    <th scope="col" style="width:25%"><b>Límites de frecuencia</b></th>
    <th scope="col" style="width:15%"><b>Copilot Free</b></th>
    <th scope="col" style="width:15%"><b>Copilot Pro</b></th>
    <th scope="col" style="width:15%"><b>Copilot Business</b></th>
    <th scope="col" style="width:15%"><b>Copilot Enterprise</b></th>
  </tr>
  <tr>
    <th rowspan="4" scope="rowgroup"><b>Baja</b></th>
    <th style="padding-left: 0"><b>Solicitudes por minuto</b></th>
    <td>15</td>
    <td>15</td>
    <td>15</td>
    <td>20</td>
  </tr>
  <tr>
    <th><b>Solicitudes por día</b></th>
    <td>150</td>
    <td>150</td>
    <td>300</td>
    <td>450</td>
  </tr>
  <tr>
    <th><b>Tokens por solicitud</b></th>
    <td>8000 entrada, 4000 salida</td>
    <td>8000 entrada, 4000 salida</td>
    <td>8000 entrada, 4000 salida</td>
    <td>8000 entrada, 8000 salida</td>
  </tr>
  <tr>
    <th><b>Solicitudes simultáneas</b></th>
    <td>5</td>
    <td>5</td>
    <td>5</td>
    <td>8</td>
  </tr>
  <tr>
    <th rowspan="4" scope="rowgroup"><b>Alta</b></th>
    <th style="padding-left: 0"><b>Solicitudes por minuto</b></th>
    <td>10</td>
    <td>10</td>
    <td>10</td>
    <td>15</td>
  </tr>
  <tr>
    <th><b>Solicitudes por día</b></th>
    <td>50</td>
    <td>50</td>
    <td>100</td>
    <td>150</td>
  </tr>
  <tr>
    <th><b>Tokens por solicitud</b></th>
    <td>8000 entrada, 4000 salida</td>
    <td>8000 entrada, 4000 salida</td>
    <td>8000 entrada, 4000 salida</td>
    <td>16 000 entrada, 8000 salida</td>
  </tr>
  <tr>
    <th><b>Solicitudes simultáneas</b></th>
    <td>2</td>
    <td>2</td>
    <td>2</td>
    <td>4</td>
  </tr>
  <tr>
    <th rowspan="4" scope="rowgroup"><b>Embedding</b></th>
    <th style="padding-left: 0"><b>Solicitudes por minuto</b></th>
    <td>15</td>
    <td>15</td>
    <td>15</td>
    <td>20</td>
  </tr>
  <tr>
    <th><b>Solicitudes por día</b></th>
    <td>150</td>
    <td>150</td>
    <td>300</td>
    <td>450</td>
  </tr>
  <tr>
    <th><b>Tokens por solicitud</b></th>
    <td>64000</td>
    <td>64000</td>
    <td>64000</td>
    <td>64000</td>
  </tr>
  <tr>
    <th><b>Solicitudes simultáneas</b></th>
    <td>5</td>
    <td>5</td>
    <td>5</td>
    <td>8</td>
  </tr>
  <tr>
    <th rowspan="4" scope="rowgroup"><b>Versión preliminar o1 de Azure OpenAI</b></th>
    <th style="padding-left: 0"><b>Solicitudes por minuto</b></th>
    <td>No aplicable</td>
    <td>1</td>
    <td>2</td>
    <td>2</td>
  </tr>
  <tr>
    <th><b>Solicitudes por día</b></th>
    <td>No aplicable</td>
    <td>8</td>
    <td>10</td>
    <td>12</td>
  </tr>
  <tr>
    <th><b>Tokens por solicitud</b></th>
    <td>No aplicable</td>
    <td>4000 entrada, 4000 salida</td>
    <td>4000 entrada, 4000 salida</td>
    <td>4000 entrada, 8000 salida</td>
  </tr>
  <tr>
    <th><b>Solicitudes simultáneas</b></th>
    <td>No aplicable</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <th rowspan="4" scope="rowgroup"><b>Azure OpenAI o1, o3 y gpt-5</b></th>
    <th style="padding-left: 0"><b>Solicitudes por minuto</b></th>
    <td>No aplicable</td>
    <td>1</td>
    <td>2</td>
    <td>2</td>
  </tr>
  <tr>
    <th><b>Solicitudes por día</b></th>
    <td>No aplicable</td>
    <td>8</td>
    <td>10</td>
    <td>12</td>
  </tr>
  <tr>
    <th><b>Tokens por solicitud</b></th>
    <td>No aplicable</td>
    <td>4000 entrada, 4000 salida</td>
    <td>4000 entrada, 4000 salida</td>
    <td>4000 entrada, 8000 salida</td>
  </tr>
  <tr>
    <th><b>Solicitudes simultáneas</b></th>
    <td>No aplicable</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <th rowspan="4" scope="rowgroup"><b>Azure OpenAI o1-mini, o3-mini, o4-mini, gpt-5-mini, gpt-5-nano y gpt-5-chat</b></th>
    <th style="padding-left: 0"><b>Solicitudes por minuto</b></th>
    <td>No aplicable</td>
    <td>2
          </td>
    <td>3</td>
    <td>3</td>
  </tr>
  <tr>
    <th><b>Solicitudes por día</b></th>
    <td>No aplicable</td>
    <td>12</td>
    <td>15</td>
    <td>20</td>
  </tr>
  <tr>
    <th><b>Tokens por solicitud</b></th>
    <td>No aplicable</td>
    <td>4000 entrada, 4000 salida</td>
    <td>4000 entrada, 4000 salida</td>
    <td>4000 entrada, 4000 salida</td>
  </tr>
  <tr>
    <th><b>Solicitudes simultáneas</b></th>
    <td>No aplicable</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <th rowspan="4" scope="rowgroup"><b>DeepSeek-R1, DeepSeek-R1-0528 y MAI-DS-R1</b></th>
    <th style="padding-left: 0"><b>Solicitudes por minuto</b></th>
    <td>1</td>
    <td>1</td>
    <td>2</td>
    <td>2</td>
  </tr>
  <tr>
    <th><b>Solicitudes por día</b></th>
    <td>8</td>
    <td>8</td>
    <td>10</td>
    <td>12</td>
  </tr>
  <tr>
    <th><b>Tokens por solicitud</b></th>
    <td>4000 entrada, 4000 salida</td>
    <td>4000 entrada, 4000 salida</td>
    <td>4000 entrada, 4000 salida</td>
    <td>4000 entrada, 4000 salida</td>
  </tr>
  <tr>
    <th><b>Solicitudes simultáneas</b></th>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <th rowspan="4" scope="rowgroup"><b>xAI Grok-3</b></th>
    <th style="padding-left: 0"><b>Solicitudes por minuto</b></th>
    <td>1</td>
    <td>1</td>
    <td>2</td>
    <td>2</td>
  </tr>
  <tr>
    <th><b>Solicitudes por día</b></th>
    <td>15</td>
    <td>15</td>
    <td>20</td>
    <td>30</td>
  </tr>
  <tr>
    <th><b>Tokens por solicitud</b></th>
    <td>4000 entrada, 4000 salida</td>
    <td>4000 entrada, 4000 salida</td>
    <td>4000 entrada, 8000 salida</td>
    <td>4000 entrada, 16000 salida</td>
  </tr>
  <tr>
    <th><b>Solicitudes simultáneas</b></th>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <th rowspan="4" scope="rowgroup" style="box-shadow: none"><b>xAI Grok-3-Mini</b></th>
    <th style="padding-left: 0"><b>Solicitudes por minuto</b></th>
    <td>2</td>
    <td>2</td>
    <td>3</td>
    <td>3</td>
  </tr>
  <tr>
    <th><b>Solicitudes por día</b></th>
    <td>30</td>
    <td>30</td>
    <td>40</td>
    <td>50</td>
  </tr>
  <tr>
    <th><b>Tokens por solicitud</b></th>
    <td>4000 entrada, 8000 salida</td>
    <td>4000 entrada, 8000 salida</td>
    <td>4000 entrada, 12000 salida</td>
    <td>4000 entrada, 12000 salida</td>
  </tr>
  <tr>
    <th><b>Solicitudes simultáneas</b></th>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
</table>

Estos límites están sujetos a cambios sin previo aviso.

## Escribir comentarios

Para formular preguntas y compartir comentarios, consulta [esta entrada de debate sobre Modelos de GitHub](https://github.com/orgs/community/discussions/159087).
Para obtener información sobre cómo otros usan GitHub Models, visita los [debates de la comunidad de GitHub para Modelos](https://github.com/orgs/community/discussions/categories/models).


# Change Log


All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [Unreleased]


## [1.5.2] - 2018-12-04

### Fixed

- Check body size when getting the message summary


## [1.5.1] - 2018-12-04

### Fixed

- Get the summary of a body only if it is readable


## [1.5.0] - 2018-12-03

### Added

- Response first-line to response string exception (fixes #145)
- A test for #129 behavior
- `get_message_body_summary` function in order to get the message summary
- `3gp` and `mkv` mime types

### Changed

- Clarify exception message when stream is detached

### Deprecated

- Deprecated parsing folded header lines as per RFC 7230

### Fixed

- Fix `AppendStream::detach` to not close streams
- `InflateStream` preserves `isSeekable` attribute of the underlying stream
- `ServerRequest::getUriFromGlobals` to support URLs in query parameters


Several other fixes and improvements.


## [1.4.2] - 2017-03-20

### Fixed

- Reverted BC break to `Uri::resolve` and `Uri::removeDotSegments` by removing
  calls to `trigger_error` when deprecated methods are invoked.


## [1.4.1] - 2017-02-27

### Added

- Rriggering of silenced deprecation warnings.

### Fixed

- Reverted BC break by reintroducing behavior to automagically fix a URI with a
  relative path and an authority by adding a leading slash to the path. It's only
  deprecated now.


## [1.4.0] - 2017-02-21

### Added

- Added common URI utility methods based on RFC 3986 (see documentation in the readme):
  - `Uri::isDefaultPort`
  - `Uri::isAbsolute`
  - `Uri::isNetworkPathReference`
  - `Uri::isAbsolutePathReference`
  - `Uri::isRelativePathReference`
  - `Uri::isSameDocumentReference`
  - `Uri::composeComponents`
  - `UriNormalizer::normalize`
  - `UriNormalizer::isEquivalent`
  - `UriResolver::relativize`

### Changed

- Ensure `ServerRequest::getUriFromGlobals` returns a URI in absolute form.
- Allow `parse_response` to parse a response without delimiting space and reason.
- Ensure each URI modification results in a valid URI according to PSR-7 discussions.
  Invalid modifications will throw an exception instead of returning a wrong URI or
  doing some magic.
  - `(new Uri)->withPath('foo')->withHost('example.com')` will throw an exception
    because the path of a URI with an authority must start with a slash "/" or be empty
  - `(new Uri())->withScheme('http')` will return `'http://localhost'`

### Deprecated

- `Uri::resolve` in favor of `UriResolver::resolve`
- `Uri::removeDotSegments` in favor of `UriResolver::removeDotSegments`

### Fixed

- `Stream::read` when length parameter <= 0.
- `copy_to_stream` reads bytes in chunks instead of `maxLen` into memory.
- `ServerRequest::getUriFromGlobals` when `Host` header contains port.
- Compatibility of URIs with `file` scheme and empty host.


## [1.3.1] - 2016-06-25

### Fixed

- `Uri::__toString` for network path references, e.g. `//example.org`.
- Missing lowercase normalization for host.
- Handling of URI components in case they are `'0'` in a lot of places,
  e.g. as a user info password.
- `Uri::withAddedHeader` to correctly merge headers with different case.
- Trimming of header values in `Uri::withAddedHeader`. Header values may
  be surrounded by whitespace which should be ignored according to RFC 7230
  Section 3.2.4. This does not apply to header names.
- `Uri::withAddedHeader` with an array of header values.
- `Uri::resolve` when base path has no slash and handling of fragment.
- Handling of encoding in `Uri::with(out)QueryValue` so one can pass the
  key/value both in encoded as well as decoded form to those methods. This is
  consistent with withPath, withQuery etc.
- `ServerRequest::withoutAttribute` when attribute value is null.


## [1.3.0] - 2016-04-13

### Added

- Remaining interfaces needed for full PSR7 compatibility
  (ServerRequestInterface, UploadedFileInterface, etc.).
- Support for stream_for from scalars.

### Changed

- Can now extend Uri.

### Fixed
- A bug in validating request methods by making it more permissive.


## [1.2.3] - 2016-02-18

### Fixed

- Support in `GuzzleHttp\Psr7\CachingStream` for seeking forward on remote
  streams, which can sometimes return fewer bytes than requested with `fread`.
- Handling of gzipped responses with FNAME headers.


## [1.2.2] - 2016-01-22

### Added

- Support for URIs without any authority.
- Support for HTTP 451 'Unavailable For Legal Reasons.'
- Support for using '0' as a filename.
- Support for including non-standard ports in Host headers.


## [1.2.1] - 2015-11-02

### Changes

- Now supporting negative offsets when seeking to SEEK_END.


## [1.2.0] - 2015-08-15

### Changed

- Body as `"0"` is now properly added to a response.
- Now allowing forward seeking in CachingStream.
- Now properly parsing HTTP requests that contain proxy targets in
  `parse_request`.
- functions.php is now conditionally required.
- user-info is no longer dropped when resolving URIs.


## [1.1.0] - 2015-06-24

### Changed

- URIs can now be relative.
- `multipart/form-data` headers are now overridden case-insensitively.
- URI paths no longer encode the following characters because they are allowed
  in URIs: "(", ")", "*", "!", "'"
- A port is no longer added to a URI when the scheme is missing and no port is
  present.


## 1.0.0 - 2015-05-19

Initial release.

Currently unsupported:

- `Psr\Http\Message\ServerRequestInterface`
- `Psr\Http\Message\UploadedFileInterface`



[Unreleased]: https://github.com/guzzle/psr7/compare/1.5.2...HEAD
[1.5.2]: https://github.com/guzzle/psr7/compare/1.5.1...1.5.2
[1.5.1]: https://github.com/guzzle/psr7/compare/1.5.0...1.5.1
[1.5.0]: https://github.com/guzzle/psr7/compare/1.4.2...1.5.0
[1.4.2]: https://github.com/guzzle/psr7/compare/1.4.1...1.4.2
[1.4.1]: https://github.com/guzzle/psr7/compare/1.4.0...1.4.1
[1.4.0]: https://github.com/guzzle/psr7/compare/1.3.1...1.4.0
[1.3.1]: https://github.com/guzzle/psr7/compare/1.3.0...1.3.1
[1.3.0]: https://github.com/guzzle/psr7/compare/1.2.3...1.3.0
[1.2.3]: https://github.com/guzzle/psr7/compare/1.2.2...1.2.3
[1.2.2]: https://github.com/guzzle/psr7/compare/1.2.1...1.2.2
[1.2.1]: https://github.com/guzzle/psr7/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/guzzle/psr7/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/guzzle/psr7/compare/1.0.0...1.1.0
/* MIT License
 *
 * Copyright (c) Massachusetts Institute of Technology
 * Copyright (c) The c-ares project and its contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice (including the next
 * paragraph) shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * SPDX-License-Identifier: MIT
 */

#include "ares_setup.h"

#ifdef HAVE_NETINET_IN_H
#  include <netinet/in.h>
#endif

#include "ares_nameser.h"

#include "ares.h"
#include "ares_dns.h"
#include "ares_private.h"


/* Header format, from RFC 1035:
 *                                  1  1  1  1  1  1
 *    0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5
 *  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 *  |                      ID                       |
 *  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 *  |QR|   Opcode  |AA|TC|RD|RA|   Z    |   RCODE   |
 *  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 *  |                    QDCOUNT                    |
 *  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 *  |                    ANCOUNT                    |
 *  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 *  |                    NSCOUNT                    |
 *  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 *  |                    ARCOUNT                    |
 *  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 *
 * AA, TC, RA, and RCODE are only set in responses.  Brief description
 * of the remaining fields:
 *      ID      Identifier to match responses with queries
 *      QR      Query (0) or response (1)
 *      Opcode  For our purposes, always O_QUERY
 *      RD      Recursion desired
 *      Z       Reserved (zero)
 *      QDCOUNT Number of queries
 *      ANCOUNT Number of answers
 *      NSCOUNT Number of name server records
 *      ARCOUNT Number of additional records
 *
 * Question format, from RFC 1035:
 *                                  1  1  1  1  1  1
 *    0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5
 *  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 *  |                                               |
 *  /                     QNAME                     /
 *  /                                               /
 *  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 *  |                     QTYPE                     |
 *  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 *  |                     QCLASS                    |
 *  +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
 *
 * The query name is encoded as a series of labels, each represented
 * as a one-byte length (maximum 63) followed by the text of the
 * label.  The list is terminated by a label of length zero (which can
 * be thought of as the root domain).
 */

int ares_create_query(const char *name, int dnsclass, int type,
                      unsigned short id, int rd, unsigned char **bufp,
                      int *buflenp, int max_udp_size)
{
  size_t len;
  unsigned char *q;
  const char *p;
  size_t buflen;
  unsigned char *buf;

  /* Set our results early, in case we bail out early with an error. */
  *buflenp = 0;
  *bufp = NULL;

  /* Per RFC 7686, reject queries for ".onion" domain names with NXDOMAIN. */
  if (ares__is_onion_domain(name))
    return ARES_ENOTFOUND;

  /* Allocate a memory area for the maximum size this packet might need. +2
   * is for the length byte and zero termination if no dots or ecscaping is
   * used.
   */
  len = strlen(name) + 2 + HFIXEDSZ + QFIXEDSZ +
    (max_udp_size ? EDNSFIXEDSZ : 0);
  buf = ares_malloc(len);
  if (!buf)
    return ARES_ENOMEM;

  /* Set up the header. */
  q = buf;
  memset(q, 0, HFIXEDSZ);
  DNS_HEADER_SET_QID(q, id);
  DNS_HEADER_SET_OPCODE(q, O_QUERY);
  if (rd) {
    DNS_HEADER_SET_RD(q, 1);
  }
  else {
    DNS_HEADER_SET_RD(q, 0);
  }
  DNS_HEADER_SET_QDCOUNT(q, 1);

  if (max_udp_size) {
      DNS_HEADER_SET_ARCOUNT(q, 1);
  }

  /* A name of "." is a screw case for the loop below, so adjust it. */
  if (strcmp(name, ".") == 0)
    name++;

  /* Start writing out the name after the header. */
  q += HFIXEDSZ;
  while (*name)
    {
      if (*name == '.') {
        ares_free (buf);
        return ARES_EBADNAME;
      }

      /* Count the number of bytes in this label. */
      len = 0;
      for (p = name; *p && *p != '.'; p++)
        {
          if (*p == '\\' && *(p + 1) != 0)
            p++;
          len++;
        }
      if (len > MAXLABEL) {
        ares_free (buf);
        return ARES_EBADNAME;
      }

      /* Encode the length and copy the data. */
      *q++ = (unsigned char)len;
      for (p = name; *p && *p != '.'; p++)
        {
          if (*p == '\\' && *(p + 1) != 0)
            p++;
          *q++ = *p;
        }

      /* Go to the next label and repeat, unless we hit the end. */
      if (!*p)
        break;
      name = p + 1;
    }

  /* Add the zero-length label at the end. */
  *q++ = 0;

  /* Finish off the question with the type and class. */
  DNS_QUESTION_SET_TYPE(q, type);
  DNS_QUESTION_SET_CLASS(q, dnsclass);

  q += QFIXEDSZ;
  if (max_udp_size)
  {
      memset(q, 0, EDNSFIXEDSZ);
      q++;
      DNS_RR_SET_TYPE(q, T_OPT);
      DNS_RR_SET_CLASS(q, max_udp_size);
      q += (EDNSFIXEDSZ-1);
  }
  buflen = (q - buf);

  /* Reject names that are longer than the maximum of 255 bytes that's
   * specified in RFC 1035 ("To simplify implementations, the total length of
   * a domain name (i.e., label octets and label length octets) is restricted
   * to 255 octets or less."). */
  if (buflen > (size_t)(MAXCDNAME + HFIXEDSZ + QFIXEDSZ +
                (max_udp_size ? EDNSFIXEDSZ : 0))) {
    ares_free (buf);
    return ARES_EBADNAME;
  }

  /* we know this fits in an int at this point */
  *buflenp = (int) buflen;
  *bufp = buf;

  return ARES_SUCCESS;
}
https://docs.google.com/spreadsheets/d/1YXfK8bpXNbXUhRtH1hZAaZGdDPyM-ppoKuh6hoLC3Cs/edit?gid=0#gid=0
https://drive.google.com/file/d/15msTKr9GAP-vm0d5C_q6i1cg2fSaac22/view?usp=drivesdk
"> ## Documentation Index
> Fetch the complete documentation index at: https://docs.paypal.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Integrate PayPal Checkout with PayPal's JavaScript SDK v6

This guide demonstrates how to integrate one-time payments using the JavaScript SDK v6 in your web application, including PayPal, Pay Later, and PayPal Credit options.

<Note>Merchants with strict security or compliance requirements can use this integration in a [sandboxed iframe](/developer/how-to/sdk/js/v6/iframe).</Note>

## Integration overview

The PayPal one-time payment integration supports multiple payment methods:

1. [PayPal](https://www.paypal.com/us/home) - Standard PayPal payments
2. [Pay Later](https://www.paypal.com/us/digital-wallet/ways-to-pay/buy-now-pay-later) - Buy now, pay later financing options
3. [PayPal Credit](https://www.paypal.com/us/digital-wallet/ways-to-pay/credit-services/paypal-credit) - Credit-based payment option

The integration consists of four main steps:

1. **Initialize the SDK** with payment components
2. **Check eligibility** for each payment method
3. **Create payment sessions** with callback handlers
4. **Start payment flow** with presentation mode configuration

## Prerequisites

* Complete the steps in [Get started](/developer/how-to/api/get-started) to get your:
  * Personal and business sandbox account credentials
  * PayPal client ID and secret
* Ensure your application has permissions enabled for JavaScript SDK v6
* In your project root folder, create a `.env` file with your PayPal credentials:

```bash  theme={null}
PAYPAL_SANDBOX_CLIENT_ID=your_client_id
PAYPAL_SANDBOX_CLIENT_SECRET=your_client_secret
```

* [Set up the SDK](/developer/how-to/sdk/js/v6/configuration)

## Set up your frontend

This is the **recommended approach** for most implementations. It includes all payment methods with eligibility logic and automatic fallback handling.

### Key components

The following are key components of the integration.

#### PayPal SDK instance

* **Purpose**: Main entry point for PayPal functionality
* **Components**: Includes `paypal-payments` component
* **Authentication**: Requires client token from server

#### Eligibility check

* **Purpose**: Determines available payment methods
* **Factors**: User location, currency, account status, device type
* **Implementation**: Always check before showing payment buttons

#### Payment sessions

* **PayPal**: Standard PayPal payments
* **Pay Later**: Financing options with specific product codes
* **PayPal Credit**: Credit-based payments with country-specific configuration

#### Web components

* `<paypal-button>`: Standard PayPal payment button
* `<paypal-pay-later-button>`: Pay Later financing button
* `<paypal-credit-button>`: PayPal Credit button

### Build an HTML page

```html expandable lines theme={null}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>One-Time Payment - Recommended Integration - PayPal JavaScript SDK</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      .buttons-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    </style>
  </head>
  <body>
    <h1>One-Time Payment Recommended Integration</h1>

    <div class="buttons-container">
      <!-- All buttons are hidden until eligibility is confirmed -->
      <paypal-button type="pay" hidden></paypal-button>
      <paypal-pay-later-button hidden></paypal-pay-later-button>
      <paypal-credit-button hidden></paypal-credit-button>
    </div>
    
    <script src="app.js"></script>

    <!-- Load PayPal SDK -->
    <script
      async
      src="https://www.sandbox.paypal.com/web-sdk/v6/core"
      onload="onPayPalWebSdkLoaded()"
    ></script>
  </body>
</html>
```

### Build the JavaScript

```javascript expandable lines theme={null}
async function onPayPalWebSdkLoaded() {
  try {
    // Get client token for authentication
    const clientToken = await getBrowserSafeClientToken();
    
    // Create PayPal SDK instance
    const sdkInstance = await window.paypal.createInstance({
      clientToken,
      components: ["paypal-payments"],
      pageType: "checkout",
    });

    // Check eligibility for all payment methods
    const paymentMethods = await sdkInstance.findEligibleMethods({
      currencyCode: "USD",
    });

    // Set up PayPal button if eligible
    if (paymentMethods.isEligible("paypal")) {
      setUpPayPalButton(sdkInstance);
    }

    // Set up Pay Later button if eligible
    if (paymentMethods.isEligible("paylater")) {
      const payLaterPaymentMethodDetails = paymentMethods.getDetails("paylater");
      setUpPayLaterButton(sdkInstance, payLaterPaymentMethodDetails);
    }

    // Set up PayPal Credit button if eligible
    if (paymentMethods.isEligible("credit")) {
      const paypalCreditPaymentMethodDetails = paymentMethods.getDetails("credit");
      setUpPayPalCreditButton(sdkInstance, paypalCreditPaymentMethodDetails);
    }
  } catch (error) {
    console.error("SDK initialization error:", error);
  }
}

// Shared payment session options for all payment methods
const paymentSessionOptions = {
  // Called when user approves a payment 
  async onApprove(data) {
    console.log("Payment approved:", data);
    try {
      const orderData = await captureOrder({
        orderId: data.orderId,
      });
      console.log("Payment captured successfully:", orderData);
    } catch (error) {
      console.error("Payment capture failed:", error);
    }
  },
  
  // Called when user cancels a payment
  onCancel(data) {
    console.log("Payment cancelled:", data);
  },
  
  // Called when an error occurs during payment
  onError(error) {
    console.error("Payment error:", error);
  },
};

// Set up standard PayPal button
async function setUpPayPalButton(sdkInstance) {
  const paypalPaymentSession = sdkInstance.createPayPalOneTimePaymentSession(
    paymentSessionOptions,
  );

  const paypalButton = document.querySelector("paypal-button");
  paypalButton.removeAttribute("hidden");

  paypalButton.addEventListener("click", async () => {
    try {
      await paypalPaymentSession.start(
        { presentationMode: "auto" }, // Auto-detects best presentation mode
        createOrder(),
      );
    } catch (error) {
      console.error("PayPal payment start error:", error);
    }
  });
}

// Set up Pay Later button
async function setUpPayLaterButton(sdkInstance, payLaterPaymentMethodDetails) {
  const payLaterPaymentSession = sdkInstance.createPayLaterOneTimePaymentSession(
    paymentSessionOptions
  );

  const { productCode, countryCode } = payLaterPaymentMethodDetails;
  const payLaterButton = document.querySelector("paypal-pay-later-button");

  // Configure button with Pay Later specific details
  payLaterButton.productCode = productCode;
  payLaterButton.countryCode = countryCode;
  payLaterButton.removeAttribute("hidden");

  payLaterButton.addEventListener("click", async () => {
    try {
      await payLaterPaymentSession.start(
        { presentationMode: "auto" },
        createOrder(),
      );
    } catch (error) {
      console.error("Pay Later payment start error:", error);
    }
  });
}

// Set up PayPal Credit button
async function setUpPayPalCreditButton(sdkInstance, paypalCreditPaymentMethodDetails) {
  const paypalCreditPaymentSession = sdkInstance.createPayPalCreditOneTimePaymentSession(
    paymentSessionOptions
  );

  const { countryCode } = paypalCreditPaymentMethodDetails;
  const paypalCreditButton = document.querySelector("paypal-credit-button");

  // Configure button with PayPal Credit specific details
  paypalCreditButton.countryCode = countryCode;
  paypalCreditButton.removeAttribute("hidden");

  paypalCreditButton.addEventListener("click", async () => {
    try {
      await paypalCreditPaymentSession.start(
        { presentationMode: "auto" },
        createOrder(),
      );
    } catch (error) {
      console.error("PayPal Credit payment start error:", error);
    }
  });
}
```

### Advanced

For advanced use cases, you can choose specific presentation modes and implement your own fallback logic by leveraging the `isRecoverable` error property.

```javascript lines expandable theme={null}
// Alternatively, set up a standard PayPal button with a custom order of presentation modes
async function setUpPayPalButton(sdkInstance) {
  const paypalPaymentSession = sdkInstance.createPayPalOneTimePaymentSession(
    paymentSessionOptions,
  );

  const paypalButton = document.querySelector("paypal-button");
  paypalButton.removeAttribute("hidden");

  paypalButton.addEventListener("click", async () => {
    const createOrderPromiseReference = createOrder();
    const presentationModesToTry = ["payment-handler", "popup", "modal"];

    for (const presentationMode of presentationModesToTry) {
      try {
        await paypalPaymentSession.start(
          { presentationMode },
          createOrderPromiseReference,
        );
        // Exit early when start() successfully resolves
        break;
      } catch (error) {
        // Try another presentationMode for a recoverable error
        if (error.isRecoverable) {
          continue;
        }
        throw error;
      }
    }
  });
}
```

### Key difference between v6 and previous versions

For more control over order details:

```javascript lines theme={null}
// In v6, this must return an object with a signature of { orderId: "YOUR_ORDER_ID" }
  return fetch("/paypal-api/checkout/orders/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderPayload),
  })
    .then(response => response.json())
    .then(data => ({ orderId: data.id })); /// <-- Important! 
}
```

### Choose a presentation mode

The JavaScript SDK v6 supports multiple presentation modes:

#### Auto mode (recommended)

```javascript  theme={null}
{ presentationMode: "auto" }
```

* Automatically selects the best presentation mode
* Tries popup first, falls back to modal if popups are blocked
* Best for most use cases

#### Popup mode

```javascript  theme={null}
{ presentationMode: "popup" }
```

* Opens PayPal in a popup window
* Provides seamless user experience
* May be blocked by popup blockers

#### Modal mode

```javascript  theme={null}
{ presentationMode: "modal" }
```

* Opens PayPal in an overlay modal
* This is only recommended for Webview scenarios
* Do not use in desktop web scenarios as this integration has limitations on cookies, which can affect user authentication

#### Redirect mode

```javascript  theme={null}
{ presentationMode: "redirect" }
```

* Full-page redirect to PayPal
* Best for mobile devices
* Requires return/cancel URL configuration

#### Payment handler mode (experimental)

```javascript  theme={null}
{ presentationMode: "payment-handler" }
```

* Uses the browser's Payment Handler API
* Modern browsers only
* Provides native payment experience

## Set up your backend

Make sure you [get the client token for the SDK](/developer/how-to/sdk/js/v6/configuration#get-client-token).

Set up your backend to call the following endpoints for one-time checkout with PayPal.

### 1. Create order

Creating an order initializes a payment request and reserves the funds, but doesn't transfer money. After the buyer authorizes an order, you capture the funds.

* Replace `YOUR_ACCESS_TOKEN` with your [API access token](/developer/how-to/api/get-started#2-get-an-access-token).

* You can send the `id` value in the response back to the client (JavaScript) side.

* The following example creates an order with 2 items and details, and includes the total amounts with shipping costs.

<Info>**Endpoint:** [`/v2/checkout/orders`](/reference/api/rest/orders/create-order)</Info>

```bash lines expandable theme={null}
curl -s -X POST https://api-m.sandbox.paypal.com/v2/checkout/orders \
  -H  "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
   "intent" : "CAPTURE",
   "purchase_units" : [
      {
         "amount" : {
            "breakdown" : {
               "item_total" : {
                  "currency_code" : "USD",
                  "value" : "220.00"
               },
               "shipping" : {
                  "currency_code" : "USD",
                  "value" : "10.00"
               }
            },
            "currency_code" : "USD",
            "value" : "230.00"
         },
         "items" : [
            {
               "category" : "PHYSICAL_GOODS",
               "description" : "Super Fresh Shirt",
               "image_url" : "https://example.com/static/images/items/1/tshirt_green.jpg",
               "name" : "T-Shirt",
               "quantity" : "1",
               "sku" : "sku01",
               "unit_amount" : {
                  "currency_code" : "USD",
                  "value" : "20.00"
               },
               "upc" : {
                  "code" : "123456789012",
                  "type" : "UPC-A"
               },
               "url" : "https://example.com/url-to-the-item-being-purchased-1"
            },
            {
               "category" : "PHYSICAL_GOODS",
               "description" : "Running, Size 10.5",
               "image_url" : "https://example.com/static/images/items/1/shoes_running.jpg",
               "name" : "Shoes",
               "quantity" : "2",
               "sku" : "sku02",
               "unit_amount" : {
                  "currency_code" : "USD",
                  "value" : "100.00"
               },
               "upc" : {
                  "code" : "987654321012",
                  "type" : "UPC-A"
               },
               "url" : "https://example.com/url-to-the-item-being-purchased-2"
            }
         ]
      }
   ]
}' 
```

<Accordion title="Sample 200 response">
  ```json lines theme={null}
  {
     "id" : "9N088525UW155274K",
     "links" : [
        {
           "href" : "https://api.sandbox.paypal.com/v2/checkout/orders/9N088525UW155274K",
           "method" : "GET",
           "rel" : "self"
        },
        {
           "href" : "https://www.sandbox.paypal.com/checkoutnow?token=9N088525UW155274K",
           "method" : "GET",
           "rel" : "approve"
        },
        {
           "href" : "https://api.sandbox.paypal.com/v2/checkout/orders/9N088525UW155274K",
           "method" : "PATCH",
           "rel" : "update"
        },
        {
           "href" : "https://api.sandbox.paypal.com/v2/checkout/orders/9N088525UW155274K/capture",
           "method" : "POST",
           "rel" : "capture"
        }
     ],
     "status" : "CREATED"
  }
  ```
</Accordion>

Call your server endpoint from the client side.

```javascript lines expandable theme={null}
async function createOrder() {
  const response = await fetch("/paypal-api/checkout/orders/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart: [{
        id: "YOUR_PRODUCT_ID_1",
        quantity: "YOUR_PRODUCT_QUANTITY",
      }, {
        id: "YOUR_PRODUCT_ID_2",
        quantity: "YOUR_PRODUCT_QUANTITY",
      }],
    }),
  });
  const {
    id
  } = await response.json();
  return {
    orderId: id
  };
}
```

### 2. Capture order

After a buyer authorizes payment, capture an order to transfer funds from the buyer to the merchant account.

Replace `YOUR_ACCESS_TOKEN` with your API access token.

* For more details on order captures, see the [Capture order endpoint](/reference/api/rest/orders/capture-payment-for-order).

```bash lines theme={null}
curl -X POST https://api-m.sandbox.paypal.com/v2/checkout/orders/{ORDER_ID}/capture \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{}'
```

<Accordion title="Sample 200 response">
  ```json lines theme={null}
  {
    "id": "9N088525UW155274K",
    "links": [{
      "href": "https://api.sandbox.paypal.com/v2/checkout/orders/9N088525UW155274K",
      "method": "GET",
      "rel": "self"
    }],
    "payer": {
      "address": {
        "country_code": "US"
      },
      "email_address": "test-buyer@yahoo.com",
      "name": {
        "given_name": "test",
        "surname": "buyer"
      },
      "payer_id": "3XSHM8HDUW9QC"
    },
    "payment_source": {
      "paypal": {
        "account_id": "3XSHM8HDUW9QC",
        "account_status": "VERIFIED",
        "address": {
          "country_code": "US"
        },
        "email_address": "test-buyer@yahoo.com",
        "name": {
          "given_name": "test",
          "surname": "buyer"
        }
      }
    },
    "purchase_units": [{
      "payments": {
        "captures": [{
          "amount": {
            "currency_code": "USD",
            "value": "230.00"
          },
          "create_time": "2025-10-22T22:32:27Z",
          "final_capture": true,
          "id": "05C30509S82176912",
          "links": [{
            "href": "https://api.sandbox.paypal.com/v2/payments/captures/05C30509S82176912",
            "method": "GET",
            "rel": "self"
          }, {
            "href": "https://api.sandbox.paypal.com/v2/payments/captures/05C30509S82176912/refund",
            "method": "POST",
            "rel": "refund"
          }, {
            "href": "https://api.sandbox.paypal.com/v2/checkout/orders/9N088525UW155274K",
            "method": "GET",
            "rel": "up"
          }],
          "seller_protection": {
            "dispute_categories": ["ITEM_NOT_RECEIVED", "UNAUTHORIZED_TRANSACTION"],
            "status": "ELIGIBLE"
          },
          "seller_receivable_breakdown": {
            "gross_amount": {
              "currency_code": "USD",
              "value": "230.00"
            },
            "net_amount": {
              "currency_code": "USD",
              "value": "221.48"
            },
            "paypal_fee": {
              "currency_code": "USD",
              "value": "8.52"
            }
          },
          "status": "COMPLETED",
          "update_time": "2025-10-22T22:32:27Z"
        }]
      },
      "reference_id": "default",
      "shipping": {
        "address": {
          "address_line_1": "1 Main St",
          "admin_area_1": "CA",
          "admin_area_2": "San Jose",
          "country_code": "US",
          "postal_code": "95131"
        },
        "name": {
          "full_name": "test buyer"
        }
      }
    }],
    "status": "COMPLETED"
  }
  ```
</Accordion>

Then, call your server endpoint from the client side to capture the order:

```javascript lines theme={null}
async function captureOrder({ orderId }) {
  const response = await fetch(
    `/paypal-api/checkout/orders/${orderId}/capture`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  return data;
}
```

## Best practices

Keep sensitive operations server-side and validate all payment data. Provide clear feedback to users throughout the payment flow.

### Security

* Obtain client tokens from your secure server
* Never expose PayPal client secrets in frontend code
* All payment processing happens through PayPal's secure servers
* Never pass up item total from browser - this can be manipulated
* Validate order details on your server before capture

### User experience

* Always check eligibility before showing payment buttons
* Provide clear loading states during payment processing
* Handle popup blockers gracefully with `{ presentationMode:auto }`
* Show appropriate error messages for different failure scenarios

### Performance

* Initialize the SDK early, but avoid blocking page load
* Cache client tokens appropriately
* Use presentation mode fallback strategies

## Testing

* Test across different browsers and devices
* Verify popup blocker handling
* Test all callback scenarios (approve, cancel, error)
* Validate eligibilit
# api credenciales Paypal edgarplasticos3@hotmail.com
ARTh1JcgB4texLdbwWliMcjMNR_ljfg-yODyHKcjwlAdR4K8YAhLV3Pm1mwzXKbkEKTHDQSn1Qt0XJhO
AUkLH8bV5AwJU6bfzKviRlWcPZFzuM2UqxBad5-qWiWAJp068W-MeKHAOA8W_BNlN0PZr9jfJ884UCWh
ASAL8-_MIaL8lKA_1s-rE7ChGQMSR-UkbH1YeibD5X71nWO2aZx7mvoljjADs2umtw8WwA5lD2o7FG1L
Adww38aCRh2z_NH5SzxYWhialjWzALkE5GxQNdtBZCbqLeVmbYX21hri-r3bWOWDDgZ_BzPbNsvjbTXD
AfnF0uJLQiG7c1EOGvzssvG221wCVOHSgjicvHn6YT08W_HviKSrquLEtexTtuvd65j9UUtom0BUwB1z
INSERT INTO ?:payment_processors (processor, processor_script, processor_template, admin_template, callback, type, addon) VALUES ('Website Payments Pro', 'paypal_pro.php', 'views/orders/components/payments/cc.tpl', 'paypal_pro.tpl', 'Y', 'P', 'paypal');
INSERT INTO ?:payment_processors (processor, processor_script, processor_template, admin_template, callback, type, addon) VALUES ('PayPal', 'paypal.php', 'views/orders/components/payments/cc_outside.tpl', 'paypal.tpl', 'Y', 'P', 'paypal');
INSERT INTO ?:payment_processors (processor, processor_script, processor_template, admin_template, callback, type, addon) VALUES ('PayFlow Pro', 'payflow_pro.php', 'views/orders/components/payments/cc.tpl', 'payflow_pro.tpl', 'Y', 'P', 'paypal');
INSERT INTO ?:payment_processors (processor, processor_script, processor_template, admin_template, callback, type, addon) VALUES ('PayPal Express Checkout', 'paypal_express.php', 'addons/paypal/views/orders/components/payments/paypal_express.tpl', 'paypal_express.tpl', 'Y', 'B', 'paypal');
INSERT INTO ?:payment_processors (processor, processor_script, processor_template, admin_template, callback, type, addon) VALUES ('PayPal Advanced', 'paypal_advanced.php', 'views/orders/components/payments/cc_outside.tpl', 'paypal_advanced.tpl', 'N', 'P', 'paypal');
<?php
/***************************************************************************
 *                                                                          *
 *   (c) 2004 Vladimir V. Kalynyak, Alexey V. Vinokurov, Ilya M. Shalnev    *
 *                                                                          *
 * This  is  commercial  software,  only  users  who have purchased a valid *
 * license  and  accept  to the terms of the  License Agreement can install *
 * and use this program.                                                    *
 *                                                                          *
 ****************************************************************************
 * PLEASE READ THE FULL TEXT  OF THE SOFTWARE  LICENSE   AGREEMENT  IN  THE *
 * "copyright.txt" FILE PROVIDED WITH THIS DISTRIBUTION PACKAGE.            *
 ****************************************************************************/

use Tygh\Addons\PaypalCheckout\Enum\WebhookEventType;
use Tygh\Addons\PaypalCheckout\Payments\PaypalCheckout;
use Tygh\Addons\PaypalCheckout\ServiceProvider;
use Tygh\Addons\PaypalCheckout\Webhook\PaymentFinishedEvent;

defined('BOOTSTRAP') or die('Access denied');

if ($mode === 'webhook') {
    $payload_body = file_get_contents('php://input');

    fn_log_event(
        'general',
        'runtime',
        [
            'message' => __('paypal_checkout.webhook', ['[payload]' => $payload_body]),
        ]
    );

    $event = json_decode($payload_body, false);
    if (
        !isset($event->event_type)
        || !in_array($event->event_type, WebhookEventType::getCaptureTypes(), true)
    ) {
        die('err_event');
    }

    if ($event->event_type !== WebhookEventType::PAYMENT_CAPTURE_REFUNDED) {
        $event = new PaymentFinishedEvent($event);
    } else {
        die('handler not implemented');
    }
    $order_info = $event->getCapture()->getOrderInfo();
    if (!$order_info) {
        die('err_order');
    }

    if ($event->isProcessed()) {
        die('err_processed');
    }

    $capture = $event->getCapture();

    if (!fn_check_payment_script(PaypalCheckout::getScriptName(), $capture->getOrderId())) {
        die('err_order');
    }

    $processor = ServiceProvider::getProcessorFactory()->getByPaymentId(
        $order_info['payment_id'],
        $order_info['payment_method']['processor_params']
    );
    $pp_response = $event->handle($processor);

    fn_update_order_payment_info($capture->getOrderId(), $pp_response);
    fn_change_order_status($capture->getOrderId(), $pp_response['order_status']);
}

return [CONTROLLER_STATUS_NO_CONTENT];

<?php

namespace PayPal\Core;

use PayPal\Log\PayPalLogFactory;
use Psr\Log\LoggerInterface;

/**
 * Simple Logging Manager.
 * This does an error_log for now
 * Potential frameworks to use are PEAR logger, log4php from Apache
 */
class PayPalLoggingManager
{
    /**
     * @var array of logging manager instances with class name as key
     */
    private static $instances = array();

    /**
     * The logger to be used for all messages
     *
     * @var LoggerInterface
     */
    private $logger;

    /**
     * Logger Name
     *
     * @var string
     */
    private $loggerName;

    /**
     * Returns the singleton object
     *
     * @param string $loggerName
     * @return $this
     */
    public static function getInstance($loggerName = __CLASS__)
    {
        if (array_key_exists($loggerName, PayPalLoggingManager::$instances)) {
            return PayPalLoggingManager::$instances[$loggerName];
        }
        $instance = new self($loggerName);
        PayPalLoggingManager::$instances[$loggerName] = $instance;
        return $instance;
    }

    /**
     * Default Constructor
     *
     * @param string $loggerName Generally represents the class name.
     */
    private function __construct($loggerName)
    {
        $config = PayPalConfigManager::getInstance()->getConfigHashmap();
        // Checks if custom factory defined, and is it an implementation of @PayPalLogFactory
        $factory = array_key_exists('log.AdapterFactory', $config) && in_array('PayPal\Log\PayPalLogFactory', class_implements($config['log.AdapterFactory'])) ? $config['log.AdapterFactory'] : '\PayPal\Log\PayPalDefaultLogFactory';
        /** @var PayPalLogFactory $factoryInstance */
        $factoryInstance = new $factory();
        $this->logger = $factoryInstance->getLogger($loggerName);
        $this->loggerName = $loggerName;
    }

    /**
     * Log Error
     *
     * @param string $message
     */
    public function error($message)
    {
        $this->logger->error($message);
    }

    /**
     * Log Warning
     *
     * @param string $message
     */
    public function warning($message)
    {
        $this->logger->warning($message);
    }

    /**
     * Log Info
     *
     * @param string $message
     */
    public function info($message)
    {
        $this->logger->info($message);
    }

    /**
     * Log Fine
     *
     * @param string $message
     */
    public function fine($message)
    {
        $this->info($message);
    }

    /**
     * Log Debug
     *
     * @param string $message
     */
    public function debug($message)
    {
        $config = PayPalConfigManager::getInstance()->getConfigHashmap();
        // Disable debug in live mode.
        if (array_key_exists('mode', $config) && $config['mode'] != 'live') {
            $this->logger->debug($message);
        }
    }
}
 <?php
namespace PayPal\Transport;

use PayPal\Core\PayPalHttpConfig;
use PayPal\Core\PayPalHttpConnection;
use PayPal\Core\PayPalLoggingManager;
use PayPal\Rest\ApiContext;

/**
 * Class PayPalRestCall
 *
 * @package PayPal\Transport
 */
class PayPalRestCall
{


    /**
     * Paypal Logger
     *
     * @var PayPalLoggingManager logger interface
     */
    private $logger;

    /**
     * API Context
     *
     * @var ApiContext
     */
    private $apiContext;


    /**
     * Default Constructor
     *
     * @param ApiContext $apiContext
     */
    public function __construct(ApiContext $apiContext)
    {
        $this->apiContext = $apiContext;
        $this->logger = PayPalLoggingManager::getInstance(__CLASS__);
    }

    /**
     * @param array  $handlers Array of handlers
     * @param string $path     Resource path relative to base service endpoint
     * @param string $method   HTTP method - one of GET, POST, PUT, DELETE, PATCH etc
     * @param string $data     Request payload
     * @param array  $headers  HTTP headers
     * @return mixed
     * @throws \PayPal\Exception\PayPalConnectionException
     */
    public function execute($handlers = array(), $path, $method, $data = '', $headers = array())
    {
        $config = $this->apiContext->getConfig();
        $httpConfig = new PayPalHttpConfig(null, $method, $config);
        $headers = $headers ? $headers : array();
        $httpConfig->setHeaders($headers +
            array(
                'Content-Type' => 'application/json'
            )
        );

        // if proxy set via config, add it
        if (!empty($config['http.Proxy'])) {
            $httpConfig->setHttpProxy($config['http.Proxy']);
        }

        /** @var \Paypal\Handler\IPayPalHandler $handler */
        foreach ($handlers as $handler) {
            if (!is_object($handler)) {
                $fullHandler = "\\" . (string)$handler;
                $handler = new $fullHandler($this->apiContext);
            }
            $handler->handle($httpConfig, $data, array('path' => $path, 'apiContext' => $this->apiContext));
        }
        $connection = new PayPalHttpConnection($httpConfig, $config);
        $response = $connection->execute($data);

        return $response;
    }

RUN edgarplasticos3@hotmail.com}


# PayPal Developer Docs Example Code

Examples from the official [PayPal Developer Docs](https://developer.paypal.com/).

## Introduction and Overview

This repository contains two directories:

- [Standard integration](./standard-integration/)
  - Set up standard payments on your checkout page for your buyers.
- [Advanced integration](./advanced-integration/)
  - Build and customize a card payment form to accept debit and credit cards.

**Not sure where to start?** Choose the [standard integration](./standard-integration/).

### The PayPal JavaScript SDK

These examples use the [PayPal JavaScript SDK](https://developer.paypal.com/sdk/js/) to display PayPal supported payment methods and provide a seamless checkout experience for your buyers.

The SDK has several [configuration options](https://developer.paypal.com/sdk/js/configuration/) available. The examples in this repository provide the most minimal example possible to complete a successful transaction.

## Know before you code

### Setup a PayPal Account

To get started with standard checkout, you'll need a developer, personal, or business account.

[Sign Up](https://www.paypal.com/signin/client?flow=provisionUser) or [Log In](https://www.paypal.com/signin?returnUri=https%253A%252F%252Fdeveloper.paypal.com%252Fdeveloper%252Fapplications&intent=developer)

You'll then need to visit the [Developer Dashboard](https://developer.paypal.com/dashboard/) to obtain credentials and to
make sandbox accounts.

### Create an Application

Once you've setup a PayPal account, you'll need to obtain a **Client ID** and **Secret**. [Create a sandbox application](https://developer.paypal.com/dashboard/applications/sandbox/create).

### Have Node.js installed

These examples will ask you to run commands like `npm install` and `npm start`.

You'll need a version of node >= 16 which can be downloaded from the [Node.js website](https://nodejs.org/en/download/).


## PayPal Codespaces 

PayPal codespaces require a client ID and client secret for your app. 

### Link to codespaces 

| Application | Codespaces Link |
| ---- | ---- |
| Advanced Integration v2 | [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/paypal-examples/docs-examples?devcontainer_path=.devcontainer%2Fadvanced-integration-v2%2Fdevcontainer.json)|
| Advanced Integration v1 | [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/paypal-examples/docs-examples?devcontainer_path=.devcontainer%2Fadvanced-integration-v1%2Fdevcontainer.json)|
| Standard Integration | [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/paypal-examples/docs-examples?devcontainer_path=.devcontainer%2Fstandard-integration%2Fdevcontainer.json)|

### Learn more 

You can read more about codespaces in the [PayPal Developer Docs](https://developer.paypal.com/api/rest/sandbox/codespaces).

### Feedback

* To report a bug or suggest a new feature, create an [issue in GitHub](https://github.com/paypal-examples/paypaldevsupport/issues/new/choose). 
* To submit feedback, go to [PayPal Developer Docs](https://developer.paypal.com/api/rest/sandbox/codespaces) and select the "Feedback" tab.
by Edgar Manuel Ruiz Arias 
"EX-10.1 2 d538539dex101.htm EX-10.1
Exhibit 10.1





December 21, 2023

Gabrielle Rabinovitch

Dear Gabrielle:

This letter agreement (“Transition Agreement” or “Agreement”) sets forth the transition benefits for which you are eligible if you timely sign and do not timely revoke, (i) this Transition Agreement within the time frame provided in Section 25 of this Agreement, (ii) a waiver and general release of claims, in the form provided by the Company (the “Release”), on or within forty-five (45) days after the Transition End Date (as defined herein) and (iii) attestation(s), to the extent applicable pursuant to the terms of this Transition Agreement. Please note that the Transition Agreement and the Release each contain a waiver and release of claims against PayPal, Inc., PayPal Holdings, Inc. and their respective subsidiaries and affiliates (collectively, “PayPal” or the “Company”). The “Parties” collectively refers to you and the Company. Your last date of employment as a Senior Vice President with the Company is December 31, 2023 (“Transition Start Date”), subject to Section 6 herein. For our mutual benefit, to promote a smooth transition for both you and the Company and to permit you to maintain certain benefits of continued employment, you will transition from full- to part-time employment with the Company on January 1, 2024 and provide transition services to the Company in accordance with Section 2 during the period commencing on January 1, 2024 until and inclusive of January 31, 2024 (such period, the “Transition Period” and the last day of the Transition Period, the “Transition End Date”) and your employment with the Company shall terminate effective as of the Transition End Date. This letter confirms the details of your employment from the Transition Start Date through the Transition Period and other matters relating to your termination of employment.



1.        
TRANSITION BENEFITS. As good and valuable consideration in exchange for your timely execution and non-revocation of the general release of claims set forth in Sections 17 and 18 of this Agreement in accordance with Section 25 herein, the Company will (a) pay you a lump sum of $100, within seven calendar days following the date that the release of claims in this Agreement becomes fully effective pursuant to Section 25 herein, (b) continue to employ you with your regular salary and benefits through the Transition Start Date, except as so limited by Section 6 herein, during which time you will perform such duties as are given to you by the Company and (c) engage you to provide certain transition services during the Transition Period in accordance with Section 2 herein. Further, in exchange for timely signing and not timely revoking each of this Agreement and the Release and contingent upon (a) you complying with the policies and responsibilities of your position as a Senior Vice President through the Transition Start Date in all material respects, as determined by the Company, (b) you complying with your obligations set forth in this Agreement, and (c) your continued employment with the Company through the Transition Start Date and transition services to the Company during the Transition Period in accordance with Section 2, following the Transition End Date, you will be eligible for the benefits set forth in Sections 3 and 4. You understand and agree that the compensation and benefits provided under this Agreement constitute all the compensation and benefits to which you are entitled, and you agree to waive any and all rights, benefits and privileges to severance or transition benefits you might otherwise be entitled to receive under any other Company policy, plan, agreement or arrangement, including, without limitation, the Company’s Executive Change in Control and Severance Plan, as amended and restated, effective as of September 27, 2021 and as may be further amended from time to time (the “Severance Plan”). You understand that the payments and benefits described in this Agreement are not for wages the Company concedes it owes you and are consideration for you timely signing and not timely revoking this Agreement or the Release. All payments under this Agreement will be subject to applicable taxes and withholdings.

2.        
TRANSITION SERVICES. Provided you timely sign and do not timely revoke this Transition Agreement, during the Transition Period, the Company agrees to retain you as an officer on a part-time basis to provide transition assistance, to complete projects, and to provide such advice, expertise or knowledge with respect to your former duties prior to the Transition Start Date or other matters in which you were involved (collectively, the “Transition Services”) as may be reasonably requested in writing by the Company’s Chief Financial Officer. As a continuing officer, you will be covered by such directors and officers’ insurance coverage as in place for other directors and officers of the Company during the Transition Period. Except to the extent otherwise reasonably requested by the Company, the services you provide during the Transition Period shall be provided offsite. If you provide satisfactory Transition Services during the Transition Period, as reasonably determined by the Company in good faith, the Company will compensate you for the Transition Services by paying you a lump sum cash amount equal to $150,000 no later than sixty (60) days following the Transition End Date. During the Transition Period, to the extent the Company determines it necessary to your performance of the Transition Services, you will retain access to your Company email account and other Company electronic communications system accounts and retain use of Company Property.



3.        
ADDITIONAL LUMP SUM PAYMENT. Provided you timely sign and do not timely revoke this Transition Agreement and timely execute and do not timely revoke the Release, and contingent upon complying with the policies and responsibilities of your position in all material respects as reasonably determined by the Company in good faith through the Transition End Date, the Company will make the following lump sum payment to you: $234,375, which is the cash portion of your 2023 bonus incentive under the 2023 PayPal Annual Incentive Plan (“AIP”) with your individual performance deemed achieved at the target level. You will receive this payment at the later of (x) at or around the time that other participants of the 2023 AIP receive their 2023 AIP payout and (y) when the Release becomes effective in accordance with its terms. In addition, your AIP performance-based restricted stock units (“AIP PBRSUs”) granted on February 15, 2023 shall remain outstanding and shall vest on February 15, 2024 on the same basis and to the same extent as determined for the Company’s executive officers and shall settle at or around the same time that 2023 AIP PBRSUs settle with respect to other participants in the 2023 AIP, provided that the Release becomes effective in accordance with its terms.

You understand that the payment described in this Section is not for wages the Company concedes it owes you and is consideration for you signing and not re
PK�����!�4a›\��*���[Content_Types].xml ¢( ���������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������´”ËNÃ0E÷Hüƒå-JÜ²@5í‚Ç*Q>Àµ'­…c[öôõ÷LÒ6B¨4ˆ¶›HÉÌ½÷Œ•ñ`´®,[BLÆ»‚÷ógà”×ÆÍ
þ1yÉî9K(–Ö;(ø
¯¯“M€ÄHíRÁçˆáAˆ¤æPÉ”û�Ž*¥•Dz3¤ú”3·½ÞPÞ!8Ì°öàÃÁ”ra‘=¯éó–$‚Mœ=në¬‚Ë¬Q©.–NÿHÉv	9)›ž47!ÝPgâ`DSú5a/|£Ã‰FËˆ¯²¢6±òQíÕ¢"i~Üç�©/K£ Õ×n!z)Ñ©W6o+•4®àW„éü[ß?ä").A°sîfXÁôýbßÌ»IJ
žÈ©…ós´ÖÝH‹ÛgÿdÆæh&µŽ£‰6;þcðýêÖêŒFÑtüzm$yŸ<!Ô·‚}(\47Ýð��ÿÿ�PK�����!�*£{ð���Q���_rels/.rels ¢( ���������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������¬’ÁjÃ0@ïƒýƒÑ½QÚÁ£N/cÐÛÙ[ILÛØj×þý<Û]éaGËÒÓ“ÐzsœFuà”]ð–U
Š½	Öù^Ã[û¼x�•…¼¥1xÖpâ›æöfýÊ#I)Êƒ‹YŠÏ‘øˆ˜ÍÀå*Döå§i")ÏÔc$³£žqU×÷˜~3 ™1ÕÖjH[{ª=E¾†ºÎ~
f?±—3-ÂÞ²]ÄTê“¸2j)õ,l0/%œ‘b¬
žWZ]¯ô÷¸8±%!4!ñe¡ÏŒ‹FËÿ\Ò<ãGç=$‹ö+ü­ƒ³Ch>���ÿÿ�PK�����!�™Üºõ���6���word/_rels/document.xml.rels ¢( �����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������¬’ËjÃ0E÷…þƒ˜}-;}PBälJ!ÛÖý�E?¨,	Íôá¿¯HiêÐ`ºðr®˜sÏ€6ÛÏÁŠwŒÔ{§ ÈrèŒ¯{×*x©¯îAkWkë*‘`[^^lžÐjNKÔõD¢8RÐ1‡µ”d:4e> K/ƒæ4ÆVm^u‹r•çw2NPž0Å®Vwõ5ˆjø¶ošÞàƒ7o:>S!?pÿŒÌé8JX[d“0KDò¼ÉjIú£ñ“Ì:‹:ðhqjp˜gûo—ìç´‹¿õ‡ñ;,f%n–”h¼ãJïíDä-äÉo/¿���ÿÿ�PK�����!�”Õs£ðo��
Þ����word/document.xmlì}sG~çÿ¿ª{SÊmvSµûù‰ÈòÃ*%Û*ÉJr—½Êö#‰0�(Ú[÷â¯gÀ€–ÌFaÕ©õí²Éæ°1„ÐŸîþLÏoºÿá¾š7ïÒj=[.¾xDŸGMZ„eœ-.¾xôæ§o›GÍzãÑÍ—‹ôÅ£_ÒúÑ?~ùßÿÛ?ÜžÇe¸¹J‹MSN±XŸß^‡/]n6×çggëp™®ÜúÉÕ,¬–ëeÞ<	Ë«³eÎ³În—«xÆ%]îzµi½.ï™[¼sëGÛÓ…Ÿ;[\¹Ûòâö„â,\ºÕ&ý<œƒž|yfÏÌû'bNTþ…Œ¾*~ò©ÔYû®Þ;‘˜t¢ò®Þ;“œv¦üãÔ´3±÷Ï¤§‰¿&3íLïátõ>àËë´(¿ÌËÕ•Û”WgWnõöæúq9ñµÛÌül>ÛüRÎIÔî4n¶x;á•WíÏpÅãÉgÐgWË˜æ<îÎ²üâÑÍjq¾}ýãýëÛ·~Þ¿~ûmÿŠ4?îÏ–?gÏÒÏ›ùz³{íê˜Ï®ù×ÛŽ¥ûÔÎVi^>Çåb}9»Þ÷WSÏV~y¹;É»û>€wWó]¹ÛkzdSû­®íë¾†óö·uw5ïßùýg¤äˆÚlO±Å1oáîßÜ½“«Bðð‡'}4.=²óÙ€½wÒ‘ƒÅîf{Ž³0´îö<³#›Õî<}­´ç™
,=²üõ›98Á:nâåIga»Ïõ¬}­Û¸K·ÞƒÞž1ö¦äþt¿\|F××¾[-o®‡³Í>îlÏ‡.ñ¶•“ÎµmP‡|ýqoæõ¥».=åU8~±X®œŸ—wTšGSoºh¿PÚo]6ýÜoëºiû˜G_«òËøKûýº¹=/V_}ñˆlÓ£Ý¡—«öà×_i­žî~²»™oÞÿÍËƒCÝ™_®ºo¯7¿ÌË{:çJ¯þSé­—åŸÑ·þå£æ¬-³ê‹®¾].6ëRÔ­Ã¬ÔÙ³åÍj–VÍé¶ý#—Oë÷†õ¯ug\ÿu÷©ÙzÖžûðàÙöOŸíßíêƒÿöÿÞãíùæËïw 4ÿ:[Äåíºù÷éº¡ä	yB-ò	'œþïöu›þÕý¿•ý‰UöÂß5C…?[®®Kko
åIót^>äW)\nRón¹òéÒÍ7iñ•þ‰Wz;Hœ¯¯](}úõ*­Óê]zôå7_÷ôUóýÓÞ|ó¢yõæùÿjž¾zþôuƒêþÔÛø³ó?¿)•¼þ³‹W³Åß^lþþâµú©×ê¿.Wo›urWó¢ló_šÛÙæ²ùn¶ùÓoòjyÕl.SSTïÊ-b3Ÿ-:îO¾ÎS¼pås[Ü¤ùêfö×ë¹[ofa¹þ§‹r;oÅþ]‘ý/ø?].7»ß¡þ?õúóúéwß «ô¯¦¹¸lþv¾ùûmŸÝŽÓÝÏëxèßóÜ]¬qé5J>”O°‡{öã«ošg?~_®C¾~
Æ+íéÜÍæò¼Ù¦§å‡´(ºâ6©í[_½˜m… T
‚_-o×i‹Â×iÑ]µ¬Òuù¤7ËÕ/Í¬?Ò—[ƒJ9Ë˜ºÃ-
Ï–‹E
›f³ìú‚b>î¢½”ÝYƒ‚Zx¶Þì‡…ïûjo¡Æk­ñÙz}³ëþw5ÞC•×ZåËÕÅ¾ïª¼s‹Ù_ûÐÔ|¥5½*~Wó×7óyñ½ÿ,-Ý|µ5¿Jóävž¿­ùí1Tz½•~½üµÍí¯ìf¨xÌ`V9ƒùÝóŸþôæ«æé³ŸžÿøÃkÌeVßÍÝ,­ù—YºmbÚ¸Ù|Ý8¿¼Ù4·ËÕÛ<_Þ¶³ÅEùu[‡ˆ«©ˆ]…wT|�ˆmŒÆÓÐ]íì‹c<ÄxXa+ùòé×_?o‡Â§/0ÖÞõ¹ùÌ­w£á³UjïèíBÐÖ—ËÕ&Üà*¿ÞÚ¿žÎì½M[t·zwwwã~ì{ù|7é*¥¡}ftžZÇ)P|—iÕöëË4Ÿü®Y‡ÕìBÅ,òl7ã¿êÝôš4åãn^-�å3M‹öé±–ÝMÝËá0š~µ·ó¯/¿M¿Ü™õÿîåwM9¶Æ,Hå•?w>Íug¿;†ö^k•¯“[…]\çëî‡np?¼éóÇmxÇ›öšw?.Â*í»vã@!Øÿ
U_mÕ¯/ßS€×¯ÿø,*ã67»éÀ—«ÙbÓì>áöº¯¿Ò†¼sí¯¶ãÂ1¡&ËÍ,·3HÝ
×®V°F(Áç€Ð;·šµ‹ÏtÝ:v÷ÏvE�îŸUØ2¾üÓ7/^6?ýøòù3Ü7«öÎIß—õCå‹rå´Ûà€6fäpq‡mÇ*…!-ÞÍVËE»ÌãyóÍðÃ0Ò5›K·i‚[4>57ë{>0‰^ñ$ú¬]ü2¦¶ø¦üÐ?×W¾ÿU_oÕ÷æ¦Œ¥ê¿ÝÿÐ,¯{ÿmgØþùõ?4íB™”ëåª½ÓÞ-,ªÅâª\No¶+Íó÷.«oÖ-#—ýÈðýlñÓOÿ,TÊÂ*å´J‹þéé§]tÅ*]¶·Wßµ\lÙ,sãæóŠmL—Ì6“/¿}ñô;\,×ÚÛ=~|™æ×Û»Œ—ËÛ¦û±Õ m·†š¯¶æ·›»ìj¾eÛ#¨sŒdŽdßüÛÓï_¾øƒY­]Úÿhû°îÖgºç%PÓ5×t{Óº	íîcåëì¬üú®¹¾¯‹”^¦ð¶’áŒ¢²a)ZÊ‹ož¾ú¡ùþÇWX›ºÖÞìÍ:5¿?nêþúü÷ÝùÕr•>ôåv—êO�L¥À¼J.vK·¶Û¸yã6M»!Ùúü¬µž'³Íåï¶"ë�Ø{§½yß]<öÍõår³\<¾¼¹Xî›ÇíííaóˆÁ­—wÖE3ùä‰(ußÞ›-6Ëæ÷}­þþÉŒ„Ÿ|ÍÞºU[³çå*?ÎV)ta›¡aÿf£n›ûêÿÓ®ÿvË¥WiS©ý—î"}µJîmÿºÍ—«tµÜ¤6œïæª]¡àñÿ§0²>o¨f‚È?6q‰Mº*èvu]ÎµøUEò»æJI{Ö~ù;TyuUÞFÞt;(ÿºÖ™¡ü¬ý‚Z¯­Ö*#ù|Û‹7ˆi¾q
R—š^¥.BWq­ö¿aœ–ß”+æ··¿¦Jj¡šÒìÝÐéÏ|Ö+/}ulANÄ“ò–¾Ÿ}Õüß†>a¬Íž­à‘�âCù[å«´^Î»ÖÑµ·¡qÅ¬>ë¿¡®¥ºß\Ç^§ólÞ>ÑW¶eŒŸµ_PÑèì*¦ÿýéÅ·“Š ÄWOüŸ{Ö[ðÁ{µUnVóæñ?7_4üÐtê»«[·JÛÙÔ³v‘3*;kï2Ï6ë³d£ ‘ò$3gÌFsòBSjæ,mŒŠ'×nðÌ\­÷¤·½ToÚl]®¾×ü[N«Ø4Oß¥U·@Ñu*‡›æ§ÙUjËî¾o3ÏnV«´ÀÂÅµR2’¾ž/]¡ãÍuÿ}T¡f±i¼HyÓý˜ð$J­Œ…îë‡³ß?>ïþû@¦+�H>uq¡¤T63š5íôÃ.{ÈW¬;þ+xÀ‡ò	6’‡³{+9•I+=‹ÙÎ
e:(íLð^êd¬ÎØ}$ÁîAÉtJFìŒÀîÉ�ÉvÏ45{,È9)ÿÑ!3ðÐ–°{Øý)vobAQÆµÊA˜$ªl½§ÎŠlS2{Ø}$ÁîAÉtJFìŒL³ûØ\[�Ô`÷”Haz»ßfyÐÌ¨=÷Ù=%oÁìv‚Ý‹Ä¸¡ÁñH0™;â,¥Š1š¢"–(ë‰ñs÷u»%Ó)I°{0‚¹{@2@²›»7t?wßfïÌÝ[#á¡-`÷°ûìÞXb³š#½‰Œ	æ¬PÚ¥tfŒDÇ4qv_I°{P2’‘»#°{@2@²µ{KÄÎî»ì!œp{m9ð�»‡ÝŸb÷Äñ`¼±TYax”Ž¢bÉy!©ñÅò“•v_I°{P2’‘»#°{@2@²ÌÑbk÷Ûì!Æ2¾ÇâžÈœ¶x€ÝW×Hî]súáÄ_î‚÷AQ›¸JApå’É^S–¤	¬4g
â_dPò”Œ$ˆ?ø’’Ý´¾Ü†äo³‡<0©º0ž1ñ§\#$â_c#yÀn#Q®“ÒÁx°Ô
Î<áÇIŽ1»¯‚$Ø=(™NÉH‚ÝƒØ=  éíž
Ú~²‡<P*»‰þQ»/åÀìv‚ÝG§,žžˆI$k!,™iOœS,Úì}äÜÖAì”L§d$ÁîÁìc÷‚íË¼‡¶x€ÝÃîO°{.Câ1e]äYQ™â9Ç`”šg¨5žØ}$ÁîAÉtJFìŒÀîÉ�É1vÏí€Å½‘9<Àîkl$™ÃUV)'N¢Šœ²(K5ê¥6^8âu&Eð=ÝWAì”L§d$ÁîÁìôv/,×[»ï³‡<H-öq÷÷ñÐ–°{Øý	vŸÚM­¨ˆÊkm”²R;-½HÄ©ìŒãA&îÁb™u»%Ó)I°{0»$$GØ½`v¿Xæý]Y<U»¯±‘<œÝËdOÒ+‘-‹B:oÍÆ%Á8ÍDò¬mô	‘9u»%Ó)I°{0»$$ÇØ½áG-–Ù–°{Øý	vï=kW©ŠÖÚ ”WŽG–l6‰;itQ{ˆ7NÃî« 	vJ¦S2’`÷`vHHz»7ÅÌ·vßgyÐÊe÷m9ð�»‡ÝŸb÷‘Ä,Ui:1•=£\È(|
’g§Šàádâ°û*H‚Ýƒ’é”Œ$Ø=Ý’’½Ý‹ÁîÅ]ŒáGñÐ–°{Øý)»YñèKµTÌ˜È§:™•šyÃ‹ÚËL“…ÝWAì”L§d$ÁîÁìc÷v˜»¿×î-æîa÷°ûÓæîYŽï5,F¨â$R½0ÁHI¼‰œDæÔAì”L§d$ÁîÁÈ4»ÿ@$F[�Ta÷ŒºÛ«¶Ëò@a{,î[³”°{Øý	vÏKIEf"cLˆÈ]â–ªè‰b1S"¢ã>H	»¯‚$Ø=(™NÉH‚ÝƒÌÝ’’#ìž	yÔnVm9ð�»‡ÝŸ²fc\{¥¬c–G)£0”ñdeŠÒiG‘$²¤`÷U»%Ó)I°{0»$$ÇÌÝk¾_ïþÞ¹ûR<Àîa÷'Ø½‰Ü[Ë(A(g×AÄ©Ñ„YfËéXï¾’`÷ d:%#	vF`÷€d€¤·{nè.î¾ÏÞ™»—ò»§TP`÷°ûìžûPÄÞ)ˆ!ží™4–hm
-fO¥†¨»¯ƒ$Ø=(™NÉH‚ÝƒØ=  ÙÎÝK#ws÷]ö®ÝkµÇâ¾Ý¬J9ð�»‡ÝŸ`÷‘¦âõšRÎd¹>Î‰•9‹Ö8–I6kcžª­|L†Ýƒ’qJFìŒÀîÉþOÏÝzó*-bZ¥ø²Œ_­’{Û¿n·Ñ» >{ˆ
Wl’Ÿø·å€
ÄâÊ·Jx®´'ÉebÊOÆS“¨Éi£¼ó’Á¸­ƒ$ˆ?(™NÉH‚øƒˆ?  éíž*»ÛÆ¶Ïò@5ëÂxFx0ÄíÀîkl$’O²^fc…&)¹¨QZ{á½—:±"ù‘ó`÷U»%Ó)I°{0»$$[»×b´ÓgïÚ½é|<üWð€ål$’/%k—ÂÏ‚Å¤£&+«RÖÊq®³Õ„(ê¬ƒÝWAì”L§d$ÁîÁìtvß®æ¡z»ßfx`ÌŠýRø÷ñ ©y`÷°ûS6º"’»`)gÁC”wDž‚HÂk+³ËÔÇ¤0w_I°{P2’‘»#°{@2@ÒÏÝKÑ†Ödy¼Äï~º'î¾-`÷°ûì^+ï™¤
¶OÁ$žˆ¦†ACt’¹"úEî=–Ó©ƒ$Ø=(™NÉH‚ÝƒØ=  ÙÅÝïËì³‡<PA÷‘9÷.…_ÊØ=ìþ»·Œew‰C¤Ö2Œq.Y\i’®d9ƒÝWAì”L§d$ÁîÁìlí^ÚÝÜ}Ÿ½c÷RÚ=¿m÷Z+Áìv‚Ýïh1{&×D8Ã<±T!‰UYk)2ñ™`±ÌÊÇdØ=(§d$ÁîÁìtvOKÚÚý6{ÀeÛUtÆxà” îv_c#y8»w:ÆL'É0šyl×À”Tx¤ BZGˆ*Â/`÷U»%Ó)I°ûÏ‡‘ûV9‡øƒŸÑ>f»áû=°ºì!Œ0¾Çâ¾=°J9ð�ñ‡øŸ´“ñ$¤D¥ÒJÉ˜¦Ê:¢µ²\ÐèX‚øWAÄ”L§d$AüÁìôÓúÄÊíRøÛì!Ö¨Î÷Çì¾-`÷°ûì^	K£w‰{­]òÊd£K”Ú;”÷"%^Ê+Ø}$ÁîAÉtJFìŒÀîÉ�É1s÷LµXf[<Àîa÷§,–écÐJY¦ƒ™)*$—’ä <•ÙÏDp¹û:H‚Ýƒ’é”Œ$Ø=Ý’’Þî9³vk÷}öÎÉ/åÀìv‚Ý§“ˆ6†˜ct.'’K^Ÿ1Ì{î<7,bî¾’`÷ d:%#	vF`÷€d€d»œŽ »¹û>{ÈUv¿þ}<´åÀìvŠÝKAu´^r’âž	½RÁ«D<'){’LLØÆ¶’`÷ d:%#	vF`÷€d€d7wo¶q÷Ûì¹{ÉŽâ¡-`÷°ûS–Ó	Î2b£µ>D©£BDIJFÍ­Ì3&Ë¬ƒ$Ø=(™NÉH‚ÝƒØ=  ÙÎÝ—·´›»ï²wæî
Ù/…FH¹{Ø}äáì^ÚHs.sætLTFe²ÜIJ’	NJ³ØÆ¶’`÷ d:%#	vF`÷€d€dk÷Ì²ÝwÙ;vÏ„ØcqÏš9B
`÷°ûì^L‘û¢øœ-¢Úí•†¥DSùŸ2a÷U»%£”LYæ|$AüÑÉ@üÉ�Év9JÉn9.{Ècz/þ÷ñÐ–ˆÿ)Ëé$F2³^‘Hˆ“¼
ßÑ†øìcŠˆœ¡Žzˆ$AüAÉtJFìŒÀîÉ�É1vÏEÆ3j÷¥x€ÝÃîOÙèJ¥˜²ö‰“œ‹áSË¸ã*FMŠrïrˆÄÂî« 	vJ¦S2’`÷`vHH¶A;\ïƒvºì!TªcBò»ràv»?)$_SHâ&FÍr°ÖO(ÏÞ&ZŽ*îƒfA;u»%Ó)I°{0»$$»nùÞî»ì»Wf¿ÑÕ}!ùm9ð�»‡ÝŸ²-a‰r›	cÁ¥ƒ%"å$¤ã1§”„·Tf…Å2ë 	vJ¦S2’`÷`vHHvvÏv‹eöÙ;vo$?†‡¶x€ÝÃîO‰ÌÉŠ[<£ÖE—8
®]WÇš(’sšë$ŒÒq÷u»%Ó)I°{0»$$ÇØ½VÇÄÝ[b,žª…Ý×ØHÎîƒçšÑ`xâ6e¢e,¹\Úó4&ëm¦YEÌÝ×Aì”L§d$ÁîÁìôv/-å[»ï³‡<(%÷‘9÷ñÀ´x`÷°ûìž™!:¦`e<K&÷D(™#)Š²ÁSµ•É°{P2NÉH‚ÝƒØ=  éí^µ³û>{Çî·«èŒñÐ–°{Øý)q÷Á‹ìlÊ<{Mñxé•‘o©¡ª\2§,
¶±­‚¤)‹œCüÐÐAüÁÄ|¼Óô‘:”Ú]ÐN—=ä2uÔ´~[<@ü!þ§,…/¼ž¤¬¢uQÊu°B„hR’ÔÙ ‰rÉ3ˆ$ÁîAÉtJFìŒÀîÉ�Év)|Ëån)ü.{È³Lì±¸g9¶x€ÝÃîO°ûäQJ0Íbt†{ª¥•íT>%Þ£¥TEï	Bòë 	vJ¦S2’`÷`vHHz»çLí¸í³wìÞØ£ìžJŠ|Ø}äçîµ3ªÄJýg®<	NS]Îkâm&fM°~$ÁîAÉtJFìŒÀîÉ�ÉÎîå.2§ÏòÀ%=j±Lð�»‡ÝŸºX¦Q†pÍ#a)IEŽ!Ð¨‘ÌF¡™tÆ+'a÷U»%Ó)I°{0»$$Û¸{awÜöÙC¨`ûÅ2ï›»—Z!2v_c#yÀml³:qžKÁ+šƒd!æU‚*®˜ÊŠ0»¯‚$Ø=(™NÉH‚ÝƒØ=  ÙÚ½$fg÷]öŽÝ+sÜFW¥x€ÝÃîO‰Ì‰Q¤hMÚ«ìµ V)«¨Œ>zÊwÒf¡ì¾
’`÷ d:%#	vF`÷€d€ä¨¹{ÒÅêŒÍÝ·åÀìv‚Ý›Ä¸LLE’5a™¯s œ²À5–g-MÒÀî« 	vJ¦S2’`÷`vHH¶vOôÛÝwÙ¬%b?wÝSjžª…Ý××Hî[Àü!CòI’’q%‹Ò©ƒ4BKo…ÖIZ–­N*LëWÄ”|%#	âF þ€d€¤Fg½øo³<0JÕ1âß(*!þÿÉÃÙ½–J:ÆS™I—åZ¸´÷,ø¨´IN3ì¾
’`÷ d:%#	vF`÷€d€¤³{#¬ØÚý6{Àƒ&FóÀmW<Àîa÷'Ø=SÔÒ@Sñxå²·ZÖÎå’±å?é„SØèªò1vJÆ)I°{0»$$}ÐŽàj´ÓgyàJtGFìž©1w»¯±‘<àFW!™’ã¾8=‰ÎØ$,·TX’£K*RE¨%v_I°{P2’‘»#°{@2@ÒÙ½¢L’Þî·Ù$ý;#vß•°{Øý	vOLæR[#s²J¥H]2.©‰+WÕ*Ê!q÷u»%Ó)I°{02Íî?gÝ�$5Ø}£¥ÝmcÛgïÌÝ"÷Xô°!`÷Õ7’‡³ûØî^+’ Ž£²æ:rnRt2K—<'\`÷•É°{P2NÉH‚ÝƒØ=  ÙFæ(½»ßfïØ=ïÍÝ‹®`÷°ûÓžªÕ1™‹âk¡¼
‘Åœ¼”1ÅÈMV9ãDv°û*H‚Ýƒ’é”Œ$Ø=™f÷ˆÌ©Ùîµ»¸û>{Èƒ0ü˜¸ûÆR…¸{Ø}äŸªµVå`8	Á&aˆ‘š9é˜ôÎMb
’$“ì¾
’`÷ d:%#	vF`÷€d€äˆ1…ÒûÈœ{xèÊØ=ìþ»ÏTDÏUÒVZG•§Ò[£Ñ,Xš“:Ÿ)"sê 	vJ¦S2’`÷`vHHv‘9Vî#sÚì¹{­â¡-`÷°ûS¶±•Ô'EÁ)ÁŒ6^R%µ2F&‚öNä1w_I°{P2’‘»#Óìq÷5Û½%mðÍAönß‹ÌùÐSµŒp‹ÈØ}ä!ížQN2Ñ4Hí#%ÖQáã"3Îlô:‘”†ÝWAì”L§d$ÁîÁæîÉ�ÉvÍ-vs÷}öiØ1+bvåÀìvÊŠ˜ÖE‰ÐAz¨š0%y^ÂçRžm„ÝWAì”L§d$ÁîÁæîÉ�Iw/l»¤ýAö€JÌq+b2F1w»¯±‘<àš9,8³u,+Î<^šìs2Ìfm£ŒL¨ ’…ÝWAì”L§d$ÁîÁìlãî-ßÇÝwÙC˜êgóÇæîÛràv»?e½{é‰F{\"Ô¤¤y`TH"˜KÒE¯4‘
s÷u»%Ó)I°{0»$${»·ƒÝÛ»<0¥ù‹ß¶{¦”Õàv»?ÅîcpT3!H$Ä°ÀyÖ*ÇFùÄh"[»¯‚$Ø=(™NÉH‚ÝƒØ=  éížËVØ²‡<Pi,î‰Ì)ÿ,`÷°ûì^x™´íB9,ˆ¨Yd)
!¹UŠr)…
‘—a÷U»%Ó)I°{0òQv¯a÷UA2wëÍ«´ˆi•âË2~|µJîmÿºmH>a„oCòûìi}©»ÅñÄ_•¶PøCüO*œ Â«(¤¡™M2IB•×:Ké
ç™xˆ$AüAÉtJFÄŒLÿ÷3]@ò©‹K7—ßØvÅœƒìT?Ñ`÷Ú±–#$v_c#y8»WÔhj]Tkh*‘“ãNEk•9	B‚ÝWAì”L§d$ÁîÁÈGMëi´�Ég`÷Ìè==|ÈðPÊØ=ìþ»—Ú“´òÉp!¸	™f!i`13!½R2eÍ…‚ÝWAì”L§d$ÁîÁæîÉ�Io÷”¨Ýr:}öVóÀ­bJÀîa÷56’ß´û¿i>ÚïSLB;ÇSæZ³Hm”TibU‚Y©´U,/á÷u°ôuyýW)§Ëyóèo5³õ¦)òu[0X5ÙÍ×á²¹HåkùC>-še9ŽJÿÔ+ýír±Ø¤f1—›R½ùfKÝÞ–K·´x‚êÅ ‰Aó¤A“3Xž‡ìU^{Ê?^iM²RFPâsO²UÂMš41hbÐüˆA3˜¨¥V‚™ìmù?Y^ÆH!Œ±¡/#¦7.A³–0hbÐÄ ‰AƒæÇìf$½ÎI-,å„E¥C*ƒ¥*º¬¹+‡a‚cÐ¬ƒ%š41hbÐü|Í¿ÎÔ‚¹ÈL2š·ƒ¥–0Ãbö<J*“h†Ì*HBÄ"(™NÉHBÄ"AÄ"  Ùn"¥ÞmÒeyZu›†ŒñÐ–°{Øý)‹ë¢d‚‹2ÞF¯S”+gR»	`»ˆ°v_I°{P2’‘»ÿ|¹o}Xˆ?øíc¶*)Év*uÙC¨äÝÒ#*uåÀÄâ‚ø;©Û½731Ö
c	ÞEMMYT]žBü« 	âJ¦S2’ þ`dšÝc™±ªíÞŠýB]öšýzáî
Ø–°{Øý)q®ZP’’*»O$e)™c"ûì¥‰:+«„¡Ø"¤’`÷ d:%#	vF0wHHz»g¤öƒì¹{n:ß›»°{Øý©s÷‚©OYg^¾Ï™#!¥OR0JE2¥Ufe`÷U»%Ó)I°{0‚¹{@2@²µ{ËéÎî»ì,{,îÙ"DQŽ¹{Ø}äáìžˆ uš[j„pRê ¬72IÆŒöD³ì"±XØ©’`÷ d:%#	vF>Êî1W[¥ÝS£Å.2§ËþÊî,î‹Ì)åÀìv‚Ý3*5×Qˆ¤rQy©dòÙ‰TÜdí²¡™%l�XI°{P2’‘»#°{@2@ÒÛ½¦Úní¾Ïò x‰³ýé·#s8QËéÀîkl$g÷Y†,HŽTÉ³"É,’òìu9‹¬	CdN$ÁîAÉtJFìŒL³{ÄÝWm÷Dïžªí³‡<èí*:c<´åÀìvÊæÞ,%¯SZ
ªˆ¡&1k©±‰PgbL6eÊa÷•É°{P2NÉH‚ÝƒØ=  éí^‘9}öÎõ1s÷”£ÀìvÊRøÔ+ë£uÎª”MŠF§¸,½¶µÉ;©¼ñIØ}$ÁîAÉ(%S–9It2ÓÄA;5‹?¥œïBò»ìL¿ÀÎˆøwåÀÄâ‚øû¬8‹¶4:Ñš‹˜¼ŒÖXk\VI–ƒâ_IP2’‘»#°{@2@rŒÝK3`ñÛv/•’àv_c#yÈiý¨xP‘šä¡^&™rR2Éub.‰@¤ÏØèª’`÷ d:%#	vF¦Ù=‚v*¶{Ê˜Ýíl³‡<X),î™»oËØ=ìþ»WŽ)Æ”ÓÉsO²v‚x®¹WTjŒ×9èì}„ÝWAì”L§d$ÁîÁìôs÷V[½»ï³wìžÐÎ÷Gí¾”°{Øý)ÛØ¡çÙx!¨áL%'SÒíW^G­
ŒäŒü:H‚Ýƒ’é”Œ$Ø=Ý’’mdŽ»mlûì!TÙ.VgŒ‡¶x€ÝÃîOÚÆ–yç(ÉV&%LÐ$:I… >qê—Šé¤
–Â¯ƒ$Ø=(™NÉH‚ÝƒØ=  éíž3¾[
¿ÏòÀ¹:j±Ì¶x€ÝÃîO°{š™aB¨ ³É9"J.ê -×‘Y—Bù½v_I°{P2’‘»#°{@2@rŒÝK}ÜÜ½–oÁìþs²{ðŽªEÕ~jU[®¾w}=ÿ¥Œ^³‹År•ß^Î6©“¥&Ù(H¤<ÉÌ3†Ñœ¼Ð”Z§9KDÆ£Üu`rZ}Ÿ3}ÞlVn6Ÿ-.š›'�á“Wá'Mó|±.—Äóæzv
ýÌZ¶àhÙ¸¨AëøÖ!Ð:>³¹ä¿¤Ÿ¯—«MóâÙ<}ñâ‹Giño^?yóÓ·Í£¿ Þ?³@Rt�5‚0mo†¿´Ña¾\¤Ñ›ÚOÊ/Ð]|vÝ®“ë½NþÞ½MÍæ2µ=ÀMlfWmìAù4›§ß?G
úM}µZ®Î›®!7¹´áÏ›PÞPZlÎÒâ,.Ãúñ;y6ëgKÜf¶\<¾¸™ÅtæofóØ6ùŽ‰uÿóãeaeõøÎ¡Žœí¡'WñœRpS	7LÊ–Ë¸Lëf±ÜNåž1xð¡|‚-jâ=,+9•I+=‹ÙÎ
e:(íLð^êd¬Î`‡õJ09­¾q«ZpëónÙ¸‡=BëøÍÖ{Xu‚€{Xè�Žé�pëóë�p£
}Â½}.†ë½Æªªk¸tÞ‹ÒlÏ›õÞ¤y¸L±Qm¸énH¬QÏÕÔ3¥Mé§Óºq1¾_ÑhÑ˜æ¨ÿ©w¬Q,(Ê¸öAY#D•­ÿì}ûoÇ•õ¿Òkÿ°I RU·Þ6ÀÚ‰½þ°N¿A@·ªn‘
g˜yHÖþõ_õ¦$ZT2”½1»!ÉÃžîžaÝsÎ}UWeÍÉ¶$µ¸–ÑwÀ·¹c…zÚPØTml†'­=‘–êUR>esBu"09ÎÞg¤4Nßödñ“/þüÍÐ³‰ò|{H/år½y5ðªg«ÅnÁËÅÿÊõ[ÏåU^ó¦>9ü´-‘Õ“Ã™‡™LÃ•lWý/·§Ãÿ\ÈêpÞáÚbU¯oÒ›ín¸è·êbûüú^y½Þ
ãB=²99ùüOß
ŸýÝ'*r²ëiívX¿ÍéðÙf}y¸àëoO¯¿þŒýjÑ=?êà>~yyøØCùkø´Åo‡ž~YÞîú?|üFÊºßô7_~òõoßùëoÆ³®x³[Œ3»†u»>ÚO]_žp)²Ýþ8zùÕ°ßæ{õ{lêé0Žt•‹2~æª'æ›'Ã¾x2\mÖ/µÄõ©ÃËÅîâpãºYôß¹ß
+‘ñ7[7Ÿrxûúnãü3^Œ	ÃëïØýÞ¾ê¿Úåéð_²‘ï ¸àÝáŒÛáº³ìÑ¯«}.eµïV^w¤.Ï¥ØðÕÁÅ
a‡q[ô¯W¯e•ãêÖh¼Ú¥ß¶ñáí¯ÿóËªÎ mÓI£Yô˜D,@L�™À}™@L*µd•èr¬D–zîì÷ä94"U™‚bL`09ÎÞgDÈ	ük2‡L�™À«È mÈ	�ýÿúš	(6%æ˜´O6šêXG]ª'álŽ¹Gˆ’–âwÀ;Ü	ÑpÉ¹xÄx)Öx–ØrÐ$.ê6/Á6©›LŽ³7úiSÂ»'fÿúSë7ÙÞâÜ¯^ï[»ê÷¿|‰�Y7´ð—tŠx˜w¢@ø·¿Žºü%yS>þö›ÓÓ§ýÏÍb8ç›}>Ï<Ï<}ÔéÕêü·@ÃcGÃm1Ž0¹ýƒAy„èèävfU]1A¬s©X2%éd
eeŠ)lTµLD((L&ÇÙ…ÉaŒœV²{¹Þ<ÆrBOâžŒ.=ÕÚ²âžu×1¾IºžÛ]ÏÇî¦0pÙ
cÞµ=þ²Þß¤Æ‡7ïÜúuF}}U½Íáú}÷ý3y;<»yëäæÚúìÉëcÙ®—/d<6&wÏnÎ)»å3€}T¡ÛÜB·Ê>™šµ2¢¢¨¬MÚ6
Y1{ª©å\Á³UÉqöFè6Y  t5`Dè†Ð
¡Û‘¡›qELmÊ'®¦ym*yÓZ-Ñçtä¨SÌª t›LŽ³7B·É¡Àø«#B7„nÝŽm˜ß¼41ªúj4U×mXtv!fË*‡¦º7Ï
¡Û4`rœ½ÏÈ!t›&>þxøïø›~«"XunÄ6Øôb²Ä~“Ùþþ3˜tfÜÆvOSæö÷_Ž}¾—íî‹>Œ0êÌØíPMpH.y~>ZöÓëýW={ÿ¬{¿A>;ª{éÓ¥ú×ûÕ›$ÿ’W{^bËò	õ!Üú CcP!úØ‡qm«Ï!Dï“\¶¢Ø7ŽlŠÃ^a=Õ‰Àä8{£1Y  1kb£1]b£1on£1en£1ov£1å}Pý–êèCL˜êèCLÔ¶èCüL†Æ <Bô?°á$z#.{ÛUë8GÒ-²X2º)gZH5eLŽ³7ú“úS²ç{—€?’óhQL—óhQÌÛŸ£E1en£E1ov£E1åh-
Pý–êhQL˜êhQLÔ¶hQüL†Æ <Bô?°E‘3Qr±¦”Š÷Ù³©$©E1ìbènÑ•#´(¦“ãìÕ6'„	}º^µÅù~Ã‡=_ÿø_^-‘íÌŽã&‚ã3áøg|~·Ÿnårµ\ÞÉðåhlÐ{vôvôž,½ÿt³j=<÷©í5¨=Uj<<ûëÁeÿíÌùØÍyÛ{Øþ}/Ë†ÕA›Ÿ6`èÉZGt™>ÈÒ”Gÿ‡v™ªªÍyŸL!ò-“6ÖU›¥8ÓØ÷ÈÇZvbÐešLŽ³7ºL“ºLà8ºL3ã8jUs$8ºL&8ºLs§7ºL¦7ºLs¦6ºLÓ¥6ºL2'ºLs34ºLhiÊ#„ÿ»LÁÔÜÿ_ƒóc¥htåšg(GÓc×´$t™¦“ãì.Ód€.8Ž.ÓÌ8ŽZÕ	Ž.Ó„	Ž.ÓÜé.Ó„é.Óœ©.Ót©.Ó„Ì‰.ÓÜ.ÓZƒòáÿÐg™¨YÖ1³Õ‘¤ÒÞ¨ªmÍ6–èœÊ±e±bÞD`rœ½Ñeš,z”ûÝ–Ï–œ¥(=QJ_õ%Ì83>£I
Kþš-ùÞ÷nËU‹Â�åJÜ«THÄWŠ•ˆ¬­†Å$íkVžjÓÊV6¹8‡ªÅ4`rœ½Qµ˜,Í•Ò¨ZL•Ò¨ZÌÏ¨ZÀEÃ’¿nK¢4ñ3ƒòÑÿÀÒ„#2!{Ÿ˜’©ÎU5INªãÀÊ+§*‰Gib09ÎÞ(MLˆ{æJi”&¦Ji”&fÈg”&à¢aÉ_·%Qšø™Ay„è`i"V“S"M¶XÏ‰s(¶–ªcP”(õ\fe5JÓ€ÉqöFib²@èqÏ7_ýñÓÃR°æÌhm,h=YZz!åù°hÝ¨Ï{n3,¶Ã¶û~©0ðÌ˜îP¸˜ÓWÃâr$úo‡ûåJ6œ»Íw,C4;Ê{åçàÜ?ýþ£cÿlñüúüHŽe§Kòo×¯yþ”~ÏÝ«á»«Ê»±ª½‘á?_tËsFæ>¡®Åk‘ý¤k3OÆÌÍ©24å¢ÿÍ)“K‡btVE•M™\L*„u‡´Ë6*ßÐœšLŽ³7šS“šSs¦5æÎN—ÖhNé·LÇ¬ÚY0Í)PþGÊ[4§fáÜÑœš3ÉÑœš.ÉÑœš¹o»]‹24å¢ÿ]‹ª¥»É µ!§µmbŠo†jŠL”¤b²Ø>e*09ÎÞèZLèZÌ™ÖèZÌ#çáá«×‹oÐ¸˜#Ù­ÙgAö¿ô[_ºÿÅÛá{t/æÍ{ÞÏÄÉ£1gž#˜ŸÏÑÀ˜²¹ÿ¹MÖ^?xC?ím�ñ·vèa}¡1(ýÝLÏÛl|ÈJ¸©ØŠYGÑl…Cô™³#e©`3=pÜ¹»¤¢j©f×zB”×¢£!Ûœ³BBÕ˜VÀpÜ¹óÄ§s4îsÞ,U	žtl>yiÁ³1¡¥ ”×œÜwÀ·¹“•3\’6T²ŠªGiÊ#ÅŠÍ!¹ÆMç*~Üwîp'øœ)U5&9R¢QAG­.•»Kê4êÔÉXi`"09ÎÞ˜³7Y üÛ_¿½ár]m!uøüOß
ŸýÝ'ƒÔ®—²Úÿí7§§O¯ÿžbÜ>=ßì3*2žs2žsR.xu.W/O¯Vç¿(;(nKÆúP2+Æ[”ŒB!„zO•ˆZ1,ºg.„¢)•™%¥ÂZ)î/
!„šLŽ³÷™Æ”Š¹‡PˆŸ?!~Bü„øé]ñ“Ê¬»/%Ç9(Ë‘²JÚëTò-g›ÊMá±QpÜ¹Ëµ6ÍFI$ÝL'¨8m3gµu‰•òNÜ™LŽ³7Ê·“Âs‡Ü¹ø	ñÓµ[•UÑÎo£#
Ú'N¥¦äºsÕ•I?;àÎÛÜñ6é€ŠÉ!°d[ªS&ô ´øœ­ˆ±ž<¸3
˜goä“ú@ÄÛˆ@îø	ñÓ±ÓÖs-ÁûD¡ÛÈkëŒsª›µk¹{Ö¢¬±È=&“ãìøi²@øøãáÿõÛ¬xYvK˜sn¼Æ|°éòúÓåz_O«îøÿ{}ŽETæFnlì5arój»\ŸÃ”3ã´
àôd9=zé¡ÞðõW_~3¬WÃW‡ì¶}ì¶½-IZ¬~öA†Æ <Bô?°$)µŠ­©–Újen¢ZíJV‘r6œM¤Š–îD`rœ½ñ(Ûd€’ä4ƒôcüÌýï]ûú¡q‘³:Ô”ÉE¼ÉdCÍÞ—ìEe£¤e%±
Vç›‚z\t”½ÏUßéÆEhéÌ›Üåßé’-YrÚzp-ØöqÙö¶ªaÐÒù CcP!úºBHáD*Õ”r©Î[ÒÖV§úkƒI®P&²«ë€;àÎî¸T•'æfˆCíª-WÃN÷p²°sª¶y‚;à¸ó6wºw‘Ø©Ó	dŒ
.z¸fí"‰hé5Å
î€;àÎ'…T£”½ªJ±3cô¢Ê­‡jä•m"J³Îà¸îÜYÑÇK•²ÕZçNdØx‰¤X‹×&s+U%pÜwîæ;ASQbb­ZI‰UVÚ´œzÀf¢7¹bÄlà¸sw5,E¢MjŠ¨DåCIÊJëØÔ¯‰ÍI»æ1EÜwîÆlÍ›D%“N\YŒ.<ÜR¬V˜ƒ	b£„|Üwîp§dH—hÄ$)>ÖqISn*&ÊºJÊ©éæ+ü¸îÜáE×X©P¥D¯É4G¶ç8Êz×*©¶–Q+˜
LŽ³÷™·˜%;îaæP‚óaÇíäCÂäC nèhQ´dÛ8I3­'£±;—}(U—œtÔž‚•æ"&‚;àÎÝI 6Û’•4_W«´	%Y[jqšSqÊ³dl+î€;wŸ×Ï¢¼·¨VŽ&ëà’}V™KÎùN…¢(¸îÜõ;cÑ^¨·ŸUá Sí.ˆsP9•k
“@Àpçn#;ú¨L0UQÒTµ­–¢k(ÊQª6ã˜=;pÜwîL>Œœ‚Ó˜¤d¯[qTj“êµ·ÚO¾y…íÁÉrç—Xº,×j¥&Ö²o9X•¼O^»škÖ†3»Ô¬W h5QZ=˜;QÈ8!_UOx¨QÉ¡e4Ã:&Ó‚µZ\wÀpçN*¤Ä92±:ªŽ}©ÅE\N6q‰Zö|³ð;à¸s‡;ÁyÇDÝó4r,Q›`YJÈ¹» êC°âŠÑ
ÜwÀ;sz½Nºhé,ñÜr
.Òè‡¬RãJHŽ-{´MÁpç'mÓ"Ñ‰°É1ªrLb“IÚ&Õ*‹¯Ú+”wÀpçmî¨ØŒ)º&É{©ºÇm\”Š·¾MQ©ˆ|Üwîp§Ž3
¬XÍZEß‚	Õ˜(•]ëéO6Êøè
¸3˜gï3£ñ¤	Dt6ìÀæ]@?BˆcK¦¡J,­û•`}ö¥Rm’«R+)ÝcrŽlfü‚;àÎÝ’iJ¾•hT)IlTÑbÇä2§T•â”D)à¸î¼Í¦mÍÆKH.±öY»œb ¨$Ýˆ\’›Fê:˜go¤®å²©+ÐâØY¦Ng	ÍÖRØ[Š!f§½\Ï]m	¹'®¥"üwÀŸp‡´QM]\ÈU«”Y&2¶‘¡TsÕ
v7wÀŸÌXH½V6—}ÑÖEÞ™b³µÊxcŠÖ¦%<è
î€;wÛ
TXÕ–˜š7ãBËÙÅ–›DJ-¤êzÜæ‹¬;˜go”}ÊôÙá"Øv€ïf‡;À°ãvv€`Ç=ì °ì˜
;nÛÍÛ¿ïeY.¤ö§íf€2vNØ{*7/ôÿkÂU—•·1dSX”Ž"ÁÒÖ)K,ŽköA9ÎÏ$´ûýqö>³Ø÷l¢@øËz?^u/ºÝ
»6rÕGs·îwÞùÕ°ßŽ6ßy¶««vx<ùÙPÖ——¼ª§Ã·ãñ¶XîºîÜÜcÛíÙ?v±»žÉŠóRê³'Ã³ºØþøº_9<ãåòÙéðõ~5:óÃ¥77=\ºÞï†í•”E{5¾Ý¿%oÎ÷—²ÚõOØí7«ëO»¹ÿ[ßüÈœ™D¡4U |Û9¾\^v¡êÝ°ØWë«ý’wr­Cåm³¾|[Á^=úˆò_^-’0¬;î}˜¡1(ýMíjaÈZU•ŠTŒ).%ÏT”>i±¶%,Yî€;w¸c³kÑ¥ñé*¶ª$ÕZg’÷Ú8gS©&2–]LŽ³÷¥€¤c’H~¸\žlù]m¤KÇùè÷ÃÍ'Ã³““*W²ªÛ']8duÁ«"‡×ë¼]/ewýÃÕfýbQ¯_od¬m\_²‘¿ï›ñø¯ú©2žµÝŸŸËvw¸b»ïÂ$c½cûìlèú5¦7ýß+Þð¥\W[Ö×•›ë2É¢'D×_KVe!ˆ„g¨H˜+†¸ô¸‡F¡J8Q$üîwY_­·¯Våw¿;¾½Xlo›	ãÁ‹Ízµøß±fÔ}îåz÷fðºŠÈ7UÆõJN‡O^uOz°æ“—ËîsËs>/ßô”zýrµ\síî¶;à¯«Ý—Ãíö«¥lÍ‰Wýâp}5ÈÝOŸ¾Ú-Ö«~ÇWO†îÃùPºì_•—Ûõ÷ ç'MÒ4íëþ:‚Úz¹\¿Í¼>¨ÁöZÞh¢W1?úc¢îK	‡BÂX/¸Íð{0p-cl1†*/dX/ëëdwÁ»C²ZïÆZÀnX·;ÏW¯†Ëõð™PÓóõ”fJ˜Ó<aC‹ööYƒòáÿÀ¶lµÍ¾Zu#ek”(A)ísÍ¹i*£E7
˜gï3VOß®‡¶XÕCä{(ÀÉ“a³_]OU¾>PvËÛiÊH©§ a-YÄGˆþ¹øÈëtb±:.ºZ/ªUaÃ¾¦hµkb]éñÑ$`rœ½MˆæfqÄGˆ¹U”à³Dc­‰¥éf.TY—½wÒ‚±ñÑ4`rœ½MˆæfqÄGˆý$>úxx„$Ul`6ÒLTuªNû ’¯ÖRr>$OUe‡i@ùC¿þir±>úø£a|¼HV»—›¡ñr[.†séÿöÊ²Öý8ŒþØþ|½ZídX-ÊÅ®›·íÇgÈ†—²éÿƒG„Gœ"æì
¥ž/–lJË^lî)eé¿™A5ï£Õ*·j#ŸPàááááïóˆ%ÖàÂ¸WmË©ÿ•dº´6ÆTúñîsä¢,<â€òÞˆá,á,á,á,á,ïÝ*Ôe¶Ì.Ø¤¢êC‘î$ƒõ•[0ÜEÖÀYN(ðˆðˆðˆðˆóõˆÿ y–¸R”Ìè	]IŠ"Õ–MSZ±²¾©	þÜwî¬PkW×ƒE[J#›SÍAšÕÆs”q§„q™‘\¸3
˜gï3Âzw‚>¾Xmw‡µéWÃ¸Ì]]—çý®tjN<7¦cáW„K`Ç=ì0ðƒ`Øq;4Ø1I Ü¿öà³1­,ËõJ†“<ô€q¸Øí®¶gOŸö7.öù´¬/Ÿ¾¸|Éyz‹žö7žs“i€ãœ
;Þ±Ø¦ÅZ›¶sÂR›P¹¹¡ÿ½v|0MÅ”lLV•Ì5hÒRŒJ•ª?¼Öè5L&ÇÙûŒ°‚=Dì¸‡¨@NÿTÅ•Yh6¨‡Gœ/ú˜V„`µÉÕ×îHEIsŽ˜lË-»XCóÉÛ¨±‚ÿD`rœ½‘V<”é³iÒ
¤Ð„75Á¢g9v¼Þ7I7Ð?7ô?´—gu÷$ÒB3ýß’
±*µûq–´¶µRÍG$Ýà¸ó6w”-¾h&éh-;ŠM9:qD1d¨qU	‹;àÎîvÁ„j­øÖ‰â¼“ÜbôU9obÜÆ]=ÛmL&ÇÙå¬Éáã‡O×«¶8ßoúˆ^ñ°Ýw‘X^í†±¸µ(#ÏíØ\!Øq;¬;À°ãv8°ì�;îaG�;ÀŽÙ°ãmƒç6§fè÷®;ÿº
Ñ†ÎMXo®4«ZÕÞ•b)YqR’±N›Æ¬¹5Û‚"ô'“ãì}f0ùz¢@@=l¿ËvT2÷²ÓªÁ°ã>v âv€÷±3ÀŽù°õø¹EwèÜüàÿÀ¢»HL>8«½Š:
¥¤c¥9Ö*Iš6(ºO&ÇÙûÌ¢è>Q  è¶ße»CÑ!Øq;Pt;ÀŽûØ¢;ØvÜÇÝÁŽù°ãEwÒ(ºOØÐäQt‡ÎÍ
þ,º[}Ê51'/-¶âueo\/%Éì|ŽY¼BÑÜwÞæNnÞPMÚ˜PE…`l•ìjŠ)En¾£VBIà¸îÜõ;Õ›âkOV³W:;qÒŠuŽœ	B,¶(—vÍ›LÁ÷Ùp°æÐx±”z6”þ…dµ{*«§u]¶'/ÜÓŠÛÝ†w‹õêä|¿¨òô’W|Þcû“•ì^®7ÏOÊM»ðpÒÓzóŒkžì·?½ìäp;Ùœ^Ö3­­‰@ë_¦t×uÏ=Wëõ¾ ]÷£m±Ú^IÙ'ì.äd»ãÝ~{²n·§/«çÛ“—‹ÝÅ‡Ên9‚- Êõó`	Â5ká*ëË­:âCN6Òd#«"oþ¢_µi=rßÞl¢s<)ËÅ­íÿb#ç{ÞÔè<½à¦«g¿
ˆAæŸýße‚†�
©%ðõ/’®kH™À;ß]©zäPzï€?¯Š+¨Të—CW @	¤éÿO”GH²¶è=“'ò$›¬Z`«²	&{”Ž1‡VBË¹¢E?
˜go<Gð` `P¦ÏoÁ°ì¸‡xBì�;îcG;¦	}:X¿\-×\^Õa±Úîx¹v2üéûE]ððõ~Õ}ÀoÞ’
Ì>3þðÂüÿôBÊóaÑœÿü«ï†Åv¨²“²“z:|Ã—W}´×ûÝÕ~w‹?v‹¿ãñs­ðøù„
­?ÿ KcP!üØcÅúbL‹ÙZ
ya'´¶’]a|!Õ?ŸLŽ³÷™Ñˆ„'ªcÜ£ÜCü×¼\Ÿ²Úm^ýí7»ÝÕöìéÓñØöôÅew¬rZÖ—O_l¯.d#OI‘yªÜS^­ÖûU[þ7³(×Ûw¢NÎe%^žð‹ŽÎ=»W§»Ëåo›é„Y‡(k²¶ˆ²e!ÊzO”Å–2³V-9ñ6– *;m­Êbt&ã<	Ñ#ÊšLŽ³÷™Wˆ²&	„á‡ËåÙÁ–ÿñÑÕFÆµôå£ß¿nAÈ[MˆþÓŒµõr¹~9B¡_øœÏeÛm†ïò~µÛ£"9;q@
†ì¸Ø”f^®óËZw7É«aÝ³ÏC
šå|±“Òa\ZcxÆW»“sÙ
'¯~ô¬ÏÆßö¢{Ýƒ+Í²Ûõo·ì×Ý'�—¹é†ƒnÌJ7~*
Ãó+Þì~è’Û~+'U^Œ¯7Âõ°ÆÍÏÛír|	`ÌM!0	q÷|Øñ®m0MfÂv˜%•›úØ¿Ñ"Yë‹k±µb•í¯j(!™P)±”þ¾+ý›iÀä8{£3U  L|°8 ƒì¸èßÌËu¢¸üºþÍ¼tý(Äq
þ
âîù°ý›™Ùý¨ÜìÐÿþþMg€ÿÈmüÞ…ôoÅï¿?^.z
eØÈÕ²_ò«áÓ¯û‹ÕÐCC_4“t´–Å¦8¢²
Ô¸ªd¯CE`æÑëÂ·cße1ŽæˆŠ~!Ã¢™õfq¾XñòºÎÔQÕÁ³òªæ0.P>&u±‘²[o°üøt¢£$±RtM’÷R5Kä¢\Pl|O1‹¦¨T¼Y€@ÌK G¯•
ÅåJØ®ä)6[«Œ7¦hmZºY1€@ÌK 2÷ A“ã”åHY%íŠu*ù‚³MåÖõ€@ÌP ´õòƒü ÿ,ÉÏVÛì«uQ7R¶F‰”Ò>‡ÐœËÑ˜!@  ˆ9
ÄQ“Y Ä¬‚´]
¬ßT çä£¯Êy[à6r³Z˜—@xtÑâû·ç–Sp=` ­R©ÿqlÙgÔ  ˆy
„ÍÆ‡¬„›Šý§˜uÍV8DŸ9;R–b@  óˆè+ª”è5™æÈz“•õ®Uê'ÛZZT	€@ÌQ Rò­D£JIb£Š.;&—9Ë'JqJ¢1G($â+ÅJDÖVÃb’ö5+Oµie+›\RbŽaœ#Ö17KU‚'›O^ZðlLh)(å5'†@@  ³ˆ"¦6åWÓ¼6•¼i­–ès
:rÔ)f…
# Standard Integration Example

This folder contains example code for a Standard PayPal integration using both the JS SDK and Node.js to complete transactions with the PayPal REST API.

## Instructions

1. [Create an application](https://developer.paypal.com/dashboard/applications/sandbox/create)
2. Rename `.env.example` to `.env` and update `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET`
3. Replace `test` in [client/checkout.html](client/checkout.html) with your app's client-id
4. Run `npm install`
5. Run `npm start`
6. Open http://localhost:8888
7. Click "PayPal" and log in with one of your [Sandbox test accounts](https://developer.paypal.com/dashboard/accounts)
