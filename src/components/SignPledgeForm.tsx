"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';

const pledgeSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  city: z.string().min(1, 'City is required').max(100, 'City is too long'),
  team_name: z.string().max(100, 'Team name is too long').optional(),
  is_public: z.boolean().refine(val => val === true, {
    message: 'You must affirm the pledge to continue',
  }),
});

type PledgeFormData = z.infer<typeof pledgeSchema>;

export default function SignPledgeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PledgeFormData>({
    resolver: zodResolver(pledgeSchema),
  });

  const onSubmit = async (data: PledgeFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('pledges')
        .insert({
          name: data.name,
          city: data.city,
          team_name: data.team_name || null,
          signed_at: new Date().toISOString(),
          is_public: data.is_public,
        });

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(`Database error: ${error.message || 'Unknown error'}`);
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting pledge:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
            Pledge Signed Successfully!
          </h3>
          <p className="text-green-700 dark:text-green-300 mb-4">
            Thank you for taking the pledge. Your commitment to human creativity in filmmaking is appreciated.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Sign Another Pledge
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            City *
          </label>
          <input
            {...register('city')}
            type="text"
            id="city"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Your city"
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="team_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Team Name (Optional)
          </label>
          <input
            {...register('team_name')}
            type="text"
            id="team_name"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Your team or production company"
          />
          {errors.team_name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.team_name.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-start">
            <input
              {...register('is_public')}
              type="checkbox"
              className="mt-1 mr-3 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              I publicly affirm this voluntary honor-based pledge. *
            </span>
          </label>
          {errors.is_public && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.is_public.message}</p>
          )}
        </div>

        {submitStatus === 'error' && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-red-800 dark:text-red-200 text-sm">
              {errorMessage || 'An error occurred while submitting your pledge. Please try again.'}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Signing Pledge...' : 'Sign the Pledge'}
        </button>
      </form>
    </div>
  );
}