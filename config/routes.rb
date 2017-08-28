Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    resources :services, except: [:new, :edit]
  end

  root 'welcome#index'
end
