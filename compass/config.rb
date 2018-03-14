	
path_public = "public/"

css_dir = path_public +  "css/"
sass_dir = "source"
images_dir = path_public + "image/"
javascripts_dir = path_public + "js/"
fonts_dir = path_public + "font/"
generated_images_dir = images_dir + "common/"

output_style = :compressed
relative_assets = true
line_comments = false
sass_options = { :debug_info => false }

http_path = "http://127.0.0.1:8000/"
http_images_path = "/gulp-compass-boilerplate/public/image/"
http_generated_images_path = "/gulp-compass-boilerplate/public/image/common/"
 