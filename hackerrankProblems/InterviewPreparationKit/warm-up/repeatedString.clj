(defn countInt [s n]
  (* (long (/ n (count s))) ((frequencies s) \a 0)))

(defn countRest [s n]
  ((frequencies (subs s 0 (mod n (count s)))) \a 0))

(defn repeatedString [s n]
  (+ (countInt s n) (countRest s n)))

(repeatedString "aba" 10)
(repeatedString "b" 1000000000000)
