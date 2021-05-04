; https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks
; (def fptr "local-test.txt")
(def fptr (get (System/getenv) "OUTPUT_PATH"))

(defn build-stack-print [stack stack-print]
  (if (empty? stack-print)
    ['() (reverse stack)]
    [stack stack-print]))

(defn peek-stack [stack stack-print]
  (let [[stack stack-print] (build-stack-print stack stack-print)]
    (spit fptr (str (first stack-print) "\n") :append true)
    [stack stack-print]))

(defn pop-stack [stack stack-print]
  (let [[stack stack-print] (build-stack-print stack stack-print)]
    [stack (pop stack-print)]))

(defn queueUsingTwoStacks [queries]
  (loop [queries queries
        stack '()
        stack-print '()]
    (let [[type x] (first queries)]
      (cond
        (= type 1) (recur (pop queries) (cons x stack) stack-print)
        (= type 2) (let [[s sp] (pop-stack stack stack-print)] (recur (pop queries) s sp))
        (= type 3) (let [[s sp] (peek-stack stack stack-print)] (recur (pop queries) s sp))))))

(def number-queries (Integer/parseInt (clojure.string/trim (read-line))))

(def queries [])

(doseq [_ (range number-queries)]
  (def queries (conj queries (vec (map #(Integer/parseInt %) (clojure.string/split (read-line) #" "))))))

(queueUsingTwoStacks (apply list queries))
