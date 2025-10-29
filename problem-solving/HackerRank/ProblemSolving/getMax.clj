;https://www.hackerrank.com/challenges/maximum-element
(ns testing.core ; change ns
  (:gen-class))

(defn getMax
  [operations]
  (let [operations-parsed-str (map #(clojure.string/split % #" ") operations)
        operations-parsed-integer (map (fn [operation]
                                         (map (fn [number-str]
                                                (Integer/parseInt number-str))
                                              operation))
                                       operations-parsed-str)]
    (loop [[[query element] & tail] operations-parsed-integer
           [[_ max-local] & _ :as stack] '()
           response []]
      (cond
        (nil? query) response
        (= 1 query) (recur tail (conj stack [element (max element (or max-local element))]) response)
        (= 2 query) (recur tail (pop stack) response)
        (= 3 query) (recur tail stack (conj response max-local))))))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (prn (getMax ["1 1" "1 44" "3" "3" "2" "3" "3" "1 3" "1 37" "2" "3"])))
