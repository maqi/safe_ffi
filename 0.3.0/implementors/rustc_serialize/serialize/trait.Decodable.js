(function() {var implementors = {};
implementors['uuid'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='uuid/struct.Uuid.html' title='uuid::Uuid'>Uuid</a>",];implementors['cbor'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='cbor/enum.CborUnsigned.html' title='cbor::CborUnsigned'>CborUnsigned</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='cbor/enum.CborSigned.html' title='cbor::CborSigned'>CborSigned</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='cbor/enum.CborFloat.html' title='cbor::CborFloat'>CborFloat</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='cbor/struct.CborBytes.html' title='cbor::CborBytes'>CborBytes</a>",];implementors['url'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='url/struct.Url.html' title='url::Url'>Url</a>",];implementors['num'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='num/bigint/enum.Sign.html' title='num::bigint::Sign'>Sign</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","impl&lt;T: <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='num/complex/struct.Complex.html' title='num::complex::Complex'>Complex</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;",];implementors['sodiumoxide'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.PublicKey.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.SecretKey.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.Nonce.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.PrecomputedKey.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::PrecomputedKey'>PrecomputedKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.Seed.html' title='sodiumoxide::crypto::sign::ed25519::Seed'>Seed</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.SecretKey.html' title='sodiumoxide::crypto::sign::ed25519::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.PublicKey.html' title='sodiumoxide::crypto::sign::ed25519::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.Signature.html' title='sodiumoxide::crypto::sign::ed25519::Signature'>Signature</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/edwards25519sha512batch/struct.SecretKey.html' title='sodiumoxide::crypto::sign::edwards25519sha512batch::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/edwards25519sha512batch/struct.PublicKey.html' title='sodiumoxide::crypto::sign::edwards25519sha512batch::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/scalarmult/curve25519/struct.Scalar.html' title='sodiumoxide::crypto::scalarmult::curve25519::Scalar'>Scalar</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/scalarmult/curve25519/struct.GroupElement.html' title='sodiumoxide::crypto::scalarmult::curve25519::GroupElement'>GroupElement</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha512::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha512::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512256/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha512256::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512256/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha512256::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha256/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha256::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha256/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha256::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/hash/sha512/struct.Digest.html' title='sodiumoxide::crypto::hash::sha512::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/hash/sha256/struct.Digest.html' title='sodiumoxide::crypto::hash::sha256::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/secretbox/xsalsa20poly1305/struct.Key.html' title='sodiumoxide::crypto::secretbox::xsalsa20poly1305::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/secretbox/xsalsa20poly1305/struct.Nonce.html' title='sodiumoxide::crypto::secretbox::xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/onetimeauth/poly1305/struct.Key.html' title='sodiumoxide::crypto::onetimeauth::poly1305::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/onetimeauth/poly1305/struct.Tag.html' title='sodiumoxide::crypto::onetimeauth::poly1305::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/pwhash/scryptsalsa208sha256/struct.Salt.html' title='sodiumoxide::crypto::pwhash::scryptsalsa208sha256::Salt'>Salt</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/pwhash/scryptsalsa208sha256/struct.HashedPassword.html' title='sodiumoxide::crypto::pwhash::scryptsalsa208sha256::HashedPassword'>HashedPassword</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/xsalsa20/struct.Key.html' title='sodiumoxide::crypto::stream::xsalsa20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/xsalsa20/struct.Nonce.html' title='sodiumoxide::crypto::stream::xsalsa20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/aes128ctr/struct.Key.html' title='sodiumoxide::crypto::stream::aes128ctr::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/aes128ctr/struct.Nonce.html' title='sodiumoxide::crypto::stream::aes128ctr::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa208/struct.Key.html' title='sodiumoxide::crypto::stream::salsa208::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa208/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa208::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa2012/struct.Key.html' title='sodiumoxide::crypto::stream::salsa2012::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa2012/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa2012::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa20/struct.Key.html' title='sodiumoxide::crypto::stream::salsa20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa20/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/chacha20/struct.Key.html' title='sodiumoxide::crypto::stream::chacha20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/chacha20/struct.Nonce.html' title='sodiumoxide::crypto::stream::chacha20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/shorthash/siphash24/struct.Digest.html' title='sodiumoxide::crypto::shorthash::siphash24::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/shorthash/siphash24/struct.Key.html' title='sodiumoxide::crypto::shorthash::siphash24::Key'>Key</a>",];implementors['xor_name'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='xor_name/struct.XorName.html' title='xor_name::XorName'>XorName</a>",];implementors['self_encryption'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.PublicKey.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.SecretKey.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.Nonce.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.PrecomputedKey.html' title='sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::PrecomputedKey'>PrecomputedKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.Seed.html' title='sodiumoxide::crypto::sign::ed25519::Seed'>Seed</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.SecretKey.html' title='sodiumoxide::crypto::sign::ed25519::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.PublicKey.html' title='sodiumoxide::crypto::sign::ed25519::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/ed25519/struct.Signature.html' title='sodiumoxide::crypto::sign::ed25519::Signature'>Signature</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/edwards25519sha512batch/struct.SecretKey.html' title='sodiumoxide::crypto::sign::edwards25519sha512batch::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/sign/edwards25519sha512batch/struct.PublicKey.html' title='sodiumoxide::crypto::sign::edwards25519sha512batch::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/scalarmult/curve25519/struct.Scalar.html' title='sodiumoxide::crypto::scalarmult::curve25519::Scalar'>Scalar</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/scalarmult/curve25519/struct.GroupElement.html' title='sodiumoxide::crypto::scalarmult::curve25519::GroupElement'>GroupElement</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha512::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha512::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512256/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha512256::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha512256/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha512256::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha256/struct.Key.html' title='sodiumoxide::crypto::auth::hmacsha256::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/auth/hmacsha256/struct.Tag.html' title='sodiumoxide::crypto::auth::hmacsha256::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/hash/sha512/struct.Digest.html' title='sodiumoxide::crypto::hash::sha512::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/hash/sha256/struct.Digest.html' title='sodiumoxide::crypto::hash::sha256::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/secretbox/xsalsa20poly1305/struct.Key.html' title='sodiumoxide::crypto::secretbox::xsalsa20poly1305::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/secretbox/xsalsa20poly1305/struct.Nonce.html' title='sodiumoxide::crypto::secretbox::xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/onetimeauth/poly1305/struct.Key.html' title='sodiumoxide::crypto::onetimeauth::poly1305::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/onetimeauth/poly1305/struct.Tag.html' title='sodiumoxide::crypto::onetimeauth::poly1305::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/pwhash/scryptsalsa208sha256/struct.Salt.html' title='sodiumoxide::crypto::pwhash::scryptsalsa208sha256::Salt'>Salt</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/pwhash/scryptsalsa208sha256/struct.HashedPassword.html' title='sodiumoxide::crypto::pwhash::scryptsalsa208sha256::HashedPassword'>HashedPassword</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/xsalsa20/struct.Key.html' title='sodiumoxide::crypto::stream::xsalsa20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/xsalsa20/struct.Nonce.html' title='sodiumoxide::crypto::stream::xsalsa20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/aes128ctr/struct.Key.html' title='sodiumoxide::crypto::stream::aes128ctr::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/aes128ctr/struct.Nonce.html' title='sodiumoxide::crypto::stream::aes128ctr::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa208/struct.Key.html' title='sodiumoxide::crypto::stream::salsa208::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa208/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa208::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa2012/struct.Key.html' title='sodiumoxide::crypto::stream::salsa2012::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa2012/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa2012::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa20/struct.Key.html' title='sodiumoxide::crypto::stream::salsa20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/salsa20/struct.Nonce.html' title='sodiumoxide::crypto::stream::salsa20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/chacha20/struct.Key.html' title='sodiumoxide::crypto::stream::chacha20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/stream/chacha20/struct.Nonce.html' title='sodiumoxide::crypto::stream::chacha20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/shorthash/siphash24/struct.Digest.html' title='sodiumoxide::crypto::shorthash::siphash24::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='sodiumoxide/crypto/shorthash/siphash24/struct.Key.html' title='sodiumoxide::crypto::shorthash::siphash24::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='self_encryption/datamap/struct.ChunkDetails.html' title='self_encryption::datamap::ChunkDetails'>ChunkDetails</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='self_encryption/datamap/enum.DataMap.html' title='self_encryption::datamap::DataMap'>DataMap</a>",];implementors['hyper'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='hyper/struct.Url.html' title='hyper::Url'>Url</a>",];implementors['crust'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='crust/struct.SocketAddrW.html' title='crust::SocketAddrW'>SocketAddrW</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='crust/enum.Endpoint.html' title='crust::Endpoint'>Endpoint</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='crust/enum.Port.html' title='crust::Port'>Port</a>",];implementors['routing'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/struct.PublicId.html' title='routing::PublicId'>PublicId</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/enum.Data.html' title='routing::Data'>Data</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/enum.DataRequest.html' title='routing::DataRequest'>DataRequest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/struct.SignedMessage.html' title='routing::SignedMessage'>SignedMessage</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/enum.RoutingMessage.html' title='routing::RoutingMessage'>RoutingMessage</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/struct.RequestMessage.html' title='routing::RequestMessage'>RequestMessage</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/struct.ResponseMessage.html' title='routing::ResponseMessage'>ResponseMessage</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/enum.RequestContent.html' title='routing::RequestContent'>RequestContent</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/enum.ResponseContent.html' title='routing::ResponseContent'>ResponseContent</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/enum.Authority.html' title='routing::Authority'>Authority</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/struct.PlainData.html' title='routing::PlainData'>PlainData</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/enum.ImmutableDataType.html' title='routing::ImmutableDataType'>ImmutableDataType</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/struct.ImmutableData.html' title='routing::ImmutableData'>ImmutableData</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/struct.StructuredData.html' title='routing::StructuredData'>StructuredData</a>",];implementors['safe_core'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='safe_core/id/revocation_id_type/struct.RevocationIdType.html' title='safe_core::id::revocation_id_type::RevocationIdType'>RevocationIdType</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='safe_core/id/id_type/struct.IdType.html' title='safe_core::id::id_type::IdType'>IdType</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='safe_core/id/public_id_type/struct.PublicIdType.html' title='safe_core::id::public_id_type::PublicIdType'>PublicIdType</a>",];implementors['safe_nfs'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='safe_nfs/file/struct.File.html' title='safe_nfs::file::File'>File</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='safe_nfs/metadata/file_metadata/struct.FileMetadata.html' title='safe_nfs::metadata::file_metadata::FileMetadata'>FileMetadata</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='safe_nfs/metadata/directory_key/struct.DirectoryKey.html' title='safe_nfs::metadata::directory_key::DirectoryKey'>DirectoryKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='safe_nfs/metadata/directory_metadata/struct.DirectoryMetadata.html' title='safe_nfs::metadata::directory_metadata::DirectoryMetadata'>DirectoryMetadata</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='safe_nfs/directory_listing/struct.DirectoryListing.html' title='safe_nfs::directory_listing::DirectoryListing'>DirectoryListing</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='safe_nfs/enum.AccessLevel.html' title='safe_nfs::AccessLevel'>AccessLevel</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
