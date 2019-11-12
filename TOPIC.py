from collections import Counter, defaultdict

f = open("vocabulary2.txt", encoding="utf8")
f2 = open("all_words_topik_level_1_11-34_listening_text+reading.txt", encoding="utf8")
f3 = open("all_words_topik_level_1_35-52_listening_text+reading.txt", encoding="utf8")
f4 = open("all_words_topik_level_2_11-34_listening_text+reading.txt", encoding="utf8")
f5 = open("mixed.txt", encoding="utf8")
f6 = open("all_words_topik_level_1_11-52_listening_text+reading.txt",encoding="utf8")
f7 = open("dumai.txt", encoding="utf8")


b = f6.read().split()
wordlist = b
# invert a temporary Counter(wordlist) dictionary so keys are
# frequency of occurrence and values are lists the words encountered
freqword = defaultdict(list)
for word, freq in Counter(wordlist).items():
    freqword[freq].append(word)
cnt = len(set(wordlist))- 55
cnt1 = len(set(wordlist))
# print in order of occurrence (with sorted list of words)
cnt2 = 0
summ = 0
for freq in sorted(freqword):
    if cnt2 < cnt:
        print('count {}: {}x {}'.format(freq,len(sorted(freqword[freq])), sorted(freqword[freq])))
        cnt2+=len(sorted(freqword[freq]))
        # print(cnt2)
    elif cnt2>=cnt and cnt2< cnt1-5:
        print('count {}: {}x {}'.format(freq,len(sorted(freqword[freq])), sorted(freqword[freq])))
        summ +=len(sorted(freqword[freq]))*freq
        ok  = len(sorted(freqword[freq]))*freq
        # print(len(sorted(freqword[freq])),freq, ok, summ)
        # print(summ)
        cnt2+=len(sorted(freqword[freq]))
print(((summ/len(wordlist))*100))
print("summ:",summ)
print("cnt2:",cnt2)
print("all:",len(wordlist))
print("all set:", len(set(wordlist)))
©
