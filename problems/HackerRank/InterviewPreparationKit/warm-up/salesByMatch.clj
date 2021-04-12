; https://www.hackerrank.com/challenges/sock-merchant
(defn sockMerchant [_ arr]
  (reduce (fn [accu [_ v]] (+ (int (/ v 2)) accu))
          0
          (frequencies arr)))

(sockMerchant 7 [10 20 20 10 10 30 50 10 20])
