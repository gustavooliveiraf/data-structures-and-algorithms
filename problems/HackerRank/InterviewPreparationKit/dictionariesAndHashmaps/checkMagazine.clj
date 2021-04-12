; https://www.hackerrank.com/challenges/ctci-ransom-note
(defn checkMagazine [maga note]
  (let [noteSize (count note)]
    (loop [magaMap (frequencies maga)
           index 0]
      (if (= index noteSize)
        "Yes"
        (let [key (get note index)
              value (magaMap key)]
          (if-not (and value (not= value 0))
            "No"
            (recur (assoc magaMap key (dec value)) (inc index))))))))

(checkMagazine ["give" "me" "one" "grand" "today" "night"] ["give" "one" "grand" "today"])
(checkMagazine ["two" "times" "three" "is" "not" "four"] ["two" "times" "two" "is" "four"])
