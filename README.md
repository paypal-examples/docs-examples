This is the README for the source archive of PuTTY, a free Windows
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