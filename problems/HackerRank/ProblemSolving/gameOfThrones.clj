(defn gameOfThrones [str]
  (->> str
       frequencies
       (filter (fn [[_ v]] (odd? v)))
       count
       (#(if (<= % 1) "YES" "NO"))))

(gameOfThrones "cdefghmnopqrstuvw")
(gameOfThrones "cdcdcdcdeeeef")
