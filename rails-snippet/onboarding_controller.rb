class OnboardingController < ApplicationController
  def create
  end

  def update
    studio = Studio.find_by_uid params["uid"]
    studio.additional_info["group_class"] = GroupClass.new(params["onboarding_form"], studio.handle).process
    studio.save
    render json: {}, status: :ok
  end
end
