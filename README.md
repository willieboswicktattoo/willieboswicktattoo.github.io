
🌐 **Live site: https://willieboswicktattoo.github.io**


## Adding Tattoo or Flash Photos

1. Go to **https://github.com/willieboswicktattoo/willieboswicktattoo.github.io**
2. Click [`images`](https://github.com/willieboswicktattoo/willieboswicktattoo.github.io/tree/main/images) → then [`tattoos`](https://github.com/willieboswicktattoo/willieboswicktattoo.github.io/tree/main/images/tattoos) or [`flash`](https://github.com/willieboswicktattoo/willieboswicktattoo.github.io/tree/main/images/flash)
3. Click **Add file** → **Upload files**
4. Drag or select photo
5. Click **Commit changes**

`gallery.json` updates automatically. The site will reflect your new photo in **1-2 minutes**.

Check the **Actions** tab — green checkmark ✅ means it's live.

---

## Adding a Shop Item
 
This takes two steps — uploading the photo, then adding the item details.
 
### Step 1 — Upload the photo
 
1. Go to **https://github.com/willieboswicktattoo/willieboswicktattoo.github.io**
2. Click [`images`](https://github.com/willieboswicktattoo/willieboswicktattoo.github.io/tree/main/images) <br><img width="500" alt="image" src="https://github.com/user-attachments/assets/e447e17f-c39c-42e1-bae8-3add80fb0c4c" />

4. Click [`shop`](https://github.com/willieboswicktattoo/willieboswicktattoo.github.io/tree/main/images/shop) <br><img width="400" alt="image" src="https://github.com/user-attachments/assets/f10815dc-475f-428f-b19a-63eac1ed9691" />

6. Click **Add file** → **Upload files** <br><img width="500" alt="image" src="https://github.com/user-attachments/assets/ac141cdf-991c-4d1c-b090-1a81d645e57e" />

7. Drag your photo in
8. Click the green **Commit changes** button <br><img width="500" alt="image" src="https://github.com/user-attachments/assets/efa34e8a-5d16-4e51-8503-634eef882285" />

---
 
### Step 2 — Add the item details
 
1. Go back to https://github.com/willieboswicktattoo/willieboswicktattoo.github.io
2. Click the file called [**`shop.json`**](https://github.com/willieboswicktattoo/willieboswicktattoo.github.io/blob/main/shop.json) <br> <img width="500" alt="image" src="https://github.com/user-attachments/assets/4158042c-c777-4064-9284-7d8e46d82fd4" />

3. Click the **pencil icon** ✏️ in the top right to edit it <br> <img width="200" alt="image" src="https://github.com/user-attachments/assets/acc7a2fd-0daf-4a00-8466-4c45be819385" />

> You'll see something like this:
 
```
[
  {
    "image": "art1.jpg",
    "name": "Art Print No. 1",
    "price": 30
  }
]
```
 
4. Click after the last `}` and before the `]`, and add a comma and a new item:
```diff
[
  {
    "image": "art1.jpg",
    "name": "Art Print No. 1",
    "price": 30
  }
+ ,
+ {
+   "image": "coolprint.jpg",
+   "name": "Name of your new item",
+   "price": 45
+ }
]
```
 
> ⚠️ Important:
> - The `"image"` name must **exactly match** the file you uploaded in Step 1
> - `"price"` should be a number only — **no $ sign** (e.g. `45` not `"$45"`)
> - Every item except the last one needs a **comma** after the `}`
 
5. Click the green **Commit changes** button
Your new item will appear in the shop after a few minutes! <br> <img width="200" alt="image" src="https://github.com/user-attachments/assets/bcd0c14f-68c8-481c-b707-421457efb933" />
 
---
## Adding Business Paypal Account
 
1. Click [**`shop.html`**](https://github.com/willieboswicktattoo/willieboswicktattoo.github.io/edit/main/shop.html) → click the pencil icon ✏️
2. Update line 41 to your paypal email
   ```
   <input type="hidden" name="business" value="ADD_YOUR_PAYPAL_EMAIL@gmail.com"
3. Click commit changes
---
## Removing a Shop Item
 
1. Click [**`shop.json`**](https://github.com/willieboswicktattoo/willieboswicktattoo.github.io/blob/main/shop.json) → click the pencil icon ✏️
2. Delete the entire block for that item (from `{` to `}`)
3. Make sure there's no trailing comma after the last remaining item
4. Click **Commit changes** <br> <img width="200" alt="image" src="https://github.com/user-attachments/assets/bcd0c14f-68c8-481c-b707-421457efb933" />

---

## Tips

- File names should have **no spaces** — use dashes (e.g. `rose-print.jpg`)
- Photos should be **JPG or PNG**
- Price should be a **number** with no `$` sign (e.g. `30` not `"$30"`)
- feel free to reach out to me at any time if you have trouble!
