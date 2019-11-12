import numpy
import random

f = open("vocabulary2.txt", encoding="utf8")
b = f.read().split()
# print(f.read().split())
# print(b)

# print(len(b))
# ali = [[1 2 3][4, 5, 6][7, 8, 9]]


# print(ali)

indexes = []
korean_words = []
english_words = []
indexes.append(b[0::3])
korean_words.append(b[1::3])
english_words.append(b[2::3])

# # # shuffle
# all_words_lists = []
# for i in range(len(indexes[0])):
#     all_words_lists.append([indexes[0][i][0::], korean_words[0][i][0::], english_words[0][i][0::]])
# # print(all_words_lists)
# random.shuffle(all_words_lists)
# # print(all_words_lists)
# new_all_words_list = []

# all_words_lists.split()
# print(all_words_lists)
# print(len(all_words_lists[0]))

# for i in range(len(all_words_lists)):
#     new_all_words_list.append(all_words_lists[i][0:3])
# print("new_all_words_list:", new_all_words_list)


# all_words_lists.append([indexes[0][i],korean_words[0][i],english_words[0][i]])
#

word_dict = {}
for i in range(len(indexes[0])):
    word_dict[korean_words[0][i]] = english_words[0][i]

# ali = {1: 2, 3: 4, 5: 6, 7: 8}
# print(ali)

# print(word_dict)


a1 = list(word_dict.items())
# print(a1)
numpy.random.shuffle(a1)
a = dict(a1)
# print(a)
word_dict = a
# keys = list(word_dict.keys())
# print(keys)
# random.shuffle(keys)
# print(keys)
# print([(key, word_dict[key]) for key in keys])
# print([key for key in keys])

# new_word_dict = {}
# for i in range(len(new_indexes[0])):
#     new_word_dict[new_korean_words[0][i]] = new_english_words[0][i]
#
# print(new_word_dict)
# #
def method(dict, value):
    for k, v in dict.items():
        if v == value:
            print(k)
            yield k
method(word_dict, "cold")
# for k, v in word_dict.items():
#     if v == "cold":
#         print(k)

def multiple_choice(dicts, valuew, index_value, new_list):
    value_list = []
    for keys, values in dicts.items():
        value_list.append(values)
    random.shuffle(value_list)
    # print(value_list)
    new_list.append(value_list[0])
    new_list.append(value_list[1])
    new_list.append(value_list[2])
    # new_list.append(value_list[3])
    # new_list.append(value_list[4])
    # new_list.append(value_list[5])

    if valuew in new_list:
        new_list.remove(valuew)
        new_list.append(value_list[3])
    new_list.append(valuew)
    random.shuffle(new_list)
    index_value = new_list.index(valuew)
    return dicts, valuew, index_value, new_list


y = 0
index = 0
player_score = 0
print("This is a vocabulary game. The objective is to choose correct translation word")
while y == 0:
    enter = input("Hit ENTER to begin: ")
    if enter == "":
        decision = "YES"
        y = 1
    else:
        decision = "No"
words_learn = []

while decision == "YES":
    cnt_correct = 0
    cnt_total = 0
    for key, value in word_dict.items():
        print("\n","№", cnt_total+1, "The word is {}, what is the correct translation?".format(key))
        decision = "NO"
        choice_list = []
        word_dict, value, index, choice_list = multiple_choice(word_dict, value, index, choice_list)
        real_index = index + 1
        print("Type the number of the answer: \n")
        print("1.{}".format(choice_list[0]))
        print("2.{}".format(choice_list[1]))
        print("3.{}".format(choice_list[2]))
        print("4.{}".format(choice_list[3]))
        # print("5.{}".format(choice_list[4]))
        # print("6.{}".format(choice_list[5]))
        # print("7.{}".format(choice_list[6]))

        x = 0
        # cnt_correct = 0
        # cnt_total = 0
        while x == 0:
            choice = input("Answer Choice: ")
            try:
                int_choice = int(choice)
                x = 1
            except:
                print("Please type in your number choice")
        if int_choice == real_index:
            print("\nCongratulations bro!\nYou got question right! \nAlmost TOPIK 6 Level xD\nCorrect answer: {}".format(choice_list[index]))
            cnt_correct = cnt_correct + 1
            cnt_total = cnt_total + 1
            # show all answers
            # print("1.{}".format(choice_list[0]))
            # print(choice_list[0])
            # print(type(choice_list[0]))
            for k, v in word_dict.items():
                if v == choice_list[0]:
                    print("1.", choice_list[0], "-", k)
            for k, v in word_dict.items():
                if v == choice_list[1]:
                    print("2.", choice_list[1], "-", k)
            for k, v in word_dict.items():
                if v == choice_list[2]:
                    print("3.", choice_list[2], "-", k)
            for k, v in word_dict.items():
                if v == choice_list[3]:
                    print("4.", choice_list[3], "-", k)
            # for k, v in word_dict.items():
            #     if v == choice_list[4]:
            #         print("5.", choice_list[4], "-", k)
            # for k, v in word_dict.items():
            #     if v == choice_list[5]:
            #         print("6.", choice_list[5], "-", k)
            # for k, v in word_dict.items():
            #     if v == choice_list[6]:
            #         print("7.", choice_list[6], "-", k)
            player_score = player_score + 1
            print("\nThe score of ENT is: ", cnt_correct, "/", cnt_total)

        else:
            print("Sorry bro. The answer is: {}".format(choice_list[index]))
            words_learn.append('{}-{}'.format(key,choice_list[index]))
            cnt_total = cnt_total + 1
            for k, v in word_dict.items():
                if v == choice_list[0]:
                    print("1.", choice_list[0], "-", k)
            for k, v in word_dict.items():
                if v == choice_list[1]:
                    print("2.", choice_list[1], "-", k)
            for k, v in word_dict.items():
                if v == choice_list[2]:
                    print("3.", choice_list[2], "-", k)
            for k, v in word_dict.items():
                if v == choice_list[3]:
                    print("4.", choice_list[3], "-", k)
            # for k, v in word_dict.items():
            #     if v == choice_list[4]:
            #         print("5.", choice_list[4], "-", k)
            # for k, v in word_dict.items():
            #     if v == choice_list[5]:
            #         print("6.", choice_list[5], "-", k)
            # for k, v in word_dict.items():
            #     if v == choice_list[6]:
            #         print("7.", choice_list[6], "-", k)
            player_score = player_score + 1

        # print("Your score is {}".format(player_score))
            print("\nThe score of ENT is: ", cnt_correct, "/", cnt_total)

        if cnt_total <= 50:
            continue
        else:
            print("You won the game!")
            print("The words you need to learn are: ")
            for itr in range(len(words_learn)):
                print(itr+1, "th word is:", words_learn[itr])
            break
