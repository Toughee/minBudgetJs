from Tkinter import *
# import qfunctions

# qBudget

master = Tk()

def callback():
    print ""

b = Button(master, text="Gross annual income per hour", command=callback)
c = Button(master, text="Savings", command=callback)
d = Button(master, text="College Fund Money", command=callback)
e = Button(master, text="Vacation", command=callback)
f = Button(master, text="Small sum purchase", command=callback)

b.pack()
c.pack()
d.pack()
e.pack()
f.pack()

mainloop()