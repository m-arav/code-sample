class GroupClass

  def initialize(form_data, studio_handle)
    @form_data = form_data
    @studio_handle = studio_handle
  end

  def process
    default_data = YAML.load_file("app/assets/studio_data/demo_studio.yml")
    default_data["name"] = @form_data["name"]
    default_data["handle"] = @studio_handle
    default_data["tag_line"] = @form_data["tag_line"]
    default_data["welcome_message"] = @form_data["welcome_message"].strip.split("\r\n")
    default_data["mission"]["header"] = @form_data["mission"]["header"]
    default_data["mission"]["message"] = @form_data["mission"]["message"].strip.split("\r\n")
    default_data["yoga_styles"] = @form_data["yoga_styles"].values
    default_data["senior_teachers_sections"]["senior_teachers"] = @form_data["senior_teachers"].values.map { |teacher|
      teacher["photo"] = upload_image(teacher["photo"])
      teacher["contact_number_hidden"]= false
      teacher
      }
    logo_url = upload_image(@form_data["logo"])
    default_data["logo"] = logo_url
    default_data["navbar"]["logo"] = logo_url
    default_data["slides"] = @form_data["slides"].map { |slide| upload_image(slide)  }
    default_data
  end

  private
  def upload_image(file)
    image_uploader = ImageUploader.new
    image_uploader.store!(file)
    image_uploader.url
  end
end
