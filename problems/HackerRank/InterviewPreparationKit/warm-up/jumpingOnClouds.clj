(defn return [jumps index length]
  (if (= index length)
    jumps
    (inc jumps)))

(defn jumpingOnClouds [c]
  (loop [index 0
         jumps 0
         length (dec (count c))]
    (if (>= (+ index 1) length)
      (return jumps index length)
      (if (= (get c (+ index 2)) 0)
        (recur (+ index 2) (inc jumps) length)
        (recur (inc index) (inc jumps) length)))))

(jumpingOnClouds [0 0 0 0 1 0])
(jumpingOnClouds [0 0 1 0 0 1 0])
