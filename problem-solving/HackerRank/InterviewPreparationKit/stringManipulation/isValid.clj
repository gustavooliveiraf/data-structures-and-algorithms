; https://www.hackerrank.com/challenges/sherlock-and-valid-string
(defn isValid [str]
  (let [str-freq-vals (vals (frequencies str))
        str-freq-vals-freq (frequencies str-freq-vals)
        is-valid-vals (some #(= % 1) (vals str-freq-vals-freq))
        is-valid-keys (= (Math/abs (apply - (keys str-freq-vals-freq))) 1)
        is-valid-one (= (str-freq-vals-freq 1) 1)
        size (count str-freq-vals-freq)]
    (cond
      (= size 1) "YES"
      (= size 2) (if (or (and is-valid-vals is-valid-keys) is-valid-one) "YES" "NO")
      (> size 2) "NO")))

(isValid "aabbcd")
