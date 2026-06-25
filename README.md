# Willie Boswick Tattoos

🌐 **Live site: https://willieboswicktattoo.github.io**


## Adding Tattoo or Flash Photos

1. Go to **https://github.com/willieboswicktattoo/willieboswicktattoo.github.io**
2. Click `images` → then `tattoos` or `flash`
3. Click **Add file** → **Upload files**
4. Drag your photo in
5. Click **Commit changes**

`gallery.json` updates automatically. The site will reflect your new photo in **1-2 minutes**.

Check the **Actions** tab — green checkmark ✅ means it's live.

---

## Adding a Shop Item
 
This takes two steps — uploading the photo, then adding the item details.
 
### Step 1 — Upload the photo
 
1. Go to **https://github.com/willieboswicktattoo/willieboswicktattoo.github.io**
2. Click `images` → click `shop`
3. Click **Add file** → **Upload files**
4. Drag your photo in
5. Make note of the exact file name (e.g. `coolprint.jpg`)
6. Click the green **Commit changes** button
---
 
### Step 2 — Add the item details
 
1. Go back to the main repo page
2. Click the file called **`shop.json`**
3. Click the **pencil icon** ✏️ in the top right to edit it
You'll see something like this:
 
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
```
[
  {
    "image": "art1.jpg",
    "name": "Art Print No. 1",
    "price": 30
  },
  {
    "image": "coolprint.jpg",
    "name": "Name of your new item",
    "price": 45
  }
]
```
 
> ⚠️ Important:
> - The `"image"` name must **exactly match** the file you uploaded in Step 1
> - `"price"` should be a number only — **no $ sign** (e.g. `45` not `"$45"`)
> - Every item except the last one needs a **comma** after the `}`
 
5. Click the green **Commit changes** button
Your new item will appear in the shop right away!
 
---
 
## Removing a Shop Item
 
1. Click **`shop.json`** → click the pencil icon ✏️
2. Delete the entire block for that item (from `{` to `}`)
3. Make sure there's no trailing comma after the last remaining item
4. Click **Commit changes**
---

## Tips

- File names should have **no spaces** — use dashes (e.g. `rose-print.jpg`)
- Photos should be **JPG or PNG**
- Price should be a **number** with no `$` sign (e.g. `30` not `"$30"`)
- feel free to reach out to me at any time if you have trouble!
