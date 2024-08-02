#测试一下        用python做一个对输入数组进行冒泡排序的程序，并且把数组内容存在本地
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr


def read_array_from_file(filename):
    with open(filename, "r") as file:
        content = file.read()
        array = list(map(int, content.strip().split()))
    return array


def write_array_to_file(filename, array):
    with open(filename, "w") as file:
        file.write(" ".join(map(str, array)))


if __name__ == "__main__":
    input_filename = "test-data.txt"
    # 读取数组
    try:
        array = read_array_from_file(input_filename)
        print("成功打开文件，读取到的数组:", array)
    except FileNotFoundError:
        print("文件不存在，请确认文件路径")
        array = []

    if array:
        sorted_array = bubble_sort(array)
        print("排序后的数组:", sorted_array)
        write_array_to_file(input_filename, sorted_array)
        print("排序后的数组已保存到文件:", input_filename)